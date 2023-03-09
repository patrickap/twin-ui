import { ColorScheme } from '@/configs';
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
import { motion } from 'framer-motion';
import { useEffect } from 'react';
import { ButtonIcon, Spinner, Text, Title } from '.';

// TODO: maybe improve animation with scale / opacity instead of translateX?

type ToastProps = {
  id?: string;
  scheme?: ColorScheme;
  title?: string;
  description?: string;
  duration?: number;
  isLoading?: boolean;
};

const Toast = ({
  id,
  scheme = ColorScheme.DEFAULT,
  title,
  description,
  duration = 5000,
  isLoading,
}: ToastProps) => {
  const { remove } = useToast();

  useEffect(() => {
    if (!id || !duration) {
      return;
    }

    const timeoutId = setTimeout(() => {
      remove(id);
      clearTimeout(timeoutId);
    }, duration);

    return () => {
      clearTimeout(timeoutId);
    };
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

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
        className='relative flex max-w-sm gap-4 rounded-lg bg-white p-4 text-sm shadow-lg'
      >
        <div>
          <div
            className={clsx(
              'flex h-8 w-8 shrink-0 items-center justify-center rounded-full',
              scheme === ColorScheme.DEFAULT && 'bg-slate-100 text-slate-500',
              scheme === ColorScheme.BRAND && 'bg-brand-100 text-brand-500',
              scheme === ColorScheme.INFO && 'bg-blue-100 text-blue-500',
              scheme === ColorScheme.WARNING && 'bg-yellow-100 text-yellow-500',
              scheme === ColorScheme.ERROR && 'bg-red-100 text-red-500',
              scheme === ColorScheme.SUCCESS && 'bg-green-100 text-green-500',
            )}
          >
            {isLoading ? (
              <Spinner />
            ) : scheme === ColorScheme.DEFAULT ||
              scheme === ColorScheme.BRAND ||
              scheme === ColorScheme.INFO ? (
              <InformationCircleIcon className='h-5 w-5' />
            ) : scheme === ColorScheme.WARNING ? (
              <ExclamationTriangleIcon className='h-5 w-5' />
            ) : scheme === ColorScheme.ERROR ? (
              <XCircleIcon className='h-5 w-5' />
            ) : scheme === ColorScheme.SUCCESS ? (
              <CheckCircleIcon className='h-5 w-5' />
            ) : null}
          </div>
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

export { Toast };
export type { ToastProps };
