import clsx from 'clsx';
import s from './ButtonUpload.module.scss';
import { svgIcon } from '@/components/App';
import { ComponentProps } from 'react';
import { useAppSelector } from '@/store/hooks';
import { selectIsLoadingAvatar } from '@/store/auth/selectors';

export interface ButtonUploadProps extends ComponentProps<'button'> {}

const ButtonUpload = ({ className, disabled, ...rest }: ButtonUploadProps) => {
  const isLoadingAvatar = useAppSelector(selectIsLoadingAvatar);

  return (
    <button
      type="button"
      disabled={disabled}
      {...rest}
      className={clsx(s.btn, isLoadingAvatar && s.disabled, className)}
    >
      <span>{isLoadingAvatar ? 'Uploading...' : 'Upload photo'}</span>
      <svg className={s.icon}>
        <use href={`${svgIcon}#icon-upload-cloud`} />
      </svg>
    </button>
  );
};

export default ButtonUpload;
