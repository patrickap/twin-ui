import { ReactNode } from 'react';

type InputRootProps = {
  children?: ReactNode;
};

const InputRoot = ({ children }: InputRootProps) => {
  return <div className='relative flex flex-col gap-1'>{children}</div>;
};

export { InputRoot };
export type { InputRootProps };
