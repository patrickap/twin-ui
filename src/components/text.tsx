import { ColorScheme } from '@/configs';
import clsx from 'clsx';
import { ReactNode } from 'react';

type TextProps = {
  scheme?: ColorScheme;
  children?: ReactNode;
};

const Text = ({ scheme = ColorScheme.DEFAULT, children }: TextProps) => {
  return (
    <span
      className={clsx(
        'block text-sm',
        scheme === ColorScheme.DEFAULT && 'text-slate-600',
        scheme === ColorScheme.BRAND && 'text-brand-500',
        scheme === ColorScheme.INFO && 'text-blue-500',
        scheme === ColorScheme.WARNING && 'text-yellow-500',
        scheme === ColorScheme.ERROR && 'text-red-500',
        scheme === ColorScheme.SUCCESS && 'text-green-500',
      )}
    >
      {children}
    </span>
  );
};

export { Text };
export type { TextProps };
