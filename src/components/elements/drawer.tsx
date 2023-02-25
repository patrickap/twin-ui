import { isFunction } from '@/utils';
import { Popover, Transition } from '@headlessui/react';
import { Bars2Icon, XMarkIcon } from '@heroicons/react/24/outline';
import { Fragment, ReactNode } from 'react';
import { ButtonIcon } from './button-icon';

type DrawerProps = {
  trigger?: ReactNode;
  children?:
    | ReactNode
    | ((props: { isOpen: boolean; close: () => void }) => ReactNode);
};

const Drawer = ({ trigger, children }: DrawerProps) => {
  return (
    <Popover as='div' className='relative'>
      <Popover.Button as='div' className='max-w-fit'>
        {!trigger ? (
          <ButtonIcon>
            <Bars2Icon className='h-5 w-5' />
          </ButtonIcon>
        ) : (
          <>{trigger}</>
        )}
      </Popover.Button>

      <Transition
        as={Fragment}
        enter='ease-out duration-300'
        enterFrom='opacity-0'
        enterTo='opacity-100'
        leave='ease-in duration-200'
        leaveFrom='opacity-100'
        leaveTo='opacity-0'
      >
        <Popover.Overlay className='fixed inset-0 z-10 bg-slate-500/25' />
      </Transition>

      <Transition
        as={Fragment}
        enter='ease-out duration-300'
        enterFrom='-translate-x-full'
        enterTo='translate-x-0'
        leave='ease-in duration-200'
        leaveFrom='translate-x-0'
        leaveTo='-translate-x-full'
      >
        <Popover.Panel className='fixed left-0 top-0 z-10 flex h-full w-full max-w-xs flex-col overflow-hidden bg-white shadow-lg'>
          {({ open: isOpen, close }) => (
            <>
              <div className='flex justify-end p-4'>
                <ButtonIcon onClick={() => close()}>
                  <XMarkIcon className='h-5 w-5' />
                </ButtonIcon>
              </div>
              <div>
                {isFunction(children) ? children({ isOpen, close }) : children}
              </div>
            </>
          )}
        </Popover.Panel>
      </Transition>
    </Popover>
  );
};

export { Drawer };
export type { DrawerProps };
