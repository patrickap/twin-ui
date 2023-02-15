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

type InputWrapperProps = {
  label?: string;
  info?: string;
  error?: string;
  children?: ReactNode;
} & FormControlProps;

const InputWrapper = forwardRef(
  ({ label, info, error, children, ...props }: InputWrapperProps, ref) => {
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

export { InputWrapper };
export type { InputWrapperProps };
