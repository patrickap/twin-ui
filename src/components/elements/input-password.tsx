import { EyeIcon, EyeSlashIcon } from '@heroicons/react/24/outline';
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
    const [isVisible, setIsVisible] = useState(false);

    const toggleVisibility = () => setIsVisible(!isVisible);

    return (
      <Input.Root>
        <Input.Label htmlFor={id}>{props.label}</Input.Label>
        <Input.Field
          {...props}
          id={id}
          ref={ref}
          type={isVisible ? 'text' : 'password'}
        >
          <Input.Icon align='right' onClick={toggleVisibility}>
            {isVisible ? <EyeIcon /> : <EyeSlashIcon />}
          </Input.Icon>
        </Input.Field>
        <Input.Error>{!props.isDisabled ? props.error : null}</Input.Error>
      </Input.Root>
    );
  },
);

export { InputPassword };
export type { InputPasswordProps };
