import { DialogProps, ToastProps } from '@/components';
import { Store } from 'pullstate';

type GlobalState = {
  toasts: ToastProps[];
  dialogs: DialogProps[];
};

const globalStore = new Store<GlobalState>({ toasts: [], dialogs: [] });

export { globalStore };
export type { GlobalState };
