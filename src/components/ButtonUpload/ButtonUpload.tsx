import clsx from 'clsx';
import s from './ButtonUpload.module.scss';
import { svgIcon } from '@/components/App';
import { ComponentProps } from 'react';

export interface ButtonUploadProps extends ComponentProps<'button'> {}

const ButtonUpload = ({ className, disabled, ...rest }: ButtonUploadProps) => {
  return (
    <button type="button" disabled={disabled} {...rest} className={clsx(s.btn, disabled && s.disabled, className)}>
      <span>Upload photo</span>
      <svg className={s.icon}>
        <use href={`${svgIcon}#icon-upload-cloud`} />
      </svg>
    </button>
  );
};

export default ButtonUpload;
