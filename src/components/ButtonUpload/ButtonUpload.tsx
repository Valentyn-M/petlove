import clsx from 'clsx';
import s from './ButtonUpload.module.scss';
import { svgIcon } from '@/components/App';
import { ComponentProps, useRef } from 'react';

export interface ButtonUploadProps extends Omit<ComponentProps<'input'>, 'type' | 'onChange' | 'multiple' | 'accept'> {
  onFileSelect?: (file: File) => void;
  onInvalidFile?: (reason: string) => void;
  loading?: boolean;
  accept?: string;
  maxSizeBytes?: number;
}

const DEFAULT_ACCEPT =
  'image/png, image/jpeg, image/jpg, image/gif, image/bmp, image/webp, image/heic, image/heif, image/avif';

const DEFAULT_VALID_TYPES = [
  'image/png',
  'image/jpeg',
  'image/jpg',
  'image/gif',
  'image/bmp',
  'image/webp',
  'image/heic',
  'image/heif',
  'image/avif',
];

const ButtonUpload = ({
  className,
  disabled,
  onFileSelect,
  onInvalidFile,
  loading = false,
  accept = DEFAULT_ACCEPT,
  maxSizeBytes = 5 * 1024 * 1024,
  ...rest
}: ButtonUploadProps) => {
  const fileInputRef = useRef<HTMLInputElement>(null);

  const handleButtonClick = () => {
    if (!disabled && !loading) {
      fileInputRef.current?.click();
    }
  };

  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];

    if (file) {
      if (!DEFAULT_VALID_TYPES.includes(file.type)) {
        onInvalidFile?.('Invalid file type. Please select an image file.');
        e.target.value = '';
        return;
      }

      if (file.size > maxSizeBytes) {
        onInvalidFile?.('File too large. Maximum size is 5MB.');
        e.target.value = '';
        return;
      }

      onFileSelect?.(file);
    }

    e.target.value = '';
  };

  return (
    <>
      <input
        ref={fileInputRef}
        type="file"
        accept={accept}
        onChange={handleFileChange}
        disabled={disabled || loading}
        className="visually-hidden"
        tabIndex={-1}
        {...rest}
      />

      <button
        type="button"
        onClick={handleButtonClick}
        disabled={disabled || loading}
        aria-disabled={disabled || loading}
        aria-busy={loading}
        className={clsx(s.btn, (loading || disabled) && s.disabled, className)}
        aria-label="Upload photo"
        title={loading ? 'Uploading…' : 'Upload photo'}
      >
        <span>{loading ? 'Uploading…' : 'Upload photo'}</span>
        <svg className={s.icon}>
          <use href={`${svgIcon}#icon-upload-cloud`} />
        </svg>
      </button>
    </>
  );
};

export default ButtonUpload;
