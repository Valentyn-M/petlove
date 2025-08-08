import s from './NoticesFiltersField.module.scss';
import SvgArrowIcon from '@/components/SvgArrowIcon/SvgArrowIcon';
import { FormControl, MenuItem, OutlinedInput, Select, SelectChangeEvent } from '@mui/material';
import clsx from 'clsx';
import { useState } from 'react';

export interface NoticesFiltersFieldProps {
  fieldPlaceholder: string;
  fieldName: string;
  fieldValue: string;
  selectOptions: string[];
  handleChange(e: SelectChangeEvent): void;
  onBlur?: () => void;
  className?: string;
  classNameGeneral?: string;
  isOutline?: boolean;
  isFilled?: boolean;
  isError?: boolean;
  specialOption?: boolean;
  placeholderStyle?: string;
  variant?: string;
}

const NoticesFiltersField = ({
  fieldPlaceholder,
  fieldName,
  fieldValue,
  selectOptions,
  handleChange,
  onBlur,
  className,
  classNameGeneral,
  isOutline = false,
  isFilled = false,
  isError = false,
  specialOption = true,
  placeholderStyle,
  variant,
}: NoticesFiltersFieldProps) => {
  const [isFocused, setIsFocused] = useState(false);

  let isBorder = 'none';
  if (isOutline) {
    if (isFilled) {
      isBorder = 'var(--brand-color)';
    } else if (isError) {
      isBorder = 'var(--error-color)';
    } else {
      isBorder = 'var(--grey-color-light)';
    }
  }

  return (
    <FormControl
      className={clsx(
        s.formControl,
        className && s[className as keyof typeof s],
        classNameGeneral && s[classNameGeneral as keyof typeof s],
        isFocused && s.focused
      )}
      fullWidth
      sx={{
        // main
        height: '100%',
        // maxWidth: '14.125rem', // 226px
        borderRadius: '1.875rem', // 30px
        backgroundColor: 'var(--white-color)',
        border: '1px solid var(--white-color)',
        transition: 'border-color 0.3s',
        '&:hover': {
          borderColor: 'var(--brand-color)',
        },
        // Styles from AddPetForm
        borderColor: isBorder,

        // outlined input
        '& .MuiOutlinedInput-root': {
          height: '100%',
          color: 'var(--main-color)',
          fontFamily: 'Manrope, sans-serif',
          fontWeight: 500,
          letterSpacing: '-0.03em',
          // Деякі стилі змінюються при зміні екрану, тому прописуємо їх ззовні
          fontSize: 'inherit',
          lineHeight: 'inherit',

          // fieldset
          '& fieldset': {
            border: 'none',
          },
        },

        // select
        '& .MuiSelect-select': {
          padding: 0,
          height: '100% !important',
          display: 'flex',
          alignItems: 'center',
          paddingLeft: variant === 'addPet' ? '0.9375rem' : '0.875rem', // 15px (addPet), 14px
          // 600px
          '@media (max-width: 37.5rem)': {
            paddingLeft: '0.75rem', // 12px
          },
        },

        // icon
        '& .MuiSelect-icon': {
          top: 'calc(50% - 0.5625rem)', // 9px (half of icon height)
          fill: 'var(--main-color)',
          right: variant === 'addPet' ? '0.9375rem' : '0.875rem', // 15px (addPet), 14px
          // 600px
          '@media (max-width: 37.5rem)': {
            right: '0.75rem', // 12px
          },
        },
      }}
    >
      <Select
        displayEmpty
        value={fieldValue}
        onChange={handleChange}
        onFocus={() => setIsFocused(true)}
        onBlur={() => {
          setIsFocused(false);
          // викликаємо передану з форми функцію
          onBlur?.();
        }}
        name={fieldName}
        id={fieldName}
        input={<OutlinedInput notched={false} />}
        inputProps={{ 'aria-label': 'Filter' }}
        IconComponent={SvgArrowIcon}
        renderValue={(selected: string) =>
          selected ? (
            selected.charAt(0).toUpperCase() + selected.slice(1)
          ) : placeholderStyle === 'light' ? (
            <span style={{ color: 'var(--grey-color)' }}>{fieldPlaceholder}</span>
          ) : (
            fieldPlaceholder
          )
        }
        // list wrapper
        MenuProps={{
          PaperProps: {
            sx: {
              marginTop: '0.25rem', // 4px
              borderRadius: '0.9375rem', // 15px
              boxShadow: 'none',
              backgroundColor: 'var(--white-color)',
              padding: '0.875rem', // 14px
              paddingRight: '0', // 0
              maxHeight: variant === 'addPet' ? '7.875rem' : '13.5rem', // 126px (addPet), 216px
              // Styles from AddPetForm
              border: isOutline ? '1px solid var(--grey-color-light)' : 'none',

              // scrollbar
              '&::-webkit-scrollbar': {
                width: '1.375rem', // 22px = 7px + 8px + 7px (paddings + width)
              },
              '&::-webkit-scrollbar-track': {
                backgroundColor: 'transparent',
                marginTop: '0.4375rem', // 7px = 14px (margin-top) - 7px (border)
                marginBottom: '0.4375rem', // 7px = 14px (margin-bottom) - 7px (border)
              },
              '&::-webkit-scrollbar-thumb': {
                backgroundColor: 'rgba(38, 38, 38, 0.08)',
                borderRadius: '1.375rem', // 22px
                border: '0.4375rem solid transparent', // 7px
                backgroundClip: 'content-box', // important
              },

              // Ripple effect color
              '& .MuiTouchRipple-root .MuiTouchRipple-ripple .MuiTouchRipple-child': {
                backgroundColor: 'transparent',
                opacity: 0.5,
              },

              // list
              '& ul': {
                display: 'flex',
                flexDirection: 'column',
                gap: 0,
                padding: 0,
              },

              // list utem
              '& li': {
                padding: '0.25rem 0', // 4px 0
                fontFamily: 'Manrope, sans-serif',
                fontWeight: 500,
                fontSize: '1rem', // 16px
                lineHeight: 1.25,
                letterSpacing: '-0.03em',
                color: 'rgba(38, 38, 38, 0.6)',
                minHeight: 'unset !important',
                transition: 'color 0.15s',
                textTransform: 'capitalize',
                '&.Mui-selected': {
                  backgroundColor: 'transparent',
                  color: 'var(--brand-color)',
                  '&:hover': {
                    backgroundColor: 'transparent',
                    color: 'var(--brand-color)',
                  },
                  '&:focus': {
                    backgroundColor: 'transparent',
                    color: 'var(--brand-color)',
                  },
                },
                '&:hover': {
                  backgroundColor: 'transparent',
                  color: 'var(--brand-color)',
                },
                '&:focus': {
                  backgroundColor: 'transparent',
                  color: 'var(--brand-color)',
                },
                // 600px
                '@media (max-width: 37.5rem)': {
                  fontSize: '0.875rem', // 14px
                },
              },
            },
          },
        }}
      >
        {/* Special option */}
        {specialOption && <MenuItem value="">Show all</MenuItem>}

        {selectOptions.map((option) => (
          <MenuItem key={`select-option-${option}`} value={option}>
            {option}
          </MenuItem>
        ))}
      </Select>
    </FormControl>
  );
};

export default NoticesFiltersField;
