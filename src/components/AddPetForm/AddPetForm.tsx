import { svgIcon } from '@/components/App';
import s from './AddPetForm.module.scss';
import { useState } from 'react';
import { ErrorMessage, Field, Form, Formik, FormikValues } from 'formik';
import * as Yup from 'yup';
import clsx from 'clsx';
import ButtonUpload from '@/components/ButtonUpload/ButtonUpload';
import ButtonMain from '@/components/ButtonMain/ButtonMain';
import LinkMain from '@/components/LinkMain/LinkMain';

export interface AddPetFormProps {}

const AddPetForm = ({}: AddPetFormProps) => {
  const [petPhoto, setPetPhoto] = useState<string>('');

  interface FormValues {
    sex: string;
    imgURL: string;
    title: string;
    name: string;
    // birthday: string;
    // type: string;
  }

  const initialValues: FormValues = {
    sex: '',
    imgURL: `${petPhoto}`,
    title: '',
    name: '',
    // birthday: '',
    // type: '',
  };

  const validationSchema = Yup.object().shape({
    sex: Yup.string().required('Pet sex is required'),
    imgURL: Yup.string()
      .matches(/^https?:\/\/.*\.(?:png|jpg|jpeg|gif|bmp|webp)$/, 'Pet photo URL must be valid')
      .required('Pet photo is required'),
    title: Yup.string().min(3, 'Too short!').max(20, 'Too long!').required('Title is required'),
    name: Yup.string().min(3, 'Too short!').max(20, 'Too long!').required('Pet name is required'),
    //   birthday: Yup.string()
    //     .matches(/^\d{4}-\d{2}-\d{2}$/)
    //     .required('Pet birthday is required'),
    //   type: Yup.string().required('Pet type is required'),
  });

  const handleSubmit = (values: FormikValues): void => {
    console.log(values);
  };

  return (
    <div className={s.addPetBlock}>
      <div className={s.addPetForm}>
        <h2 className={s.title}>
          <span className={s.bigTitle}>Add my pet /</span>
          <span className={s.smallTitle}>Personal details</span>
        </h2>

        <Formik initialValues={initialValues} onSubmit={handleSubmit} validationSchema={validationSchema}>
          {({ errors, values, setFieldValue }) => (
            <Form className={s.form}>
              {/* Sex */}
              <div className={s.sexButtonsBlock}>
                <div className={s.sexButtons}>
                  <button
                    className={clsx(s.btnSex, s.btnFemale, values.sex === 'female' && s.active)}
                    type="button"
                    onClick={() => setFieldValue('sex', 'female')}
                  >
                    <svg className={clsx(s.iconSex, s.iconFemale)}>
                      <use href={`${svgIcon}#icon-female`} />
                    </svg>
                  </button>
                  <button
                    className={clsx(s.btnSex, s.btnMale, values.sex === 'male' && s.active)}
                    type="button"
                    onClick={() => setFieldValue('sex', 'male')}
                  >
                    <svg className={clsx(s.iconSex, s.iconMale)}>
                      <use href={`${svgIcon}#icon-male`} />
                    </svg>
                  </button>
                  <button
                    className={clsx(s.btnSex, s.btnunknown, values.sex === 'unknown' && s.active)}
                    type="button"
                    onClick={() => setFieldValue('sex', 'unknown')}
                  >
                    <svg className={clsx(s.iconSex, s.iconUnknown)}>
                      <use href={`${svgIcon}#icon-sexual-reproductive`} />
                    </svg>
                  </button>
                </div>
                <ErrorMessage className={s.fieldError} name="sex" component="span" />
              </div>

              {/* Photo */}
              <div className={s.avatar}>
                {!petPhoto ? (
                  <svg className={s.iconUser}>
                    <use href={`${svgIcon}#icon-cat-footprint`} />
                  </svg>
                ) : (
                  <img className={s.petPhoto} src={petPhoto} alt="Pet photography" width="86" height="86" />
                )}
              </div>

              <div className={s.fieldsBlock}>
                <label className={`${s.label} ${s.labelPhoto} ${errors.imgURL ? s.error : ''}`} htmlFor="avatar">
                  <div className={s.fieldWrap}>
                    <Field
                      className={clsx(s.field, s.field)}
                      type="text"
                      name="imgURL"
                      id="imgURL"
                      placeholder="Enter URL"
                      autoComplete="off"
                    />
                    <ErrorMessage className={s.fieldError} name="imgURL" component="span" />
                  </div>
                  <ButtonUpload className={s.btnAvatar} onClick={() => setPetPhoto(values.imgURL.trim())} />
                </label>

                {/* Title */}
                <label className={`${s.label} ${errors.title ? s.error : ''}`} htmlFor="name">
                  <Field
                    className={clsx(s.field, values.title && s.filled)}
                    type="text"
                    name="title"
                    id="title"
                    placeholder="Title"
                    autoComplete="off"
                  />
                  <ErrorMessage className={s.fieldError} name="title" component="span" />
                </label>

                {/* Name */}
                <label className={`${s.label} ${errors.name ? s.error : ''}`} htmlFor="name">
                  <Field
                    className={clsx(s.field, values.name && s.filled)}
                    type="text"
                    name="name"
                    id="name"
                    placeholder="Pet’s Name"
                    autoComplete="off"
                  />
                  <ErrorMessage className={s.fieldError} name="name" component="span" />
                </label>
              </div>

              <div className={s.footer}>
                <LinkMain to="/profile" className={clsx(s.link, s.linkBack)} lowerCase grey>
                  Back
                </LinkMain>
                <ButtonMain className={clsx(s.btn, s.btnSubmit)} lowerCase type="submit">
                  Submit
                </ButtonMain>
              </div>
            </Form>
          )}
        </Formik>
      </div>
    </div>
  );
};

export default AddPetForm;
