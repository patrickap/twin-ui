import clsx from 'clsx';
import { ReactNode } from 'react';

type InputLabelProps = {
  label?: string;
  htmlFor?: string;
  children?: ReactNode;
};

const InputLabel = ({ label, htmlFor, children }: InputLabelProps) => {
  return label || children ? (
    <label
      htmlFor={htmlFor}
      className={clsx('text-sm font-medium text-slate-700')}
    >
      {label || children}
    </label>
  ) : null;
};

export { InputLabel };
export type { InputLabelProps };
