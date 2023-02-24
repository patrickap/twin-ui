import { Popover, Transition } from '@headlessui/react';
import { XMarkIcon } from '@heroicons/react/24/outline';
import { Fragment, ReactNode } from 'react';
import { ButtonIcon } from './button-icon';

type DrawerProps = {
  isOpen?: boolean;
  onClose?: (value: boolean) => void;
  children?: ReactNode;
};

const Drawer = ({ isOpen = false, onClose, children }: DrawerProps) => {
  return (
    <Transition appear show={isOpen} as={Fragment}>
      <Popover as='div' className='relative z-10'>
        <Transition.Child
          as={Fragment}
          enter='ease-out duration-300'
          enterFrom='opacity-0'
          enterTo='opacity-100'
          leave='ease-in duration-200'
          leaveFrom='opacity-100'
          leaveTo='opacity-0'
        >
          <Popover.Overlay
            className='fixed inset-0 bg-slate-500/25'
            onClick={() => onClose?.(false)}
          />
        </Transition.Child>

        <Transition.Child
          as={Fragment}
          enter='ease-out duration-300'
          enterFrom='-translate-x-full'
          enterTo='translate-x-0'
          leave='ease-in duration-200'
          leaveFrom='translate-x-0'
          leaveTo='-translate-x-full'
        >
          <div className='fixed left-0 top-0 h-screen w-full max-w-xs'>
            <Popover.Panel className='flex h-full flex-col overflow-hidden bg-white shadow-lg'>
              <div className='flex justify-end p-4'>
                <ButtonIcon onClick={() => onClose?.(false)}>
                  <XMarkIcon className='h-5 w-5' />
                </ButtonIcon>
              </div>
              <div>{children}</div>
            </Popover.Panel>
          </div>
        </Transition.Child>
      </Popover>
    </Transition>
  );
};

export { Drawer };
