import { InputError, InputField, InputIcon, InputLabel, InputRoot } from '.';

const Input = {
  Root: InputRoot,
  Label: InputLabel,
  Field: InputField,
  Icon: InputIcon,
  Error: InputError,
};

export * from './error';
export * from './field';
export * from './icon';
export * from './label';
export * from './root';
export { Input };
