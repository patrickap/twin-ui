import { ReactElement } from 'react';

type LayoutProps = {
  children?: ReactElement | ReactElement[];
};

// TODO: create layout
const Layout = ({ children }: LayoutProps) => {
  return (
    <>
      ADMIN LAYOUT
      <br />
      {children}
    </>
  );
};

export { Layout };
export type { LayoutProps };
