import clsx from 'clsx';
import { ReactNode } from 'react';

type TitleProps = {
  size?: 1 | 2 | 3 | 4 | 5;
  isCenter?: boolean;
  children?: ReactNode;
};

const Title = ({ size = 5, isCenter, children }: TitleProps) => {
  return (
    <span
      className={clsx(
        'tracking-tight text-slate-700',
        size === 1 && 'text-4xl font-bold',
        size === 2 && 'text-3xl font-bold',
        size === 3 && 'text-xl font-semibold',
        size === 4 && 'text-lg font-medium',
        size === 5 && 'text-base font-medium',
        isCenter && 'text-center',
      )}
    >
      {children}
    </span>
  );
};

export { Title };
export type { TitleProps };
