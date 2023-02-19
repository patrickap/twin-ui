import clsx from 'clsx';
import { ReactNode } from 'react';
import { Spinner } from './spinner';

type ButtonProps = {
  color?: 'default' | 'brand' | 'info' | 'warning' | 'error' | 'success';
  isDisabled?: boolean;
  isLoading?: boolean;
  children?: ReactNode;
};

const Button = ({
  color = 'default',
  isDisabled = false,
  isLoading = false,
  children,
}: ButtonProps = {}) => {
  return (
    <button
      type='button'
      disabled={isDisabled || isLoading}
      className={clsx(
        'inline-flex w-full justify-center rounded-md border px-4 py-2 text-base font-medium shadow-sm focus:outline-none focus:ring-2 focus:ring-offset-2 sm:w-auto sm:text-sm',
        color === 'default' &&
          'border-slate-300 bg-white text-slate-700 hover:bg-slate-50 focus:ring-brand-500',
        color === 'brand' &&
          'border-transparent bg-brand-500 text-white hover:bg-brand-600 focus:ring-brand-400',
        color === 'info' &&
          'border-transparent bg-blue-500 text-white hover:bg-blue-600 focus:ring-blue-400',
        color === 'warning' &&
          'border-transparent bg-yellow-500 text-white hover:bg-yellow-600 focus:ring-yellow-400',
        color === 'error' &&
          'border-transparent bg-red-500 text-white hover:bg-red-600 focus:ring-red-400',
        color === 'success' &&
          'border-transparent bg-green-500 text-white hover:bg-green-600 focus:ring-green-400',
        isDisabled &&
          'disabled:cursor-not-allowed disabled:border-slate-100 disabled:bg-slate-50 disabled:text-slate-200 disabled:hover:bg-slate-50',
      )}
    >
      {isLoading ? (
        <Spinner mode={color === 'default' ? 'light' : 'dark'} />
      ) : (
        <>{children}</>
      )}
    </button>
  );
};

export { Button };
export type { ButtonProps };
