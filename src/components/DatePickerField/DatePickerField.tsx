import { DatePicker } from '@mui/x-date-pickers';
import s from './DatePickerField.module.scss';
import { format, isValid, parseISO } from 'date-fns';
import clsx from 'clsx';
import SvgCalendarIcon from '@/components/SvgCalendarIcon/SvgCalendarIcon';

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
      slots={{
        openPickerIcon: SvgCalendarIcon, // <-- підміняємо іконку
      }}
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

          // Клас на "outlined" контейнер (root OutlinedInput)
          InputProps: {
            className: s.inputRoot,
          },
        },

        // Icon
        openPickerButton: {
          className: s.calendarIcon,
        },

        // Клас для Popper’а (опційно, якщо треба позиціонування/анімації)
        popper: { className: s.calendarPopper },

        // Клас для самого календаря
        /* === desktop  === */
        desktopPaper: { className: s.calendarPaper },

        /* === mobile === */
        mobilePaper: { className: s.calendarPaper }, // той самий стиль, що й для desktop
        dialog: { className: s.calendarDialog }, // якщо хочеш підправити Dialog
        /* mobileTransition: { timeout: 200 }  // приклад, якщо треба змінити анімацію */
      }}
    />
  );
};

export default DatePickerField;
