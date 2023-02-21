import clsx from 'clsx';
import { ReactNode } from 'react';

type InputLabelProps = {
  label?: string;
  htmlFor?: string;
  className?: string;
  children?: ReactNode;
};

const InputLabel = ({
  label,
  htmlFor,
  className,
  children,
}: InputLabelProps) => {
  return (
    <label
      htmlFor={htmlFor}
      className={clsx('text-sm font-medium text-slate-700', className)}
    >
      {label || children}
    </label>
  );
};

export { InputLabel };
export type { InputLabelProps };
