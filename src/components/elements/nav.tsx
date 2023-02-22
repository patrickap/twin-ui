import { Children, ReactNode } from 'react';

type NavProps = {
  children?: ReactNode;
};

const Nav = ({ children }: NavProps) => {
  return (
    <nav className='flex flex-col gap-0'>
      <ul>
        {Children.toArray(children).map((child) => (
          <li>{child}</li>
        ))}
      </ul>
    </nav>
  );
};

export { Nav };
export type { NavProps };
