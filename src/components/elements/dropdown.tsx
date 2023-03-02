import { EllipsisVerticalIcon } from '@heroicons/react/24/outline';
import * as dropdown from '@radix-ui/react-dropdown-menu';
import { AnimatePresence, motion } from 'framer-motion';
import { ReactNode, useState } from 'react';
import { ButtonIcon } from './button-icon';

type DropdownProps = {
  align?: 'start' | 'center' | 'end';
  side?: 'top' | 'bottom' | 'right' | 'left';
  children?: ReactNode;
};

const Dropdown = ({ align, side, children }: DropdownProps) => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <dropdown.Root open={isOpen} onOpenChange={setIsOpen}>
      <dropdown.Trigger>
        <ButtonIcon>
          <EllipsisVerticalIcon className='h-5 w-5' />
        </ButtonIcon>
      </dropdown.Trigger>
      <AnimatePresence>
        {isOpen ? (
          <dropdown.Portal forceMount>
            <dropdown.Content
              asChild
              align={align}
              side={side}
              sideOffset={4}
              className='z-10 w-56 rounded-lg bg-white p-2 shadow-lg'
            >
              <motion.div
                initial={{ opacity: 0, scale: 0.95 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.95 }}
                transition={{
                  duration: 0.1,
                }}
              >
                {children}
              </motion.div>
            </dropdown.Content>
          </dropdown.Portal>
        ) : null}
      </AnimatePresence>
    </dropdown.Root>
  );
};

export { Dropdown };
