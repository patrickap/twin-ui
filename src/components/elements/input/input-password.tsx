import { Icon, Input, InputRightElement } from '@chakra-ui/react';
import { EyeIcon, EyeSlashIcon } from '@heroicons/react/20/solid';
import { forwardRef, useState } from 'react';
import { InputWrapper, InputWrapperProps } from './input-wrapper';

type InputPasswordProps = InputWrapperProps;

const InputPassword = forwardRef((props: InputPasswordProps, ref) => {
  const [isVisible, setIsVisible] = useState(false);

  return (
    <InputWrapper {...props} ref={ref}>
      <Input type={isVisible ? 'text' : 'password'} />
      <InputRightElement
        cursor='pointer'
        children={<Icon as={isVisible ? EyeIcon : EyeSlashIcon} />}
        onClick={() => setIsVisible(!isVisible)}
      />
    </InputWrapper>
  );
});

export { InputPassword };
export type { InputPasswordProps };
