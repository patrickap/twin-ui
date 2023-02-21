import clsx from 'clsx';
import {
  ChangeEventHandler,
  FocusEventHandler,
  forwardRef,
  LegacyRef,
  useId,
} from 'react';
import { Label } from '.';

type CheckboxProps = {
  label?: string;
  isChecked?: boolean;
  isDisabled?: boolean;
  isError?: boolean;
  onChange?: ChangeEventHandler<HTMLInputElement>;
  onBlur?: FocusEventHandler<HTMLInputElement>;
};

const Checkbox = forwardRef(
  (
    {
      label,
      isChecked = false,
      isDisabled = false,
      isError = false,
      onChange,
      onBlur,
    }: CheckboxProps,
    ref: LegacyRef<HTMLInputElement>,
  ) => {
    const id = useId();

    return (
      <div className='flex items-center gap-2'>
        <input
          id={id}
          ref={ref}
          type='checkbox'
          checked={isChecked}
          disabled={isDisabled}
          onChange={onChange}
          onBlur={onBlur}
          className={clsx(
            'h-4 w-4 cursor-pointer rounded border border-slate-300 text-brand-500 shadow-sm focus:ring-brand-500',
            isDisabled && '!cursor-not-allowed !border-slate-200 !bg-slate-100',
            isError &&
              !isDisabled &&
              '!border-red-500 focus:!border-red-500 focus:!ring-red-500',
          )}
        />
        <Label htmlFor={id}>{label}</Label>
      </div>
    );
  },
);

export { Checkbox };
export type { CheckboxProps };
