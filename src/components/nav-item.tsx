import clsx from 'clsx';
import { MouseEventHandler, ReactNode, useRef } from 'react';
import { NavLink, To, useNavigate } from 'react-router-dom';

type NavItemProps = {
  to?: To;
  icon?: ReactNode;
  onClick?: MouseEventHandler<HTMLAnchorElement>;
  children?: ReactNode;
};

const NavItem = ({ to = {}, icon, onClick, children }: NavItemProps) => {
  const linkRef = useRef<HTMLAnchorElement>(null);
  const navigate = useNavigate();

  return (
    <NavLink ref={linkRef} tabIndex={-1} to={to} onClick={onClick}>
      {({ isActive }) => (
        <div
          tabIndex={1}
          className={clsx(
            'flex items-center gap-2.5 rounded-lg p-2.5 focus:outline-none focus:ring-2 focus:ring-primary-500 focus:ring-offset-2',
            isActive && '!bg-slate-100',
            !children && '!inline-flex !justify-center',
          )}
          onKeyUp={(e) => {
            if (e.key === 'Enter') {
              linkRef.current?.click();
              navigate(to);
            }
          }}
        >
          {icon ? (
            <span className='h-5 w-5 text-slate-700 [&>*]:stroke-[1.75]'>
              {icon}
            </span>
          ) : null}
          {children ? (
            <span className='text-base font-medium text-slate-700 sm:text-sm'>
              {children}
            </span>
          ) : null}
        </div>
      )}
    </NavLink>
  );
};

export { NavItem };
export type { NavItemProps };
