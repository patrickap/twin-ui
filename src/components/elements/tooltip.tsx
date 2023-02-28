import { Popover, Transition } from '@headlessui/react';
import { Placement } from '@popperjs/core';
import { Fragment, ReactNode, useState } from 'react';
import { usePopper } from 'react-popper';

type TooltipProps = {
  label: ReactNode;
  placement?: Placement;
  children?: ReactNode;
};

// TODO: FIXME: tooltip / dropdown popperjs removes headlessui transitions...

const Tooltip = ({ label, placement = 'top', children }: TooltipProps) => {
  const [triggerRef, setTriggerRef] = useState<HTMLDivElement | null>();
  const [panelRef, setPanelRef] = useState<HTMLDivElement | null>();

  const { styles } = usePopper(triggerRef, panelRef, {
    strategy: 'absolute',
    placement: placement,
    modifiers: [{ name: 'offset', options: { offset: [0, 8] } }],
  });

  return (
    <Popover className='relative'>
      <div
        onMouseEnter={() => triggerRef?.click()}
        onMouseLeave={() => triggerRef?.click()}
      >
        <Popover.Button as='div' ref={setTriggerRef}>
          {children}
        </Popover.Button>

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
            className='absolute z-10 rounded-lg bg-slate-900/75 p-2 px-3 text-sm text-white backdrop-blur-sm'
          >
            {label}
          </Popover.Panel>
        </Transition>
      </div>
    </Popover>
  );
};

export { Tooltip };
export type { TooltipProps };
