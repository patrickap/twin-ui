import { MouseEventHandler, ReactNode } from 'react';

type DropdownItemProps = {
  icon?: ReactNode;
  onClick?: MouseEventHandler<HTMLButtonElement>;
  children?: ReactNode;
};

const DropdownItem = ({ icon, onClick, children }: DropdownItemProps) => {
  return (
    <button
      onClick={onClick}
      className='flex w-full items-center gap-2 rounded-lg bg-white p-2 text-sm text-slate-700 hover:bg-brand-500 hover:text-white focus:outline-none focus:ring-2 focus:ring-brand-500 focus:ring-offset-2'
    >
      {/* TODO: FIXME: hover icon color */}
      {icon ? <span className='h-5 w-5 text-slate-700'>{icon}</span> : null}
      {children ? <span>{children}</span> : null}
    </button>
  );
};

export { DropdownItem };
export type { DropdownItemProps };
