import { MouseEventHandler, ReactNode } from 'react';
import { Link as RouterLink, To } from 'react-router-dom';

type LinkProps = {
  to?: To;
  onClick?: MouseEventHandler<HTMLAnchorElement>;
  children?: ReactNode;
};

const Link = ({ to = {}, onClick, children }: LinkProps) => {
  return (
    <RouterLink
      to={to}
      onClick={onClick}
      className='text-sm font-medium text-primary-500 hover:text-primary-400 focus:rounded focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary-500 focus-visible:ring-offset-2'
    >
      {children}
    </RouterLink>
  );
};

export { Link };
export type { LinkProps };
