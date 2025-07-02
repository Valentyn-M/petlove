import { ComponentProps, FormEvent, ReactElement, cloneElement, useEffect } from 'react';
import clsx from 'clsx';
import s from './SearchForm.module.scss';
import { svgIcon } from '@/components/App';

export interface SearchFormProps extends ComponentProps<'form'> {
  children: ReactElement<any>;
  fieldValue: string;
  setFieldValue(value: string): void;
  valueFromStore: string;
  onReset(): void;
  onSubmit(e: FormEvent<HTMLFormElement>): void;
  smallLight?: boolean;
  inputClassName?: string;
}

const SearchForm = ({
  children,
  fieldValue,
  setFieldValue,
  valueFromStore,
  onReset,
  onSubmit,
  smallLight,
  className,
  inputClassName,
  ...rest
}: SearchFormProps) => {
  useEffect(() => {
    setFieldValue(valueFromStore);
  }, [valueFromStore, setFieldValue]);

  useEffect(() => {
    return () => {
      onReset();
    };
  }, []);

  const styledInput = cloneElement(children, {
    className: clsx(children.props.className, inputClassName ?? s.field),
  });

  return (
    <form className={clsx(s.searchForm, smallLight && s.smallLight, className)} onSubmit={onSubmit} {...rest}>
      {styledInput}
      <button type="button" onClick={onReset} className={clsx(s.btn, s.reset, fieldValue && s.visible)}>
        <svg className={clsx(s.fieldIcon, s.iconCross)}>
          <use href={`${svgIcon}#icon-cross`} />
        </svg>
      </button>
      <button type="submit" className={clsx(s.btn)}>
        <svg className={clsx(s.fieldIcon, s.iconSearch)}>
          <use href={`${svgIcon}#icon-search`} />
        </svg>
      </button>
    </form>
  );
};

export default SearchForm;
