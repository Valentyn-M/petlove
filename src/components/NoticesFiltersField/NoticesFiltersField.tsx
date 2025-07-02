import s from './NoticesFiltersField.module.scss';
import SvgArrowIcon from '@/components/SvgArrowIcon/SvgArrowIcon';
import { FormControl, MenuItem, OutlinedInput, Select, SelectChangeEvent } from '@mui/material';
import clsx from 'clsx';

export interface NoticesFiltersFieldProps {
  fieldPlaceholder: string;
  fieldName: string;
  fieldValue: string;
  selectOptions: string[];
  handleChange(e: SelectChangeEvent): void;
  className?: string;
}

const NoticesFiltersField = ({
  fieldPlaceholder,
  fieldName,
  fieldValue,
  selectOptions,
  handleChange,
  className,
}: NoticesFiltersFieldProps) => {
  return (
    <FormControl
      className={clsx(s.formControl, className && s[className as keyof typeof s])}
      fullWidth
      sx={{
        // main
        // maxWidth: '14.125rem', // 226px
        borderRadius: '1.875rem', // 30px
        backgroundColor: 'var(--white-color)',
        border: '1px solid var(--white-color)',
        transition: 'border-color 0.3s',
        '&:hover': {
          borderColor: 'var(--brand-color)',
        },
        // TODO не відчуває фокус
        '&:focus': {
          borderColor: 'var(--brand-color)',
        },

        // outlined input
        '& .MuiOutlinedInput-root': {
          color: 'var(--main-color)',
          fontFamily: 'Manrope, sans-serif',
          fontWeight: 500,
          fontSize: '1rem', // 16px
          lineHeight: 1.25,
          letterSpacing: '-0.03em',
          textTransform: 'capitalize',

          // fieldset
          '& fieldset': {
            border: 'none',
          },
        },

        // select
        '& .MuiSelect-select': {
          padding: '0.875rem !important', // 14px 36px 14px 18px
          minHeight: 'unset !important',
        },

        // icon
        '& .MuiSelect-icon': {
          right: '15px',
          top: 'calc(50% - 0.5625rem)', // 9px (half of icon height)
          fill: 'var(--main-color)',
        },
      }}
    >
      <Select
        displayEmpty
        value={fieldValue}
        onChange={handleChange}
        name={fieldName}
        id={fieldName}
        input={<OutlinedInput notched={false} />}
        renderValue={(selected) => selected || fieldPlaceholder}
        inputProps={{ 'aria-label': 'Filter' }}
        IconComponent={SvgArrowIcon}
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
              maxHeight: '13.5rem', // 216px

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
              },
            },
          },
        }}
      >
        {/* Special option */}
        <MenuItem value="">Show all</MenuItem>

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
