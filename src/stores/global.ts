import { ToastProps } from '@/components';
import { Store } from 'pullstate';

// TODO: add dialogs, ...

type GlobalState = {
  toasts: ToastProps[];
};

const globalStore = new Store<GlobalState>({ toasts: [] });

export { globalStore };
export type { GlobalState };
