import { RocketLaunchIcon } from '@heroicons/react/20/solid';

type LogoProps = {
  size?: number;
};

export const Logo = ({ size = 12 }: LogoProps = {}) => {
  return (
    <div className='flex h-full w-full items-center justify-center'>
      <RocketLaunchIcon
        className='text-brand-500'
        style={{ width: size + 'rem', height: size + 'rem' }}
      />
    </div>
  );
};
