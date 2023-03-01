import { useBreakpoint } from '@/hooks';
import { isFunction } from '@/utils';
import { Popover, Transition } from '@headlessui/react';
import { EllipsisVerticalIcon } from '@heroicons/react/24/outline';
import { Fragment, ReactNode, useState } from 'react';
import { usePopper } from 'react-popper';
import { ButtonIcon } from './button-icon';

type DropdownProps = {
  trigger?: ReactNode;
  children?:
    | ReactNode
    | ((props: { isOpen: boolean; close: () => void }) => ReactNode);
};

const Dropdown = ({ trigger, children }: DropdownProps) => {
  const { sm } = useBreakpoint();
  const [triggerRef, setTriggerRef] = useState<HTMLDivElement | null>();
  const [panelRef, setPanelRef] = useState<HTMLDivElement | null>();
  const { styles } = usePopper(triggerRef, panelRef, {
    strategy: 'absolute',
    placement: 'bottom-start',
  });

  return (
    <Popover as='div' className='sm:relative'>
      <Popover.Button as='div' ref={setTriggerRef} className='max-w-fit'>
        {!trigger ? (
          <ButtonIcon>
            <EllipsisVerticalIcon className='h-5 w-5' />
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
        <Popover.Overlay className='fixed inset-0 z-10 bg-slate-500/25 sm:bg-transparent' />
      </Transition>

      <Transition
        as={Fragment}
        enter='ease-out duration-100'
        enterFrom='opacity-0 scale-95'
        enterTo='opacity-100 scale-100'
        leave='ease-in duration-75'
        leaveFrom='opacity-100 scale-100'
        leaveTo='opacity-0 scale-95'
      >
        <Popover.Panel
          ref={setPanelRef}
          style={sm ? styles.popper : {}}
          className='absolute inset-x-0 bottom-0 z-10 w-full rounded-t-lg rounded-b-none bg-white p-2 shadow-lg sm:inset-x-auto sm:bottom-auto sm:w-56 sm:rounded-lg'
        >
          {({ open: isOpen, close }) => (
            <>{isFunction(children) ? children({ isOpen, close }) : children}</>
          )}
        </Popover.Panel>
      </Transition>
    </Popover>
  );
};

export { Dropdown };
