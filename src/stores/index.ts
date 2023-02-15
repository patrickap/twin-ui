import { Store } from 'pullstate';

type State = {};

// TODO: global app state
const store = new Store<State>({});

export { store };
export type { State };
