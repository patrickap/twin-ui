import { MouseEventHandler, ReactNode } from 'react';

type ButtonIconProps = {
  onClick?: MouseEventHandler<HTMLButtonElement>;
  children?: ReactNode;
};

const ButtonIcon = ({ onClick, children }: ButtonIconProps) => {
  return (
    <span
      role='button'
      onClick={onClick}
      className='flex items-center justify-center rounded-lg border-transparent bg-transparent p-2 hover:border-slate-100 hover:bg-slate-100 focus:outline-none focus:ring-2 focus:ring-brand-500 focus:ring-offset-2'
    >
      {children}
    </span>
  );
};

export { ButtonIcon };
export type { ButtonIconProps };
