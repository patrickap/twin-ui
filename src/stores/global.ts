import { ToastProps } from '@/components';
import { Store } from 'pullstate';

// TODO: remove global store and replace with dialog store
// for handling dialogs, modals, toasts, ...

type GlobalState = {
  toasts: (ToastProps & { id: string })[];
};

const globalStore = new Store<GlobalState>({ toasts: [] });

export { globalStore };
export type { GlobalState };
