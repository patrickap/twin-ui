import { Direction } from '@/constants';
import { ValueOf } from '@/types';
import { XMarkIcon } from '@heroicons/react/24/outline';
import * as dialog from '@radix-ui/react-dialog';
import clsx from 'clsx';
import { AnimatePresence, motion } from 'framer-motion';
import { ReactNode, useState } from 'react';
import { ButtonIcon } from '..';

type DrawerProps = {
  position?: ValueOf<Pick<typeof Direction, 'LEFT' | 'RIGHT'>>;
  trigger?: ReactNode;
  children?: ReactNode;
};

const Drawer = ({ position = 'left', trigger, children }: DrawerProps) => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <dialog.Root open={isOpen} onOpenChange={setIsOpen}>
      <dialog.Trigger asChild>{trigger}</dialog.Trigger>
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
              className={clsx(
                'fixed top-0 z-10 flex h-full w-full max-w-xs flex-col overflow-hidden bg-white shadow-lg',
                position === Direction.RIGHT ? 'right-0' : 'left-0',
              )}
            >
              <motion.div
                initial={{
                  translateX: position === Direction.RIGHT ? '100%' : '-100%',
                }}
                animate={{ translateX: 0 }}
                exit={{
                  translateX: position === Direction.RIGHT ? '100%' : '-100%',
                }}
                transition={{
                  duration: 0.3,
                }}
              >
                <div className='flex justify-end p-4'>
                  <dialog.Close asChild>
                    <ButtonIcon>
                      <XMarkIcon className='h-5 w-5' />
                    </ButtonIcon>
                  </dialog.Close>
                </div>
                <div className='p-4 pt-0'>{children}</div>
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
