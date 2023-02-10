import { Icon, Input, InputRightElement } from '@chakra-ui/react';
import { EyeIcon, EyeSlashIcon } from '@heroicons/react/20/solid';
import { useState } from 'react';
import { InputBase, InputBaseProps } from './input-base';

type InputPasswordProps = InputBaseProps;

const InputPassword = (props: InputPasswordProps) => {
  const [isVisible, setIsVisible] = useState(false);

  return (
    <InputBase {...props}>
      <Input type={isVisible ? 'text' : 'password'} />
      <InputRightElement
        cursor='pointer'
        children={<Icon as={isVisible ? EyeIcon : EyeSlashIcon} />}
        onClick={() => setIsVisible(!isVisible)}
      />
    </InputBase>
  );
};

export { InputPassword };
export type { InputPasswordProps };
