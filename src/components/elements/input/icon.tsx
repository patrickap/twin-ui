import clsx from 'clsx';
import { MouseEventHandler, ReactNode } from 'react';

type InputIconProps = {
  align?: 'left' | 'right';
  onClick?: MouseEventHandler<HTMLDivElement>;
  children?: ReactNode;
};

const InputIcon = ({ align = 'left', onClick, children }: InputIconProps) => {
  return (
    <div
      className={clsx(
        'absolute inset-y-0 flex items-center',
        align === 'left' && 'left-0 pl-3',
        align === 'right' && 'right-0 pr-3',
        onClick && 'cursor-pointer',
      )}
      onClick={onClick}
    >
      <span className='h-5 w-5 text-slate-500'>{children}</span>
    </div>
  );
};

export { InputIcon };
export type { InputIconProps };
