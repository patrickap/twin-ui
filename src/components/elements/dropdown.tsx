import { Popover, Transition } from '@headlessui/react';
import { Fragment, ReactNode } from 'react';

type DropdownProps = {
  isOpen?: boolean;
  onClose?: (value: boolean) => void;
  children?: ReactNode;
};

const Dropdown = ({ isOpen, onClose, children }: DropdownProps) => {
  return (
    <Transition appear show={isOpen} as={Fragment}>
      <Popover as='div' className='relative z-10'>
        <Popover.Overlay
          static
          className='fixed inset-0'
          onClick={() => onClose?.(false)}
        />
        <Transition.Child
          as={Fragment}
          enter='ease-out duration-100'
          enterFrom='opacity-0 scale-95'
          enterTo='opacity-100 scale-100'
          leave='ease-in duration-75'
          leaveFrom='opacity-100 scale-100'
          leaveTo='opacity-0 scale-95'
        >
          <Popover.Panel className='absolute mt-2 w-56 divide-slate-100 rounded-lg bg-white p-2 shadow-lg'>
            {children}
          </Popover.Panel>
        </Transition.Child>
      </Popover>
    </Transition>
  );
};

export { Dropdown };
