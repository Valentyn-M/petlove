import { NavLink } from 'react-router-dom';
import s from './RegistrationForm.module.scss';
import { ErrorMessage, Field, Form, Formik, FormikHelpers } from 'formik';
import * as Yup from 'yup';
import ButtonMain from '@/components/ButtonMain/ButtonMain';
import { useState } from 'react';
import { svgIcon } from '@/components/App';
import clsx from 'clsx';
import TitleMain from '@/components/TitleMain/TitleMain';

export interface RegistrationFormProps {}

interface FormValues {
  name: string;
  email: string;
  password: string;
  passwordConfirm: string;
}

const RegistrationForm = ({}: RegistrationFormProps) => {
  const initialValues: FormValues = {
    name: '',
    email: '',
    password: '',
    passwordConfirm: '',
  };

  const registerSchema = Yup.object().shape({
    name: Yup.string().min(3, 'Too short!').max(20, 'Too long!').required('Required'),
    email: Yup.string()
      .matches(/^[\w-]+(\.[\w-]+)*@([\w-]+\.)+[a-zA-Z]{2,7}$/, 'Email must be valid')
      .required('Email is required'),
    password: Yup.string()
      .min(8, 'Password must be at least 8 characters long')
      .max(32, 'Password must not exceed 32 characters')
      .matches(
        /^(?=.*[A-Z])(?=.*\d)(?=.*[.!@#$%^&*])/,
        'Password must contain at least one uppercase letter, one number, and one special character (e.g., .!@#$%^&*)'
      )
      .required('Required'),
    passwordConfirm: Yup.string()
      .oneOf([Yup.ref('password')], 'Passwords must match')
      .required('Required'),
  });

  const handleSubmit = (values: FormValues, actions: FormikHelpers<FormValues>): void => {
    console.log(values);
    actions.resetForm();
  };

  const [showPassword, setShowPassword] = useState<boolean>(false);
  const [showPasswordConfirm, setShowPasswordConfirm] = useState<boolean>(false);

  return (
    <div className={s.registrationBlock}>
      <div className={s.registrationForm}>
        <TitleMain value={'Registration'} />
        <p className={s.text}>Thank you for your interest in our platform.</p>
        <Formik initialValues={initialValues} onSubmit={handleSubmit} validationSchema={registerSchema}>
          {({ errors, touched }) => (
            <Form className={s.form}>
              <label
                className={`${s.label} ${
                  touched.name
                    ? errors.name // поле торкнули → перевіряємо, чи є помилка
                      ? s.error // якщо є → error
                      : s.correct // якщо нема → correct
                    : '' // поле ще не торкали
                }`}
                htmlFor="name"
              >
                <div className={s.fieldWrap}>
                  <Field className={s.field} type="text" name="name" id="name" placeholder="Name" autoComplete="off" />
                  <svg className={clsx(s.fieldIcon, s.iconCross)}>
                    <use href={`${svgIcon}#icon-cross-color`} />
                  </svg>
                  <svg className={clsx(s.fieldIcon, s.iconCheck)}>
                    <use href={`${svgIcon}#icon-check-color`} />
                  </svg>
                </div>
                <ErrorMessage className={s.fieldError} name="name" component="span" />
              </label>

              <label
                className={`${s.label} ${touched.email ? (errors.email ? s.error : s.correct) : ''}`}
                htmlFor="email"
              >
                <div className={s.fieldWrap}>
                  <Field
                    className={s.field}
                    type="email"
                    name="email"
                    id="email"
                    placeholder="Email"
                    autoComplete="off"
                  />
                  <svg className={clsx(s.fieldIcon, s.iconCross)}>
                    <use href={`${svgIcon}#icon-cross-color`} />
                  </svg>
                  <svg className={clsx(s.fieldIcon, s.iconCheck)}>
                    <use href={`${svgIcon}#icon-check-color`} />
                  </svg>
                </div>
                <ErrorMessage className={s.fieldError} name="email" component="span" />
              </label>

              <label
                className={`${s.label} ${touched.password ? (errors.password ? s.error : s.correct) : ''}`}
                htmlFor="password"
              >
                <div className={clsx(s.fieldWrap, s.fieldPasswordWrap)}>
                  <Field
                    className={s.field}
                    type={showPassword ? 'text' : 'password'}
                    name="password"
                    id="password"
                    placeholder="Password"
                    autoComplete="off"
                  />
                  <button
                    type="button"
                    className={s.togglePassword}
                    onClick={() => setShowPassword((prev) => !prev)}
                    aria-label={showPassword ? 'Hide password' : 'Show password'}
                  >
                    {showPassword ? (
                      <svg className={s.iconEye}>
                        <use href={`${svgIcon}#icon-eye`} />
                      </svg>
                    ) : (
                      <svg className={s.iconEye}>
                        <use href={`${svgIcon}#icon-eye-off`} />
                      </svg>
                    )}
                  </button>
                  <svg className={clsx(s.fieldIcon, s.iconCross)}>
                    <use href={`${svgIcon}#icon-cross-color`} />
                  </svg>
                  <svg className={clsx(s.fieldIcon, s.iconCheck)}>
                    <use href={`${svgIcon}#icon-check-color`} />
                  </svg>
                </div>
                <ErrorMessage className={s.fieldError} name="password" component="span" />
              </label>

              <label
                className={`${s.label} ${touched.password ? (errors.passwordConfirm ? s.error : s.correct) : ''}`}
                htmlFor="passwordConfirm"
              >
                <div className={clsx(s.fieldWrap, s.fieldPasswordWrap)}>
                  <Field
                    className={s.field}
                    type={showPasswordConfirm ? 'text' : 'password'}
                    name="passwordConfirm"
                    id="passwordConfirm"
                    placeholder="Confirm password"
                    autoComplete="off"
                  />
                  <button
                    type="button"
                    className={s.togglePassword}
                    onClick={() => setShowPasswordConfirm((prev) => !prev)}
                    aria-label={showPasswordConfirm ? 'Hide password' : 'Show password'}
                  >
                    {showPasswordConfirm ? (
                      <svg className={s.iconEye}>
                        <use href={`${svgIcon}#icon-eye`} />
                      </svg>
                    ) : (
                      <svg className={s.iconEye}>
                        <use href={`${svgIcon}#icon-eye-off`} />
                      </svg>
                    )}
                  </button>
                  <svg className={clsx(s.fieldIcon, s.iconCross)}>
                    <use href={`${svgIcon}#icon-cross-color`} />
                  </svg>
                  <svg className={clsx(s.fieldIcon, s.iconCheck)}>
                    <use href={`${svgIcon}#icon-check-color`} />
                  </svg>
                </div>
                <ErrorMessage className={s.fieldError} name="passwordConfirm" component="span" />
              </label>

              <ButtonMain className={s.btn} type="submit">
                Registration
                {/* {loading ? 'Loading...' : 'Registration'} */}
              </ButtonMain>
            </Form>
          )}
        </Formik>
        <p className={s.textAccount}>
          <span>Already have an account? </span>
          <NavLink to="/login" className={s.link}>
            Login
          </NavLink>
        </p>
      </div>
    </div>
  );
};

export default RegistrationForm;
