import clsx from 'clsx';
import { ForwardedRef, forwardRef, useId } from 'react';
import {
  Input,
  InputErrorProps,
  InputFieldProps,
  InputLabelProps,
} from './input';

type InputTextProps = Omit<
  InputLabelProps & InputFieldProps & InputErrorProps,
  'htmlFor' | 'className' | 'children'
>;

const InputText = forwardRef(
  (props: InputTextProps, ref: ForwardedRef<HTMLInputElement>) => {
    const id = useId();
    const { label, isDisabled, isError, error } = props;

    return (
      <Input.Root>
        {label ? <Input.Label htmlFor={id}>{label}</Input.Label> : null}

        <Input.Field
          {...props}
          id={id}
          ref={ref}
          type='text'
          className={clsx(label && 'mt-1')}
        />

        {isError && !isDisabled && error ? (
          <Input.Error className='mt-1'>{error}</Input.Error>
        ) : null}
      </Input.Root>
    );
  },
);

export { InputText };
export type { InputTextProps };
