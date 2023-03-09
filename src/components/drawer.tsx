import { isFunction } from '@/utils';
import { Bars2Icon, XMarkIcon } from '@heroicons/react/24/outline';
import * as dialog from '@radix-ui/react-dialog';
import { AnimatePresence, motion } from 'framer-motion';
import { ReactNode, useState } from 'react';
import { ButtonIcon } from '.';

type DrawerProps = {
  children?: ReactNode | ((props: { close: () => void }) => ReactNode);
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
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{
                duration: 0.3,
              }}
            >
              <dialog.Overlay className='fixed inset-0 z-10 bg-slate-500/25' />
            </motion.div>
            <dialog.Content
              asChild
              className='fixed top-0 left-0 z-10 flex h-full w-full max-w-xs flex-col overflow-hidden bg-white shadow-lg'
            >
              <motion.div
                initial={{ translateX: '-100%' }}
                animate={{ translateX: 0 }}
                exit={{ translateX: '-100%' }}
                transition={{
                  duration: 0.3,
                }}
              >
                <dialog.Close className='flex justify-end p-4'>
                  <ButtonIcon>
                    <XMarkIcon className='h-5 w-5' />
                  </ButtonIcon>
                </dialog.Close>
                <div>
                  {isFunction(children)
                    ? children({ close: () => setIsOpen(false) })
                    : children}
                </div>
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
