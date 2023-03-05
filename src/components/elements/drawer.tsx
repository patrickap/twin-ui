import { Bars2Icon, XMarkIcon } from '@heroicons/react/24/outline';
import * as dialog from '@radix-ui/react-dialog';
import { AnimatePresence, motion } from 'framer-motion';
import { ReactNode, useState } from 'react';
import { ButtonIcon } from './button-icon';

// TODO: add and pass all radix-ui props to make components
// optionally controlled, do this for all components if it makes sense. 

type DrawerProps = {
  children?: ReactNode;
};

const Drawer = ({ children }: DrawerProps) => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <dialog.Root open={isOpen} onOpenChange={setIsOpen}>
      <dialog.Trigger>
        <ButtonIcon>
          <Bars2Icon className='h-5 w-5' />
        </ButtonIcon>
      </dialog.Trigger>
      <AnimatePresence>
        {isOpen ? (
          <dialog.Portal forceMount>
            <dialog.Overlay className='fixed inset-0 z-10 bg-slate-500/25' />
            <dialog.Content
              asChild
              className='fixed top-0 left-0 z-10 flex h-full w-full max-w-xs flex-col overflow-hidden bg-white shadow-lg'
            >
              <motion.div
                initial={{ translateX: '-100%' }}
                animate={{ translateX: 0 }}
                exit={{ translateX: '-100%' }}
                transition={{
                  duration: 0.2,
                }}
              >
                <dialog.Close className='flex justify-end p-4'>
                  <ButtonIcon>
                    <XMarkIcon className='h-5 w-5' />
                  </ButtonIcon>
                </dialog.Close>
                <div>{children}</div>
              </motion.div>
            </dialog.Content>
          </dialog.Portal>
        ) : null}
      </AnimatePresence>
    </dialog.Root>
  );
};

export { Drawer };
export type { DrawerProps };
