import clsx from 'clsx';
import { ReactNode } from 'react';

type TitleProps = {
  order?: 1 | 2 | 3 | 4 | 5 | 6;
  isCenter?: boolean;
  children?: ReactNode;
};

const Title = ({ order = 5, isCenter, children }: TitleProps) => {
  return (
    <span
      className={clsx(
        'block tracking-tight text-slate-700',
        order === 1 && 'text-4xl font-bold',
        order === 2 && 'text-3xl font-bold',
        order === 3 && 'text-xl font-semibold',
        order === 4 && 'text-lg font-medium',
        order === 5 && 'text-base font-medium',
        order === 6 && 'text-sm font-medium',
        isCenter && 'text-center',
      )}
    >
      {children}
    </span>
  );
};

export { Title };
export type { TitleProps };
