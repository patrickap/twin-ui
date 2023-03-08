import { ToastProps } from '@/components';
import { globalStore } from '@/stores';
import { v4 as uuidv4 } from 'uuid';

const useToast = () => {
  const toasts = globalStore.useState((s) => s.toasts);

  const add = (toast: ToastProps) => {
    const id = toast.id ?? uuidv4();

    globalStore.update((s) => {
      s.toasts = [...s.toasts, { ...toast, id }];
    });

    return id;
  };

  const remove = (id: string) => {
    globalStore.update((s) => {
      s.toasts = s.toasts.filter((toast) => toast.id !== id);
    });
  };

  return { toasts, add, remove };
};

export { useToast };
