import { Store } from 'pullstate';
import { User } from '../types';

type AuthState = {
  user?: User;
};

const authStore = new Store<AuthState>({});

export { authStore };
export type { AuthState };
