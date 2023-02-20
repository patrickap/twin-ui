import { ReactNode } from 'react';
import { Link as RouterLink, To } from 'react-router-dom';

type LinkProps = {
  to?: To;
  children?: ReactNode;
};

const Link = ({ to = {}, children }: LinkProps = {}) => {
  return (
    <RouterLink
      to={to}
      className='text-sm font-medium text-brand-500 hover:text-brand-400'
    >
      {children}
    </RouterLink>
  );
};

export { Link };
export type { LinkProps };
