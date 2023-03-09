import { ColorScheme } from '@/configs';
import { isFunction } from '@/utils';
import { ExclamationTriangleIcon } from '@heroicons/react/20/solid';
import * as dialog from '@radix-ui/react-dialog';
import clsx from 'clsx';
import { Button, Text, Title } from '.';

type DialogProps = {
  id?: string;
  scheme?: ColorScheme;
  title?: string;
  description?: string;
  onConfirm?: (() => void) | { label?: string; handle: () => void };
  onCancel?: (() => void) | { label?: string; handle: () => void };
};

// TODO: i18n
// TODO: color types
// TODO: use id in motion.div

const Dialog = ({
  id,
  scheme = ColorScheme.DEFAULT,
  title,
  description,
  onConfirm,
  onCancel,
}: DialogProps) => {
  return (
    <dialog.Root>
      <dialog.Portal forceMount className='relative z-10'>
        <dialog.Overlay className='fixed inset-0 z-10 bg-slate-500/50'></dialog.Overlay>

        <div className='fixed inset-0 z-10 flex h-screen w-screen flex-col items-center justify-center p-4'>
          <dialog.Content className='w-full max-w-lg overflow-hidden rounded-lg shadow-xl'>
            <div className='max-h-96 overflow-y-scroll rounded-t-lg bg-white p-6'>
              <div className='flex flex-col items-center gap-4 sm:flex-row sm:items-start'>
                <div
                  className={clsx(
                    'flex h-10 w-10 shrink-0 items-center justify-center rounded-full',
                    scheme === ColorScheme.DEFAULT &&
                      'bg-slate-100 text-slate-500',
                    scheme === ColorScheme.BRAND &&
                      'bg-brand-100 text-brand-500',
                    scheme === ColorScheme.INFO && 'bg-blue-100 text-blue-500',
                    scheme === ColorScheme.WARNING &&
                      'bg-yellow-100 text-yellow-500',
                    scheme === ColorScheme.ERROR && 'bg-red-100 text-red-500',
                    scheme === ColorScheme.SUCCESS &&
                      'bg-green-100 text-green-500',
                  )}
                >
                  <ExclamationTriangleIcon className='h-6 w-6' />
                </div>
                <div className='flex flex-col gap-2 text-center sm:text-start'>
                  <dialog.Title>
                    <Title size={5}>{title}</Title>
                  </dialog.Title>
                  <dialog.Description>
                    <Text>{description}</Text>
                  </dialog.Description>
                </div>
              </div>
            </div>
            <div className='flex flex-col-reverse justify-end gap-3 border border-t-slate-100 bg-slate-50 py-4 px-6 empty:hidden sm:flex-row'>
              {onCancel ? (
                <dialog.Close asChild>
                  <>
                    <Button
                      onClick={
                        isFunction(onCancel) ? onCancel : onCancel?.handle
                      }
                    >
                      {!isFunction(onCancel) && onCancel?.label
                        ? onCancel?.label
                        : 'Cancel'}
                    </Button>
                  </>
                </dialog.Close>
              ) : null}

              {onConfirm ? (
                <Button
                  scheme={scheme}
                  onClick={
                    isFunction(onConfirm) ? onConfirm : onConfirm?.handle
                  }
                >
                  {!isFunction(onConfirm) && onConfirm?.label
                    ? onConfirm?.label
                    : 'Confirm'}
                </Button>
              ) : null}
            </div>
          </dialog.Content>
        </div>
      </dialog.Portal>
    </dialog.Root>
  );
};

export { Dialog };
export type { DialogProps };
