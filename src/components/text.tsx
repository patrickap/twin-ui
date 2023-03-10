import { Color } from '@/constants';
import { ValueOf } from '@/types';
import clsx from 'clsx';
import { ReactNode } from 'react';

type TextProps = {
  color?: ValueOf<typeof Color>;
  children?: ReactNode;
};

const Text = ({ color = 'neutral', children }: TextProps) => {
  return (
    <span
      className={clsx(
        'block text-sm',
        color === Color.NEUTRAL && 'text-slate-600',
        color === Color.PRIMARY && 'text-primary-500',
        color === Color.INFO && 'text-blue-500',
        color === Color.WARNING && 'text-yellow-500',
        color === Color.ERROR && 'text-red-500',
        color === Color.SUCCESS && 'text-green-500',
      )}
    >
      {children}
    </span>
  );
};

export { Text };
export type { TextProps };
