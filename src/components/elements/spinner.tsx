import clsx from 'clsx';

type SpinnerProps = {
  mode?: 'dark' | 'light';
};

const Spinner = ({ mode = 'light' }: SpinnerProps) => {
  return (
    <svg
      xmlns='http://www.w3.org/2000/svg'
      width='24'
      height='24'
      viewBox='0 0 24 24'
      className={clsx(
        'h-5 w-5 animate-spin',
        mode === 'light' && 'text-slate-700',
        mode === 'dark' && 'text-white',
      )}
    >
      <path
        fill='currentColor'
        d='M12,1A11,11,0,1,0,23,12,11,11,0,0,0,12,1Zm0,19a8,8,0,1,1,8-8A8,8,0,0,1,12,20Z'
        className={clsx('opacity-25')}
      />
      <path
        fill='currentColor'
        d='M10.14,1.16a11,11,0,0,0-9,8.92A1.59,1.59,0,0,0,2.46,12,1.52,1.52,0,0,0,4.11,10.7a8,8,0,0,1,6.66-6.61A1.42,1.42,0,0,0,12,2.69h0A1.57,1.57,0,0,0,10.14,1.16Z'
      />
    </svg>
  );
};

export { Spinner };
export type { SpinnerProps };
