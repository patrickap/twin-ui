import { useToast } from '@/hooks';
import {
  CheckCircleIcon,
  ExclamationTriangleIcon,
  InformationCircleIcon,
  XCircleIcon,
} from '@heroicons/react/20/solid';
import { XMarkIcon } from '@heroicons/react/24/outline';
import * as toast from '@radix-ui/react-toast';
import clsx from 'clsx';
import { AnimatePresence, motion } from 'framer-motion';
import { ButtonIcon } from './button-icon';
import { Spinner } from './spinner';
import { Text } from './text';
import { Title } from './title';

type ToastProps = {
  id?: string;
  type?: 'default' | 'info' | 'warning' | 'error' | 'success' | 'loading';
  title?: string;
  description?: string;
  duration?: number;
};

// TODO: separate toast proverder and toasts and add useToast hook

const Toasts = () => {
  const { toasts, add } = useToast();

  (window as any).add = (id: string) => {
    return add({
      title: 'as' + id,
      type: 'error',
      description: 'sdgsdgsd sd sdvsd',
      duration: 3000,
    });
  };

  (window as any).gett = () => {
    return toasts;
  };

  return (
    <toast.Provider>
      <AnimatePresence>
        {toasts?.map((props) => (
          <Toast {...props} key={props.id} />
        ))}
      </AnimatePresence>
      <toast.Viewport className='fixed top-4 right-4 z-10 flex flex-col gap-4' />
    </toast.Provider>
  );
};

const Toast = ({
  id,
  type = 'default',
  title,
  description,
  duration = 5000,
}: ToastProps) => {
  const { remove } = useToast();

  return (
    <toast.Root asChild forceMount>
      <motion.div
        layout
        key={id}
        initial={{ translateX: '100%' }}
        animate={{ translateX: 0 }}
        exit={{ translateX: '100%' }}
        transition={{
          duration: 0.3,
        }}
        className='relative flex max-w-sm gap-4 rounded-lg border border-slate-100 bg-white p-4 text-sm shadow-lg'
      >
        <div>
          {type !== 'default' ? (
            <div
              className={clsx(
                'flex h-8 w-8 shrink-0 items-center justify-center rounded-full',
                type === 'info' && 'bg-blue-100 text-blue-500',
                type === 'warning' && 'bg-yellow-100 text-yellow-500',
                type === 'error' && 'bg-red-100 text-red-500',
                type === 'success' && 'bg-green-100 text-green-500',
                type === 'loading' && 'bg-slate-100',
              )}
            >
              {type === 'info' ? (
                <InformationCircleIcon className='h-5 w-5' />
              ) : type === 'warning' ? (
                <ExclamationTriangleIcon className='h-5 w-5' />
              ) : type === 'error' ? (
                <XCircleIcon className='h-5 w-5' />
              ) : type === 'success' ? (
                <CheckCircleIcon className='h-5 w-5' />
              ) : type === 'loading' ? (
                <Spinner />
              ) : null}
            </div>
          ) : null}
        </div>
        <div className='flex flex-col gap-2'>
          <toast.Title>
            <Title size={6}>{title}</Title>
          </toast.Title>
          <toast.Description>
            <Text>{description}</Text>
          </toast.Description>
        </div>
        <toast.Close className='absolute top-3 right-3'>
          <ButtonIcon size='sm' onClick={() => (id ? remove(id) : null)}>
            <XMarkIcon className='h-5 w-5' />
          </ButtonIcon>
        </toast.Close>
      </motion.div>
    </toast.Root>
  );
};

export { Toast, Toasts };
export type { ToastProps };
