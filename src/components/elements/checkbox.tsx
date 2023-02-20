import clsx from 'clsx';
import {
  ChangeEventHandler,
  FocusEventHandler,
  forwardRef,
  LegacyRef,
  useId,
} from 'react';

import { Label } from './label';

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
    }: CheckboxProps = {},
    ref,
  ) => {
    const id = useId();

    return (
      <div className='flex items-center gap-2'>
        <input
          id={id}
          ref={ref as LegacyRef<HTMLInputElement>}
          type='checkbox'
          checked={isChecked}
          disabled={isDisabled}
          onChange={onChange}
          onBlur={onBlur}
          className={clsx(
            'h-4 w-4 cursor-pointer rounded border border-slate-300 text-brand-500 focus:ring-2 focus:ring-brand-500 focus:ring-offset-2',
            isDisabled && '!cursor-not-allowed !border-slate-200 !bg-slate-100',
            isError && !isDisabled && '!border-red-500',
          )}
        />
        {label ? <Label htmlFor={id}>{label}</Label> : null}
      </div>
    );
  },
);

export { Checkbox };
export type { CheckboxProps };
