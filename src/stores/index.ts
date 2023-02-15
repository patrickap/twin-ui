import { Store } from 'pullstate';

type State = {};

// TODO: add global app state here
const store = new Store<State>({});

export { store };
export type { State };
