import clsx from 'clsx';
import { ReactNode } from 'react';

type TextProps = {
  color?: 'default' | 'brand' | 'info' | 'warning' | 'error' | 'success';
  children?: ReactNode;
};

const Text = ({ color = 'default', children }: TextProps) => {
  return (
    <div
      className={clsx(
        'text-sm',
        color === 'default' && 'text-slate-600',
        color === 'brand' && 'text-brand-500',
        color === 'info' && 'text-blue-500',
        color === 'warning' && 'text-yellow-500',
        color === 'error' && 'text-red-500',
        color === 'success' && 'text-green-500',
      )}
    >
      {children}
    </div>
  );
};

export { Text };
export type { TextProps };
