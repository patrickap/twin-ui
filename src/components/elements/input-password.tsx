import { EyeIcon, EyeSlashIcon } from '@heroicons/react/24/outline';
import clsx from 'clsx';
import { ForwardedRef, forwardRef, useId, useState } from 'react';
import {
  Input,
  InputErrorProps,
  InputFieldProps,
  InputLabelProps,
} from './input';

type InputPasswordProps = Omit<
  InputLabelProps & InputFieldProps & InputErrorProps,
  'htmlFor' | 'className' | 'children'
>;

const InputPassword = forwardRef(
  (props: InputPasswordProps, ref: ForwardedRef<HTMLInputElement>) => {
    const id = useId();
    const { label, isDisabled, isError, error } = props;
    const [isVisible, setIsVisible] = useState(false);

    const toggleVisibility = () => setIsVisible(!isVisible);

    return (
      <Input.Root>
        {label ? <Input.Label htmlFor={id}>{label}</Input.Label> : null}

        <Input.Field
          {...props}
          id={id}
          ref={ref}
          type={isVisible ? 'text' : 'password'}
          className={clsx('pr-9', label && 'mt-1')}
        >
          <Input.Icon onClick={toggleVisibility} className='right-0 pr-3'>
            {isVisible ? <EyeIcon /> : <EyeSlashIcon />}
          </Input.Icon>
        </Input.Field>

        {isError && !isDisabled && error ? (
          <Input.Error className='mt-1'>{error}</Input.Error>
        ) : null}
      </Input.Root>
    );
  },
);

export { InputPassword };
export type { InputPasswordProps };
