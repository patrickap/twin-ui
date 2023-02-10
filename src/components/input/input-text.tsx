import { Input } from '@chakra-ui/react';
import { InputBase, InputBaseProps } from './input-base';

type InputTextProps = InputBaseProps;

const InputText = (props: InputTextProps) => {
  return (
    <InputBase {...props}>
      <Input type='text' />
    </InputBase>
  );
};

export { InputText };
export type { InputTextProps };
