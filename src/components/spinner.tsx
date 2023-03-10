import { Theme } from '@/configs';
import { ValueOf } from '@/types';
import clsx from 'clsx';

type SpinnerProps = {
  theme?: ValueOf<typeof Theme>;
};

const Spinner = ({ theme = 'light' }: SpinnerProps) => {
  return (
    <div
      className={clsx(
        'h-5 w-5 animate-spin rounded-full border-4',
        theme === Theme.LIGHT && 'border-slate-700/20 border-t-slate-700',
        theme === Theme.DARK && 'border-white/20 border-t-white',
      )}
    ></div>
  );
};

export { Spinner };
export type { SpinnerProps };
