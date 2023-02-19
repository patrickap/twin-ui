import { ReactNode } from 'react';

type ContainerLayoutProps = {
  children?: ReactNode;
};

const ContainerLayout = ({ children }: ContainerLayoutProps) => {
  return (
    <div className='flex h-full w-full flex-col px-4 sm:px-6'>{children}</div>
  );
};

export { ContainerLayout };
export type { ContainerLayoutProps };
