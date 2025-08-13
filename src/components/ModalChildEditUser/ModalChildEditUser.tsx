import { useAppDispatch, useAppSelector } from '@/store/hooks';
import s from './ModalChildEditUser.module.scss';
import {
  selectIsLoading,
  selectUserAvatar,
  selectUserEmail,
  selectUserName,
  selectUserPhone,
} from '@/store/auth/selectors';
import { svgIcon } from '@/components/App';
import { ErrorMessage, Field, Form, Formik, FormikValues } from 'formik';
import * as Yup from 'yup';
import clsx from 'clsx';
import ButtonMain from '@/components/ButtonMain/ButtonMain';
import ButtonUpload from '@/components/ButtonUpload/ButtonUpload';
import { editUser } from '@/store/auth/operations';
import { enqueueSnackbar } from 'notistack';
import { setDefaultAvatar } from '@/store/auth/slice';
import { useState } from 'react';

export interface ModalChildEditUserProps {
  onClose: () => void;
}

interface FormValues {
  name: string;
  email: string;
  avatar: string;
  phone: string;
}

const ModalChildEditUser = ({ onClose }: ModalChildEditUserProps) => {
  const userAvatar = useAppSelector(selectUserAvatar);
  const userName = useAppSelector(selectUserName);
  const userEmail = useAppSelector(selectUserEmail);
  const userPhone = useAppSelector(selectUserPhone);
  const isLoading = useAppSelector(selectIsLoading);

  const dispatch = useAppDispatch();

  // Local state for avatar preview
  const [avatarPreview, setAvatarPreview] = useState<string>(userAvatar || '');
  const [avatarError, setAvatarError] = useState<boolean>(false);
  const [avatarUploading, setAvatarUploading] = useState<boolean>(false);

  const initialValues: FormValues = {
    name: userName || '',
    email: userEmail || '',
    avatar: userAvatar || '',
    phone: userPhone || '',
  };

  const validationSchema = Yup.object().shape({
    name: Yup.string().min(3, 'Too short!').max(20, 'Too long!'),
    email: Yup.string().matches(/^[\w-]+(\.[\w-]+)*@([\w-]+\.)+[a-zA-Z]{2,7}$/, 'Email must be valid'),
    avatar: Yup.string().matches(/^https?:\/\/.*\.(?:png|jpg|jpeg|gif|bmp|webp)$/, 'Avatar URL must be valid'),
    phone: Yup.string().matches(/^\+38\d{10}$/, 'Phone must be valid'),
  });

  // Handle avatar URL change
  const handleAvatarChange = (value: string, setFieldValue: (field: string, value: string) => void) => {
    setFieldValue('avatar', value);

    if (value && /^https?:\/\/.*\.(?:png|jpg|jpeg|gif|bmp|webp)$/.test(value)) {
      setAvatarPreview(value);
      setAvatarError(false);
    } else if (!value) {
      setAvatarPreview('');
      setAvatarError(false);
    }
  };

  // Handle avatar image error
  const handleAvatarError = () => {
    setAvatarError(true);
    if (avatarPreview === userAvatar) {
      dispatch(setDefaultAvatar());
    }
  };

  const handleFileUpload = async (file: File, setFieldValue: (field: string, value: string) => void) => {
    setAvatarUploading(true);
    try {
      const reader = new FileReader();
      reader.onload = (e) => {
        const localPreview = e.target?.result as string;
        setAvatarPreview(localPreview);
        setAvatarError(false);
      };
      reader.readAsDataURL(file);

      const CLOUDINARY_URL = import.meta.env.VITE_CLOUDINARY_URL;
      const CLOUDINARY_UPLOAD_PRESET = import.meta.env.VITE_CLOUDINARY_UPLOAD_PRESET;

      if (!CLOUDINARY_URL || !CLOUDINARY_UPLOAD_PRESET) {
        throw new Error('Cloudinary configuration is missing');
      }

      const formData = new FormData();
      formData.append('file', file);
      formData.append('upload_preset', CLOUDINARY_UPLOAD_PRESET);

      const response = await fetch(CLOUDINARY_URL, {
        method: 'POST',
        body: formData,
      });

      if (!response.ok) {
        const errorData = await response.json();
        throw new Error(errorData.error?.message || 'Upload failed');
      }

      const data = await response.json();
      const cloudinaryUrl = data.secure_url;

      setFieldValue('avatar', cloudinaryUrl);
      setAvatarPreview(cloudinaryUrl);
    } catch (error) {
      enqueueSnackbar(error instanceof Error ? error.message : 'Failed to upload photo', {
        variant: 'error',
      });
      setAvatarError(true);
    } finally {
      setAvatarUploading(false);
    }
  };

  // Send form (edit user data)
  const handleSubmit = async (values: FormikValues): Promise<void> => {
    const userData: Partial<FormValues> = {};

    if (values.name) userData.name = values.name;
    if (values.email) userData.email = values.email;
    if (values.phone) userData.phone = values.phone;
    if (values.avatar) userData.avatar = values.avatar;

    if (Object.keys(userData).length === 0) {
      enqueueSnackbar('No changes to save.', { variant: 'warning' });
      return;
    }

    try {
      await dispatch(editUser(userData)).unwrap();
      onClose();
    } catch (error) {
      enqueueSnackbar(`Update failed: ${error}`, { variant: 'error' });
    }
  };

  return (
    <div className={s.modalChildEditUser}>
      <h3 className={s.title}>Edit information</h3>

      <div className={s.avatar}>
        {!avatarPreview || avatarError ? (
          <svg className={s.iconUser}>
            <use href={`${svgIcon}#icon-user`} />
          </svg>
        ) : (
          <img
            className={s.userAvatar}
            src={avatarPreview}
            alt="User avatar"
            width="86"
            height="86"
            onError={handleAvatarError}
          />
        )}
      </div>

      <Formik initialValues={initialValues} onSubmit={handleSubmit} validationSchema={validationSchema}>
        {({ errors, values, setFieldValue, touched }) => (
          <Form className={s.form}>
            <div className={s.fieldsBlock}>
              <label
                className={`${s.label} ${s.labelAvatar} ${errors.avatar && touched.avatar ? s.error : ''}`}
                htmlFor="avatar"
              >
                <div className={s.fieldWrap}>
                  <Field
                    className={clsx(s.field, s.fieldAvar, values.avatar && s.filled)}
                    type="text"
                    name="avatar"
                    id="avatar"
                    placeholder="https://"
                    autoComplete="off"
                    onChange={(e: React.ChangeEvent<HTMLInputElement>) =>
                      handleAvatarChange(e.target.value, setFieldValue)
                    }
                  />
                  <ErrorMessage className={s.fieldError} name="avatar" component="span" />
                </div>
                <ButtonUpload
                  className={s.btnAvatar}
                  onFileSelect={(file) => handleFileUpload(file, setFieldValue)}
                  onInvalidFile={(msg) => enqueueSnackbar(msg, { variant: 'error' })}
                  loading={avatarUploading}
                  accept="image/*"
                />
              </label>

              <label className={`${s.label} ${errors.name && touched.name ? s.error : ''}`} htmlFor="name">
                <Field
                  className={clsx(s.field, values.name && s.filled)}
                  type="text"
                  name="name"
                  id="name"
                  placeholder="Name"
                  autoComplete="off"
                />
                <ErrorMessage className={s.fieldError} name="name" component="span" />
              </label>

              <label className={`${s.label} ${errors.email && touched.email ? s.error : ''}`} htmlFor="email">
                <Field
                  className={clsx(s.field, values.email && s.filled)}
                  type="email"
                  name="email"
                  id="email"
                  placeholder="name@gmail.com"
                  autoComplete="off"
                />
                <ErrorMessage className={s.fieldError} name="email" component="span" />
              </label>

              <label className={`${s.label} ${errors.phone && touched.phone ? s.error : ''}`} htmlFor="phone">
                <Field
                  className={clsx(s.field, values.phone && s.filled)}
                  type="tel"
                  name="phone"
                  id="phone"
                  placeholder="+380"
                  autoComplete="off"
                />
                <ErrorMessage className={s.fieldError} name="phone" component="span" />
              </label>
            </div>

            <ButtonMain
              className={clsx(s.btn, s.btnSubmit)}
              disabled={isLoading || avatarUploading}
              lowerCase
              small
              type="submit"
            >
              {isLoading ? 'Saving...' : 'Save'}
            </ButtonMain>
          </Form>
        )}
      </Formik>
    </div>
  );
};

export default ModalChildEditUser;
