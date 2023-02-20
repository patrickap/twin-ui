import clsx from 'clsx';
import {
  ChangeEventHandler,
  FocusEventHandler,
  forwardRef,
  LegacyRef,
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
    return (
      <Label>
        <div className='flex items-center gap-2'>
          <input
            ref={ref as LegacyRef<any>}
            type='checkbox'
            disabled={isDisabled}
            checked={isChecked}
            onChange={onChange}
            onBlur={onBlur}
            className={clsx(
              'h-4 w-4 cursor-pointer rounded border border-slate-300 text-brand-500 focus:ring-brand-400',
              isDisabled &&
                'disabled:cursor-not-allowed disabled:border-slate-200 disabled:bg-slate-100  disabled:hover:border-slate-200 disabled:hover:bg-slate-100',
              isError && '!border-red-500',
            )}
          />

          {label}
        </div>
      </Label>
    );
  },
);

export { Checkbox };
export type { CheckboxProps };
