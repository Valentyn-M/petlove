import { svgIcon } from '@/components/App';
import s from './AddPetForm.module.scss';
import { useEffect, useState } from 'react';
import { ErrorMessage, Field, Form, Formik, FormikValues } from 'formik';
import * as Yup from 'yup';
import clsx from 'clsx';
import ButtonUpload from '@/components/ButtonUpload/ButtonUpload';
import ButtonMain from '@/components/ButtonMain/ButtonMain';
import LinkMain from '@/components/LinkMain/LinkMain';
import { useAppDispatch, useAppSelector } from '@/store/hooks';
import { selectNoticesFiltersSpeciesList } from '@/store/noticesFilters/selectors';
import NoticesFiltersField from '@/components/NoticesFiltersField/NoticesFiltersField';
import { fetchSpecies } from '@/store/noticesFilters/oprations';
import { LocalizationProvider } from '@mui/x-date-pickers';
import { AdapterDateFns } from '@mui/x-date-pickers/AdapterDateFns';
import DatePickerField from '@/components/DatePickerField/DatePickerField';

export interface AddPetFormProps {}

const AddPetForm = ({}: AddPetFormProps) => {
  const [petPhoto, setPetPhoto] = useState<string>('');

  // Fetch Species
  const dispatch = useAppDispatch();
  useEffect(() => {
    dispatch(fetchSpecies());
  }, [dispatch]);
  const speciesList = useAppSelector(selectNoticesFiltersSpeciesList);

  interface FormValues {
    sex: string;
    imgURL: string;
    title: string;
    name: string;
    birthday: string;
    type: string;
  }

  const initialValues: FormValues = {
    sex: '',
    imgURL: `${petPhoto}`,
    title: '',
    name: '',
    birthday: '',
    type: '',
  };

  const validationSchema = Yup.object().shape({
    sex: Yup.string().required('Pet sex is required'),
    imgURL: Yup.string()
      .matches(/^https?:\/\/.*\.(?:png|jpg|jpeg|gif|bmp|webp)$/, 'Pet photo URL must be valid')
      .required('Pet photo is required'),
    title: Yup.string().min(3, 'Too short!').max(20, 'Too long!').required('Title is required'),
    name: Yup.string().min(3, 'Too short!').max(20, 'Too long!').required('Pet’s Name is required'),
    birthday: Yup.string()
      .matches(/^\d{4}-\d{2}-\d{2}$/, 'Birthday must be in format YYYY-MM-DD')
      .required('Birthday is required'),
    type: Yup.string().required('Type of pet is required'),
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

        <LocalizationProvider
          dateAdapter={AdapterDateFns}
          // Плейсхолдер
          localeText={{
            fieldDayPlaceholder: () => '00',
            fieldMonthPlaceholder: () => '00',
            fieldYearPlaceholder: () => '0000',
          }}
        >
          <Formik initialValues={initialValues} onSubmit={handleSubmit} validationSchema={validationSchema}>
            {({ errors, touched, values, setFieldValue, setFieldTouched }) => (
              <Form className={s.form}>
                {/* Sex */}
                <div className={s.sexButtonsBlock}>
                  <div className={s.sexButtons}>
                    <button
                      className={clsx(s.btnSex, s.btnFemale, values.sex === 'female' && s.active)}
                      type="button"
                      onClick={() => setFieldValue('sex', 'female')}
                    >
                      <svg className={s.iconSex}>
                        <use href={`${svgIcon}#icon-female`} />
                      </svg>
                    </button>
                    <button
                      className={clsx(s.btnSex, s.btnMale, values.sex === 'male' && s.active)}
                      type="button"
                      onClick={() => setFieldValue('sex', 'male')}
                    >
                      <svg className={s.iconSex}>
                        <use href={`${svgIcon}#icon-male`} />
                      </svg>
                    </button>
                    <button
                      className={clsx(s.btnSex, s.btnUnknown, values.sex === 'unknown' && s.active)}
                      type="button"
                      onClick={() => setFieldValue('sex', 'unknown')}
                    >
                      <svg className={s.iconSex}>
                        <use href={`${svgIcon}#icon-sexual-reproductive`} />
                      </svg>
                    </button>
                  </div>
                  <ErrorMessage className={s.fieldError} name="sex" component="span" />
                </div>

                {/* Photo */}
                <div className={s.photo}>
                  {!petPhoto || errors.imgURL ? (
                    <svg className={s.iconPet}>
                      <use href={`${svgIcon}#icon-cat-footprint`} />
                    </svg>
                  ) : (
                    <img className={s.petPhoto} src={petPhoto} alt="Pet photography" width="86" height="86" />
                  )}
                </div>

                <div className={s.fieldsBlock}>
                  {/* Photo Field*/}
                  <label
                    className={`${s.label} ${s.labelPhoto} ${errors.imgURL && touched.imgURL ? s.error : ''}`}
                    htmlFor="imgURL"
                  >
                    <div className={s.fieldWrap}>
                      <Field
                        className={clsx(s.field, s.fieldPhoto, values.imgURL && s.filled)}
                        type="text"
                        name="imgURL"
                        id="imgURL"
                        placeholder="Enter URL"
                        autoComplete="off"
                      />
                      <ErrorMessage className={s.fieldError} name="imgURL" component="span" />
                    </div>
                    <ButtonUpload className={s.btnPhoto} onClick={() => setPetPhoto(values.imgURL.trim())} />
                  </label>

                  {/* Title */}
                  <label className={`${s.label} ${errors.title && touched.title ? s.error : ''}`} htmlFor="title">
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
                  <label className={`${s.label} ${errors.name && touched.name ? s.error : ''}`} htmlFor="name">
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

                  {/* Birthday */}
                  <div className={`${s.label}`}>
                    <DatePickerField
                      value={values.birthday}
                      onChange={(val) => setFieldValue('birthday', val)}
                      onBlur={() => {
                        setFieldTouched('birthday', true, true);
                      }}
                      name="birthday"
                      error={errors.birthday}
                      touched={touched.birthday}
                      format="dd.MM.yyyy"
                    />
                    <ErrorMessage className={s.fieldError} name="birthday" component="span" />
                  </div>

                  {/* Type of pet */}
                  <div className={`${s.label}`}>
                    <NoticesFiltersField
                      fieldPlaceholder={'Type of pet'}
                      fieldName={'type'}
                      fieldValue={values.type}
                      selectOptions={speciesList}
                      handleChange={(e) => setFieldValue('type', e.target.value)}
                      onBlur={() => {
                        // після того як селект втратить фокус — Formik позначить поле 'type' як touched та одразу провалідує
                        setFieldTouched('type', true, true);
                      }}
                      className={clsx('addPetSelect')}
                      classNameGeneral={clsx('field')}
                      isOutline={true}
                      isFilled={!!values.type}
                      isError={!!errors.type && !!touched.type}
                      specialOption={false}
                      placeholderStyle={'light'}
                      variant={'addPet'}
                    />
                    <ErrorMessage className={s.fieldError} name="type" component="span" />
                  </div>
                </div>

                <div className={s.footer}>
                  <LinkMain to="/profile" className={clsx(s.link, s.linkBack)} lowerCase small grey>
                    Back
                  </LinkMain>
                  <ButtonMain className={clsx(s.btn, s.btnSubmit)} lowerCase small type="submit">
                    Submit
                  </ButtonMain>
                </div>
              </Form>
            )}
          </Formik>
        </LocalizationProvider>
      </div>
    </div>
  );
};

export default AddPetForm;
