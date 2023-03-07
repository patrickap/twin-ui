import { Store } from 'pullstate';

// TODO: remove global store and replace with dialog store
// for handling dialogs, modals, toasts, ...

type GlobalState = {};

const globalStore = new Store<GlobalState>({});

export { globalStore };
export type { GlobalState };
