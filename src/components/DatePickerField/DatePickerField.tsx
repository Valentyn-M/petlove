import { DatePicker } from '@mui/x-date-pickers';
import s from './DatePickerField.module.scss';
import { format, isValid, parseISO } from 'date-fns';
import clsx from 'clsx';

export interface DatePickerFieldProps {
  value: string;
  onChange: (value: string) => void;
  onBlur?: () => void;
  name?: string;
  // placeholder?: string;
  error?: string;
  touched?: boolean;
  className?: string;
  format?: string;
}

const DatePickerField = ({
  value,
  onChange,
  onBlur,
  name = 'birthday',
  error,
  touched,
  className,
  format: displayFormat = 'dd.MM.yyyy',
}: DatePickerFieldProps) => {
  // Значення для DatePicker - null або Date
  const dateValue = value ? parseISO(value) : null;

  const isFilled = Boolean(value);

  return (
    <DatePicker
      value={dateValue && isValid(dateValue) ? dateValue : null}
      onChange={(date) => {
        onChange(date ? format(date, 'yyyy-MM-dd') : '');
      }}
      format={displayFormat}
      slotProps={{
        textField: {
          name,
          error: Boolean(error && touched),
          onBlur: () => {
            // викликаємо Formik.setFieldTouched
            onBlur?.();
          },
          fullWidth: true,
          // Класи для зовнішнього контейнера інпута
          className: clsx(s.field, { [s.filled]: isFilled }, className),
          // Ось сюди прокидуємо клас для самого OutlinedInput-root
          InputProps: {
            disableUnderline: true,
            className: s.inputRoot,
          },
          // А сюди — на нутрощі <input>
          inputProps: {
            className: s.inputElement,
          },
        },
        openPickerButton: {
          className: s.dateIcon,
        },
      }}
    />
  );
};

export default DatePickerField;
