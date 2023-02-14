import { Icon, Input, InputRightElement } from '@chakra-ui/react';
import { EyeIcon, EyeSlashIcon } from '@heroicons/react/20/solid';
import { forwardRef, useState } from 'react';
import { InputField, InputFieldProps } from './input-field';

type InputPasswordProps = InputFieldProps;

const InputPassword = forwardRef((props: InputPasswordProps, ref) => {
  const [isVisible, setIsVisible] = useState(false);

  return (
    <InputField {...props} ref={ref}>
      <Input type={isVisible ? 'text' : 'password'} />
      <InputRightElement
        cursor='pointer'
        children={<Icon as={isVisible ? EyeIcon : EyeSlashIcon} />}
        onClick={() => setIsVisible(!isVisible)}
      />
    </InputField>
  );
});

export { InputPassword };
export type { InputPasswordProps };
