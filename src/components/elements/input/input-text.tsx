import { Input } from '@chakra-ui/react';
import { forwardRef } from 'react';
import { InputField, InputFieldProps } from './input-field';

type InputTextProps = InputFieldProps;

const InputText = forwardRef((props: InputTextProps, ref) => {
  return (
    <InputField {...props} ref={ref}>
      <Input type='text' />
    </InputField>
  );
});

export { InputText };
export type { InputTextProps };
