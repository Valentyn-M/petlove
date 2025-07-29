import { useAppSelector } from '@/store/hooks';
import s from './ModalChildEditUser.module.scss';
import {
  selectIsLoading,
  selectUserAvatar,
  selectUserEmail,
  selectUserName,
  selectUserPhone,
} from '@/store/auth/selectors';
import { svgIcon } from '@/components/App';
import { ErrorMessage, Field, Form, Formik, FormikHelpers, FormikValues } from 'formik';
import * as Yup from 'yup';
import clsx from 'clsx';
import ButtonMain from '@/components/ButtonMain/ButtonMain';
import ButtonUpload from '@/components/ButtonUpload/ButtonUpload';

export interface ModalChildEditUserProps {}

interface FormValues {
  name: string;
  email: string;
  avatar: string;
  phone: string;
}

const ModalChildEditUser = ({}: ModalChildEditUserProps) => {
  const userAvatar = useAppSelector(selectUserAvatar);
  const userName = useAppSelector(selectUserName);
  const userEmail = useAppSelector(selectUserEmail);
  const userPhone = useAppSelector(selectUserPhone);
  const isLoading = useAppSelector(selectIsLoading);

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

  const handleSubmit = (values: FormikValues, actions: FormikHelpers<FormValues>): void => {
    console.log(values);
    actions.resetForm();
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
          <img className={s.userAvatar} src={userAvatar} alt="User avatar" width="86" height="86" />
        )}
      </div>

      <Formik initialValues={initialValues} onSubmit={handleSubmit} validationSchema={validationSchema}>
        {({ errors }) => (
          <Form className={s.form}>
            <label className={`${s.label} ${errors.name ? s.error : ''}`} htmlFor="avatar">
              <div className={s.fieldWrap}>
                <Field
                  className={clsx(s.field, s.fieldAvar, userAvatar && s.filled)}
                  type="text"
                  name="avatar"
                  id="avatar"
                  placeholder="https://"
                  autoComplete="off"
                />
                <ErrorMessage className={s.fieldError} name="name" component="span" />
              </div>
              <ButtonUpload />
            </label>

            <label className={`${s.label} ${errors.name ? s.error : ''}`} htmlFor="name">
              <Field
                className={clsx(s.field, userName && s.filled)}
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
                className={clsx(s.field, userEmail && s.filled)}
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
                className={clsx(s.field, userPhone && s.filled)}
                type="text"
                name="phone"
                id="phone"
                placeholder="+380"
                autoComplete="off"
              />
              <ErrorMessage className={s.fieldError} name="phone" component="span" />
            </label>

            <ButtonMain className={s.btn} disabled={isLoading} type="submit">
              {isLoading ? 'Saving...' : 'Save'}
            </ButtonMain>
          </Form>
        )}
      </Formik>
    </div>
  );
};

export default ModalChildEditUser;
