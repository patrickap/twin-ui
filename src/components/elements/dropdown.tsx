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
  const [triggerRef, setTriggerRef] = useState<HTMLDivElement | null>();
  const [panelRef, setPanelRef] = useState<HTMLDivElement | null>();
  const { styles } = usePopper(triggerRef as any, panelRef as any, {
    placement: 'bottom-end',
  });

  return (
    <Popover as='div' className='relative'>
      <Popover.Button as='div' ref={setTriggerRef} className='max-w-fit'>
        {!trigger ? (
          <ButtonIcon>
            <EllipsisVerticalIcon className='h-5 w-5' />
          </ButtonIcon>
        ) : (
          <>{trigger}</>
        )}
      </Popover.Button>

      <Popover.Overlay className='fixed inset-0 z-10' />

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
          style={styles.popper}
          className='absolute z-10 w-56 divide-slate-100 rounded-lg bg-white p-2 shadow-lg'
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
