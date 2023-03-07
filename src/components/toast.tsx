import {
  CheckCircleIcon,
  ExclamationTriangleIcon,
  InformationCircleIcon,
  XCircleIcon,
} from '@heroicons/react/20/solid';
import { XMarkIcon } from '@heroicons/react/24/outline';
import clsx from 'clsx';
import { ButtonIcon } from './button-icon';
import { Spinner } from './spinner';
import { Text } from './text';
import { Title } from './title';

type ToastProps = {
  type?: 'default' | 'info' | 'warning' | 'error' | 'success' | 'loading';
  title?: string;
  description?: string;
  onClose?: () => void;
};

const Toast = ({
  type = 'default',
  title,
  description,
  onClose,
}: ToastProps) => {
  return (
    <div className='relative max-w-sm rounded-lg border border-slate-100 bg-white p-4 text-sm shadow-lg'>
      <div className='absolute top-3 right-3'>
        <ButtonIcon size='sm' onClick={onClose}>
          <XMarkIcon className='h-5 w-5' />
        </ButtonIcon>
      </div>
      <div className='flex gap-4'>
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
        <div className='flex flex-col gap-2'>
          <Title size={5}>{title}</Title>
          <Text>{description}</Text>
        </div>
      </div>
    </div>
  );
};

export { Toast };
export type { ToastProps };
