import { ExclamationTriangleIcon } from '@heroicons/react/20/solid';
import * as dialog from '@radix-ui/react-dialog';
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
    <dialog.Root>
      <dialog.Portal forceMount className='relative z-10'>
        <dialog.Overlay className='fixed inset-0 z-10 bg-slate-500/50'></dialog.Overlay>

        <div className='fixed inset-0 z-10 flex h-screen w-screen flex-col items-center justify-center p-4'>
          <dialog.Content className='w-full max-w-lg overflow-hidden rounded-lg shadow-xl'>
            <div className='max-h-96 overflow-y-scroll rounded-t-lg bg-white p-6'>
              <div className='flex flex-col items-center gap-4 sm:flex-row sm:items-start'>
                <div className='flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-red-100'>
                  <ExclamationTriangleIcon className='h-6 w-6 text-red-500' />
                </div>
                <div className='flex flex-col gap-2 text-center sm:text-start'>
                  <dialog.Title>
                    <Title size={5}>Deactivate account</Title>
                  </dialog.Title>
                  <dialog.Description>
                    <Text>
                      Are you sure you want to deactivate your account? All of
                      your data will be permanently removed. This action cannot
                      be undone.
                    </Text>
                  </dialog.Description>
                </div>
              </div>
            </div>
            <div className='flex flex-col-reverse justify-end gap-3 border border-t-slate-100 bg-slate-50 py-4 px-6 sm:flex-row'>
              <dialog.Close asChild>
                <>
                  <Button>Cancel</Button>
                </>
              </dialog.Close>
              <Button color='error'>Deactivate</Button>
            </div>
          </dialog.Content>
        </div>
      </dialog.Portal>
    </dialog.Root>
  );
};

export { Dialog };
export type { DialogProps };
