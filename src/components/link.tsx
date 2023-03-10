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
      className='text-sm font-medium text-primary-500 hover:text-primary-400'
    >
      {children}
    </RouterLink>
  );
};

export { Link };
export type { LinkProps };
