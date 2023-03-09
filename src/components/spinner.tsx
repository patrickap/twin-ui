import { ColorMode } from '@/configs';
import clsx from 'clsx';

type SpinnerProps = {
  mode?: ColorMode;
};

const Spinner = ({ mode = ColorMode.LIGHT }: SpinnerProps) => {
  return (
    <div
      className={clsx(
        'h-5 w-5 animate-spin rounded-full border-4',
        mode === ColorMode.LIGHT && 'border-slate-700/20 border-t-slate-700',
        mode === ColorMode.DARK && 'border-white/20 border-t-white',
      )}
    ></div>
  );
};

export { Spinner };
export type { SpinnerProps };
