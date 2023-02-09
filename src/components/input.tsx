import Icon from '@chakra-ui/icon';
import { InputGroup, InputRightElement } from '@chakra-ui/input';
import {
  FormControl,
  FormLabel,
  Input as InputBase,
  InputProps as InputPropsDefault,
} from '@chakra-ui/react';
import { EyeIcon, EyeSlashIcon } from '@heroicons/react/20/solid';
import { useState } from 'react';

type InputProps = {
  label?: string;
} & InputPropsDefault;

const Input = ({ label, ...input }: InputProps) => {
  const isPassword = input.type === 'password';
  const [isPasswordVisible, setIsPasswordVisible] = useState(false);

  return (
    <FormControl>
      {label ? <FormLabel>{label}</FormLabel> : null}
      <InputGroup>
        <InputBase
          {...input}
          type={isPassword && isPasswordVisible ? 'text' : input.type}
        />

        {isPassword ? (
          <InputRightElement
            cursor='pointer'
            children={<Icon as={isPasswordVisible ? EyeIcon : EyeSlashIcon} />}
            onClick={() => setIsPasswordVisible(!isPasswordVisible)}
          />
        ) : null}
      </InputGroup>
    </FormControl>
  );
};

export { Input };
export type { InputProps };
