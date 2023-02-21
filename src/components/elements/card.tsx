import { ReactNode } from 'react';

type CardProps = {
  children?: ReactNode;
};

const Card = ({ children }: CardProps) => {
  return (
    <div className='bg-transparent p-0 shadow-none sm:rounded-lg sm:bg-white sm:p-8 sm:shadow-md'>
      {children}
    </div>
  );
};

export { Card };
export type { CardProps };
