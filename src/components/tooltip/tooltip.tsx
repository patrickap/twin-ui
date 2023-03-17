import { Direction } from '@/constants';
import { ValueOf } from '@/types';
import * as tooltip from '@radix-ui/react-tooltip';
import { AnimatePresence, motion } from 'framer-motion';
import { ReactNode, useState } from 'react';

type TooltipProps = {
  position?: ValueOf<typeof Direction>;
  content?: ReactNode;
  children?: ReactNode;
};

const Tooltip = ({ position, content, children }: TooltipProps) => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <tooltip.Provider delayDuration={0}>
      <tooltip.Root open={isOpen} onOpenChange={setIsOpen}>
        <tooltip.Trigger asChild>
          <div tabIndex={-1} className='max-w-fit'>
            {children}
          </div>
        </tooltip.Trigger>
        <AnimatePresence>
          {isOpen ? (
            <tooltip.Portal forceMount>
              <tooltip.Content
                asChild
                side={position}
                sideOffset={8}
                className='z-10 rounded-lg bg-slate-900/75 p-2 px-3 text-sm text-white backdrop-blur-sm'
              >
                <motion.div
                  initial={{ opacity: 0, scale: 0.95 }}
                  animate={{ opacity: 1, scale: 1 }}
                  exit={{ opacity: 0, scale: 0.95 }}
                  transition={{
                    duration: 0.1,
                  }}
                >
                  {content}
                  <tooltip.Arrow className='fill-slate-900/75 backdrop-blur-sm' />
                </motion.div>
              </tooltip.Content>
            </tooltip.Portal>
          ) : null}
        </AnimatePresence>
      </tooltip.Root>
    </tooltip.Provider>
  );
};

export { Tooltip };
export type { TooltipProps };
