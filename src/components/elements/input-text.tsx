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

    return (
      <Input.Root>
        <Input.Label htmlFor={id}>{props.label}</Input.Label>
        <Input.Field {...props} id={id} ref={ref} type='text' />
        <Input.Error>{!props.isDisabled ? props.error : null}</Input.Error>
      </Input.Root>
    );
  },
);

export { InputText };
export type { InputTextProps };
