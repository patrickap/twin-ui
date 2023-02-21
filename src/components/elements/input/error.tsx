import clsx from 'clsx';
import { ReactNode } from 'react';

type InputErrorProps = {
  error?: string;
  className?: string;
  children?: ReactNode;
};

const InputError = ({ className, error, children }: InputErrorProps) => {
  return (
    <div className={clsx('text-sm text-red-500', className)}>
      {error || children}
    </div>
  );
};

export { InputError };
export type { InputErrorProps };
