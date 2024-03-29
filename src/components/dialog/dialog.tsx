import { Color } from '@/constants';
import { useDialog } from '@/hooks';
import { ValueOf } from '@/types';
import { ExclamationTriangleIcon } from '@heroicons/react/20/solid';
import * as alertDialog from '@radix-ui/react-alert-dialog';
import clsx from 'clsx';
import { motion } from 'framer-motion';
import { Button, Text, Title } from '..';

type DialogProps = {
  id?: string;
  color?: ValueOf<typeof Color>;
  title?: string;
  description?: string;
  onConfirm?: () => void;
  onCancel?: () => void;
};

const Dialog = ({
  id,
  color = 'neutral',
  title,
  description,
  onConfirm,
  onCancel,
}: DialogProps) => {
  const { close } = useDialog();

  return (
    <alertDialog.Root>
      <alertDialog.Portal forceMount className='relative z-10'>
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{
            duration: 0.3,
          }}
        >
          <alertDialog.Overlay className='fixed inset-0 z-10 bg-slate-500/50'></alertDialog.Overlay>
        </motion.div>

        <div className='fixed inset-0 z-10 flex h-screen w-screen flex-col items-center justify-center p-4'>
          <motion.div
            layout
            key={id}
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0, scale: 0.95 }}
            transition={{
              duration: 0.2,
            }}
          >
            <alertDialog.Content className='w-full max-w-lg overflow-hidden rounded-lg shadow-xl focus:outline-none'>
              <div className='max-h-96 overflow-y-scroll rounded-t-lg bg-white p-6'>
                <div className='flex flex-col items-center gap-4 sm:flex-row sm:items-start'>
                  <div
                    className={clsx(
                      'flex h-10 w-10 shrink-0 items-center justify-center rounded-full',
                      color === Color.NEUTRAL && 'bg-slate-100 text-slate-500',
                      color === Color.PRIMARY &&
                        'bg-primary-100 text-primary-500',
                      color === Color.INFO && 'bg-blue-100 text-blue-500',
                      color === Color.WARNING &&
                        'bg-yellow-100 text-yellow-500',
                      color === Color.ERROR && 'bg-red-100 text-red-500',
                      color === Color.SUCCESS && 'bg-green-100 text-green-500',
                    )}
                  >
                    <ExclamationTriangleIcon className='h-6 w-6' />
                  </div>
                  <div className='flex flex-col gap-2 text-center sm:text-start'>
                    <alertDialog.Title asChild>
                      <Title order={5}>{title}</Title>
                    </alertDialog.Title>
                    <alertDialog.Description asChild>
                      <Text>{description}</Text>
                    </alertDialog.Description>
                  </div>
                </div>
              </div>
              <div className='flex flex-col-reverse justify-end gap-3 border border-t-slate-100 bg-slate-50 py-4 px-6 empty:hidden sm:flex-row'>
                {onCancel ? (
                  <alertDialog.Cancel asChild>
                    <Button
                      onClick={() => {
                        onCancel();

                        if (id) {
                          close(id);
                        }
                      }}
                    >
                      Cancel
                    </Button>
                  </alertDialog.Cancel>
                ) : null}

                {onConfirm ? (
                  <alertDialog.Action asChild>
                    <Button
                      color={color}
                      onClick={() => {
                        onConfirm();

                        if (id) {
                          close(id);
                        }
                      }}
                    >
                      Confirm
                    </Button>
                  </alertDialog.Action>
                ) : null}
              </div>
            </alertDialog.Content>
          </motion.div>
        </div>
      </alertDialog.Portal>
    </alertDialog.Root>
  );
};

export { Dialog };
export type { DialogProps };
