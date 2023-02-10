import { Input } from '@chakra-ui/react';
import { forwardRef } from 'react';
import { InputBase, InputBaseProps } from './input-base';

type InputTextProps = InputBaseProps;

const InputText = forwardRef((props: InputTextProps, ref) => {
  return (
    <InputBase {...props} ref={ref}>
      <Input type='text' />
    </InputBase>
  );
});

export { InputText };
export type { InputTextProps };
