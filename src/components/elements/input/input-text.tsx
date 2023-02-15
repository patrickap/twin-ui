import { Input } from '@chakra-ui/react';
import { forwardRef } from 'react';
import { InputWrapper, InputWrapperProps } from './input-wrapper';

type InputTextProps = InputWrapperProps;

const InputText = forwardRef((props: InputTextProps, ref) => {
  return (
    <InputWrapper {...props} ref={ref}>
      <Input type='text' />
    </InputWrapper>
  );
});

export { InputText };
export type { InputTextProps };
