import clsx from 'clsx';
import {
  ChangeEventHandler,
  Children,
  FocusEventHandler,
  forwardRef,
  InputHTMLAttributes,
  isValidElement,
  LegacyRef,
  ReactElement,
  ReactNode,
} from 'react';
import { Input, InputIconProps } from '.';

type InputFieldProps = {
  id?: string;
  type?: InputHTMLAttributes<HTMLInputElement>['type'];
  placeholder?: string;
  value?: string;
  isDisabled?: boolean;
  isError?: boolean;
  onChange?: ChangeEventHandler<HTMLInputElement>;
  onBlur?: FocusEventHandler<HTMLInputElement>;
  children?: ReactNode;
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
      children,
    }: InputFieldProps,
    ref: LegacyRef<HTMLInputElement>,
  ) => {
    const icons = Children.toArray(children).filter(
      (child) => isValidElement(child) && child.type === Input.Icon,
    ) as ReactElement<InputIconProps>[];

    const isLeftIcon = icons.some((icon) => icon.props.align === 'left');

    const isRightIcon = icons.some((icon) => icon.props.align === 'right');

    return (
      <div className='relative'>
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
            isLeftIcon && 'pl-9',
            isRightIcon && 'pr-9',
          )}
        />
        {children}
      </div>
    );
  },
);

export { InputField };
export type { InputFieldProps };
