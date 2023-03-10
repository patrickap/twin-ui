import { RocketLaunchIcon } from '@heroicons/react/20/solid';

type LogoProps = {
  size?: number;
};

const Logo = ({ size = 12 }: LogoProps) => {
  return (
    <div className='flex w-full items-center justify-center'>
      <RocketLaunchIcon
        style={{ width: size + 'rem', height: size + 'rem' }}
        className='text-primary-500'
      />
    </div>
  );
};

export { Logo };
export type { LogoProps };
