import clsx from 'clsx';
import { MouseEventHandler, ReactNode } from 'react';

type ButtonIconProps = {
  size?: 'sm' | 'md' | 'lg';
  onClick?: MouseEventHandler<HTMLButtonElement>;
  children?: ReactNode;
};

const ButtonIcon = ({ size = 'md', onClick, children }: ButtonIconProps) => {
  return (
    <span
      role='button'
      onClick={onClick}
      className={clsx(
        'flex items-center justify-center rounded-lg border-transparent bg-transparent hover:border-slate-100 hover:bg-slate-100 focus:outline-none focus:ring-2 focus:ring-brand-500 focus:ring-offset-2',
        size === 'sm' && 'p-1',
        size === 'md' && 'p-2',
        size === 'lg' && 'p-4',
      )}
    >
      {children}
    </span>
  );
};

export { ButtonIcon };
export type { ButtonIconProps };
