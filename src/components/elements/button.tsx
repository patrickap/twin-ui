import clsx from 'clsx';
import { MouseEventHandler, ReactNode } from 'react';
import { Spinner } from './spinner';

type ButtonProps = {
  color?: 'default' | 'brand' | 'info' | 'warning' | 'error' | 'success';
  isDisabled?: boolean;
  isLoading?: boolean;
  onClick?: MouseEventHandler<HTMLButtonElement>;
  children?: ReactNode;
};

const Button = ({
  color = 'default',
  isDisabled = false,
  isLoading = false,
  onClick,
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
          'border-transparent bg-brand-500 text-white hover:bg-brand-600 focus:ring-brand-500',
        color === 'info' &&
          'border-transparent bg-blue-500 text-white hover:bg-blue-600 focus:ring-blue-500',
        color === 'warning' &&
          'border-transparent bg-yellow-500 text-white hover:bg-yellow-600 focus:ring-yellow-500',
        color === 'error' &&
          'border-transparent bg-red-500 text-white hover:bg-red-600 focus:ring-red-500',
        color === 'success' &&
          'border-transparent bg-green-500 text-white hover:bg-green-600 focus:ring-green-500',
        isDisabled &&
          '!hover:bg-slate-100 !cursor-not-allowed !border-slate-200 !bg-slate-100 !text-slate-300',
        isLoading && !isDisabled && '!cursor-not-allowed',
      )}
      onClick={onClick}
    >
      {isLoading && !isDisabled ? (
        <span className='flex h-6 w-6 items-center justify-center'>
          <Spinner mode={color === 'default' ? 'light' : 'dark'} />
        </span>
      ) : (
        <>{children}</>
      )}
    </button>
  );
};

export { Button };
export type { ButtonProps };
