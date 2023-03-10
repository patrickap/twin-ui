import clsx from 'clsx';
import { MouseEventHandler, ReactNode } from 'react';

type ButtonIconProps = {
  size?: 1 | 2 | 3;
  onClick?: MouseEventHandler<HTMLButtonElement>;
  children?: ReactNode;
};

const ButtonIcon = ({ size = 2, onClick, children }: ButtonIconProps) => {
  return (
    <span
      role='button'
      onClick={onClick}
      className={clsx(
        'flex items-center justify-center rounded-lg border-transparent bg-transparent hover:border-slate-100 hover:bg-slate-100 focus:outline-none focus:ring-2 focus:ring-primary-500 focus:ring-offset-2',
        size === 1 && 'p-1',
        size === 2 && 'p-2',
        size === 3 && 'p-4',
      )}
    >
      {children}
    </span>
  );
};

export { ButtonIcon };
export type { ButtonIconProps };
