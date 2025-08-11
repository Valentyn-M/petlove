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
import { ErrorMessage, Field, Form, Formik, FormikErrors, FormikValues } from 'formik';
import * as Yup from 'yup';
import clsx from 'clsx';
import ButtonMain from '@/components/ButtonMain/ButtonMain';
import ButtonUpload from '@/components/ButtonUpload/ButtonUpload';
import { changeAvatar, editUser } from '@/store/auth/operations';
import { enqueueSnackbar } from 'notistack';
import { setDefaultAvatar } from '@/store/auth/slice';

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

  const initialValues: FormValues = {
    name: `${userName}` || '',
    email: `${userEmail}` || '',
    avatar: `${userAvatar}` || '',
    phone: `${userPhone}` || '',
  };

  const validationSchema = Yup.object().shape({
    name: Yup.string().min(3, 'Too short!').max(20, 'Too long!'),
    email: Yup.string().matches(/^[\w-]+(\.[\w-]+)*@([\w-]+\.)+[a-zA-Z]{2,7}$/, 'Email must be valid'),
    avatar: Yup.string().matches(/^https?:\/\/.*\.(?:png|jpg|jpeg|gif|bmp|webp)$/, 'Avatar URL must be valid'),
    phone: Yup.string().matches(/^\+38\d{10}$/, 'Phone must be valid'),
  });

  // Change avatar
  const handleUploadAvatar = async (
    avatarUrl: string,
    validateForm: () => Promise<FormikErrors<FormValues>>
  ): Promise<void> => {
    const errors = await validateForm();
    if (errors.avatar) return;

    try {
      await dispatch(changeAvatar({ avatar: avatarUrl.trim() })).unwrap();
    } catch (error) {
      enqueueSnackbar(`Error: ${error}`, { variant: 'error' });
      dispatch(setDefaultAvatar());
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
      enqueueSnackbar('No fields to update.', { variant: 'warning' });
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
        {!userAvatar ? (
          <svg className={s.iconUser}>
            <use href={`${svgIcon}#icon-user`} />
          </svg>
        ) : (
          <img
            className={s.userAvatar}
            src={userAvatar}
            alt="User avatar"
            width="86"
            height="86"
            onError={() => dispatch(setDefaultAvatar())}
          />
        )}
      </div>

      <Formik initialValues={initialValues} onSubmit={handleSubmit} validationSchema={validationSchema}>
        {({ errors, values, validateForm }) => (
          <Form className={s.form}>
            <div className={s.fieldsBlock}>
              <label className={`${s.label} ${s.labelAvatar} ${errors.avatar ? s.error : ''}`} htmlFor="avatar">
                <div className={s.fieldWrap}>
                  <Field
                    className={clsx(s.field, s.fieldAvar, values.avatar && s.filled)}
                    type="text"
                    name="avatar"
                    id="avatar"
                    placeholder="https://"
                    autoComplete="off"
                  />
                  <ErrorMessage className={s.fieldError} name="avatar" component="span" />
                </div>
                <ButtonUpload className={s.btnAvatar} onClick={() => handleUploadAvatar(values.avatar, validateForm)} />
              </label>

              <label className={`${s.label} ${errors.name ? s.error : ''}`} htmlFor="name">
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

              <label className={`${s.label} ${errors.email ? s.error : ''}`} htmlFor="email">
                <Field
                  className={clsx(s.field, values.email && s.filled)}
                  type="text"
                  name="email"
                  id="email"
                  placeholder="name@gmail.com"
                  autoComplete="off"
                />
                <ErrorMessage className={s.fieldError} name="email" component="span" />
              </label>

              <label className={`${s.label} ${errors.phone ? s.error : ''}`} htmlFor="phone">
                <Field
                  className={clsx(s.field, values.phone && s.filled)}
                  type="text"
                  name="phone"
                  id="phone"
                  placeholder="+380"
                  autoComplete="off"
                />
                <ErrorMessage className={s.fieldError} name="phone" component="span" />
              </label>
            </div>

            <ButtonMain className={clsx(s.btn, s.btnSubmit)} disabled={isLoading} lowerCase small type="submit">
              {isLoading ? 'Saving...' : 'Save'}
            </ButtonMain>
          </Form>
        )}
      </Formik>
    </div>
  );
};

export default ModalChildEditUser;
