import { Store } from 'pullstate';
import { AuthUser } from '../types';

type AuthState = {
  user?: AuthUser;
};

const authStore = new Store<AuthState>({});

export { authStore };
export type { AuthState };
