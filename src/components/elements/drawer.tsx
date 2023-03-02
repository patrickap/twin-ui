import { Bars2Icon, XMarkIcon } from '@heroicons/react/24/outline';
import * as dialog from '@radix-ui/react-dialog';
import { ReactNode } from 'react';
import { ButtonIcon } from './button-icon';

type DrawerProps = {
  children?: ReactNode;
};

const Drawer = ({ children }: DrawerProps) => {
  return (
    <dialog.Root>
      <dialog.Trigger>
        <ButtonIcon>
          <Bars2Icon className='h-5 w-5' />
        </ButtonIcon>
      </dialog.Trigger>
      <dialog.Portal>
        <dialog.Overlay className='fixed inset-0 z-10 bg-slate-500/25' />
        <dialog.Content className='fixed top-0 left-0 z-10 flex h-full w-full max-w-xs flex-col overflow-hidden bg-white shadow-lg'>
          <dialog.Close className='flex justify-end p-4'>
            <ButtonIcon>
              <XMarkIcon className='h-5 w-5' />
            </ButtonIcon>
          </dialog.Close>
          <div>{children}</div>
        </dialog.Content>
      </dialog.Portal>
    </dialog.Root>
  );
};

export { Drawer };
export type { DrawerProps };
