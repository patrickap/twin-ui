import { ReactNode } from 'react';

type CenterProps = {
  children?: ReactNode;
};

const Center = ({ children }: CenterProps) => {
  return (
    <div className='flex h-screen w-screen flex-col items-center justify-center px-4'>
      {children}
    </div>
  );
};

export { Center };
export type { CenterProps };
