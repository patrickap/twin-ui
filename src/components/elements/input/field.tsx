import clsx from 'clsx';
import {
  ChangeEventHandler,
  FocusEventHandler,
  forwardRef,
  InputHTMLAttributes,
  LegacyRef,
} from 'react';

type InputFieldProps = {
  id?: string;
  type?: InputHTMLAttributes<HTMLInputElement>['type'];
  placeholder?: string;
  value?: string;
  isDisabled?: boolean;
  isError?: boolean;
  onChange?: ChangeEventHandler<HTMLInputElement>;
  onBlur?: FocusEventHandler<HTMLInputElement>;
  className?: string;
};

const InputField = forwardRef(
  (
    {
      id,
      type = 'text',
      placeholder,
      value = '',
      isDisabled = false,
      isError = false,
      onChange,
      onBlur,
      className,
    }: InputFieldProps,
    ref: LegacyRef<HTMLInputElement>,
  ) => {
    return (
      <input
        id={id}
        ref={ref}
        type={type}
        spellCheck={false}
        placeholder={placeholder}
        value={value}
        disabled={isDisabled}
        onChange={onChange}
        onBlur={onBlur}
        className={clsx(
          'block w-full rounded-md border border-slate-300 shadow-sm focus:border-brand-500 focus:ring-brand-500 sm:text-sm',
          isDisabled &&
            '!cursor-not-allowed !border-slate-200 !bg-slate-100 !text-slate-300',
          isError &&
            !isDisabled &&
            '!border-red-500 !text-red-500 focus:!border-red-500 focus:!ring-red-500',
          className,
        )}
      />
    );
  },
);

export { InputField };
export type { InputFieldProps };
