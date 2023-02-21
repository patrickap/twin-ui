import { ForwardedRef, forwardRef } from 'react';
import { Input, InputProps } from '.';

type InputTextProps = InputProps;

const InputText = forwardRef(
  (props: InputTextProps, ref: ForwardedRef<HTMLInputElement>) => {
    return <Input {...props} ref={ref} type='text' />;
  },
);

export { InputText };
export type { InputTextProps };
