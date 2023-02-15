import {
  FormControl,
  FormControlProps,
  FormErrorMessage,
  FormHelperText,
  FormLabel,
  Input,
  InputGroup,
} from '@chakra-ui/react';
import { forwardRef, LegacyRef, ReactNode } from 'react';

type InputFieldProps = {
  label?: string;
  info?: string;
  error?: string;
  children?: ReactNode;
} & FormControlProps;

// TODO: rename to InputWrapper

const InputField = forwardRef(
  ({ label, info, error, children, ...props }: InputFieldProps, ref) => {
    return (
      <FormControl {...props} ref={ref as LegacyRef<HTMLDivElement>}>
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
  },
);

export { InputField };
export type { InputFieldProps };
