import {
  FormControl,
  FormControlProps,
  FormErrorMessage,
  FormHelperText,
  FormLabel,
  Input,
  InputGroup,
} from '@chakra-ui/react';
import { ReactElement } from 'react';

type InputBaseProps = {
  label?: string;
  info?: string;
  error?: string;
  children?: ReactElement | ReactElement[];
} & FormControlProps;

const InputBase = ({
  label,
  info,
  error,
  children,
  ...props
}: InputBaseProps) => {
  return (
    <FormControl {...props}>
      {label ? <FormLabel>{label}</FormLabel> : null}
      <InputGroup>{children ? <>{children}</> : <Input />}</InputGroup>
      {info && !props.isInvalid ? (
        <FormHelperText>{info}</FormHelperText>
      ) : null}
      {error && props.isInvalid ? (
        <FormErrorMessage>{error}</FormErrorMessage>
      ) : null}
    </FormControl>
  );
};

export { InputBase };
export type { InputBaseProps };
