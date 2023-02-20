import clsx from 'clsx';

type SpinnerProps = {
  mode?: 'dark' | 'light';
};

const Spinner = ({ mode = 'light' }: SpinnerProps) => {
  return (
    <div
      className={clsx(
        'h-5 w-5 animate-spin rounded-full border-4',
        mode === 'light' && 'border-slate-700/20 border-t-slate-700',
        mode === 'dark' && 'border-white/20 border-t-white',
      )}
    ></div>
  );
};

export { Spinner };
export type { SpinnerProps };
