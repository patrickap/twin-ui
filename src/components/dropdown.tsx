import { Alignment, Direction } from '@/constants';
import { ValueOf } from '@/types';
import * as dropdown from '@radix-ui/react-dropdown-menu';
import { AnimatePresence, motion } from 'framer-motion';
import { ReactNode, useState } from 'react';

type DropdownProps = {
  align?: ValueOf<typeof Alignment>;
  position?: ValueOf<typeof Direction>;
  trigger?: ReactNode;
  children?: ReactNode;
};

const Dropdown = ({ align, position, trigger, children }: DropdownProps) => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <dropdown.Root open={isOpen} onOpenChange={setIsOpen}>
      <dropdown.Trigger asChild>{trigger}</dropdown.Trigger>
      <AnimatePresence>
        {isOpen ? (
          <dropdown.Portal forceMount>
            <dropdown.Content
              asChild
              align={align}
              side={position}
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
