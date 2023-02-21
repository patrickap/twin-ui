import { ReactNode } from 'react';

type InputRootProps = {
  children?: ReactNode;
};

const InputRoot = ({ children }: InputRootProps) => {
  return <div className='relative'>{children}</div>;
};

export { InputRoot };
export type { InputRootProps };
