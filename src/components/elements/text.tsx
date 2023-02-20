import { ReactNode } from 'react';

type TextProps = {
  children?: ReactNode;
};

const Text = ({ children }: TextProps) => {
  return <div className='text-sm text-slate-600'>{children}</div>;
};

export { Text };
export type { TextProps };
