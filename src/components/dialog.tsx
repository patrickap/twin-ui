import { CenterLayout } from '@/layouts';
import { ExclamationTriangleIcon } from '@heroicons/react/20/solid';
import * as dialog from '@radix-ui/react-dialog';
import clsx from 'clsx';
import { Button } from './button';
import { Text } from './text';
import { Title } from './title';

type DialogProps = {
  id?: string;
  type?: 'alert' | 'confirm' | 'prompt';
  title?: string;
  description?: string;
};

const Dialog = ({ id, type, title, description }: DialogProps) => {
  return (
    <div
      className='relative z-10'
      aria-labelledby='modal-title'
      role='dialog'
      aria-modal='true'
    >
      <div className='fixed inset-0 z-10 bg-slate-500/50'></div>

      <div className='fixed inset-0 z-10 overflow-y-auto'>
        <CenterLayout>
          {/* Container */}
          <div className='w-full max-w-lg overflow-hidden rounded-lg shadow-xl'>
            {/* Body */}
            <div className='max-h-96 overflow-y-scroll rounded-t-lg bg-white p-6'>
              <div className='flex flex-col items-center gap-4 sm:flex-row sm:items-start'>
                <div className='flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-red-100'>
                  <ExclamationTriangleIcon className='h-6 w-6 text-red-500' />
                </div>
                <div className='flex flex-col gap-2 text-center sm:text-start'>
                  <Title size={5}>Deactivate account</Title>
                  <Text>
                    Are you sure you want to deactivate your account? All of
                    your data will be permanently removed. This action cannot be
                    undone.
                  </Text>
                </div>
              </div>
            </div>
            {/* Footer */}
            <div className='flex flex-col-reverse justify-end gap-3 border border-t-slate-100 bg-slate-50 py-4 px-6 sm:flex-row'>
              <Button>Cancel</Button>

              <Button color='error'>Deactivate</Button>
            </div>
          </div>
        </CenterLayout>
      </div>
    </div>
  );

  return (
    <dialog.Root>
      <dialog.Portal forceMount>
        <dialog.Overlay className='fixed inset-0 z-10 bg-slate-500/25' />

        <dialog.Content className='fixed inset-0 z-10 focus:outline-none'>
          <div className='flex min-h-full items-center justify-center p-4 sm:w-full sm:max-w-lg'>
            <div
              className={clsx(
                'flex h-8 w-8 shrink-0 items-center justify-center rounded-full',
                type === 'alert' && 'bg-red-100 text-red-500',
                type === 'confirm' && 'bg-green-100 text-green-500',
                type === 'prompt' && 'bg-blue-100 text-blue-500',
              )}
            >
              <ExclamationTriangleIcon className='h-5 w-5' />
            </div>
            <dialog.Title>
              <Title size={5}>Deactivate account</Title>
            </dialog.Title>
            <dialog.Description>
              <Text>
                Are you sure you want to deactivate your account? All of your
                data will be permanently removed. This action cannot be undone.
              </Text>
            </dialog.Description>
            <dialog.Close></dialog.Close>
          </div>
        </dialog.Content>
      </dialog.Portal>
    </dialog.Root>
  );
};

export { Dialog };
export type { DialogProps };
