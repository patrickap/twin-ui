import clsx from 'clsx';
import { ReactNode } from 'react';

type InputErrorProps = {
  error?: string;
  children?: ReactNode;
};

const InputError = ({ error, children }: InputErrorProps) => {
  return error || children ? (
    <div className={clsx('text-sm text-red-500')}>{error || children}</div>
  ) : null;
};

export { InputError };
export type { InputErrorProps };
