import { Store } from 'pullstate';

type GlobalState = {};

// TODO: add global app state here
const globalStore = new Store<GlobalState>({});

export { globalStore };
export type { GlobalState };
