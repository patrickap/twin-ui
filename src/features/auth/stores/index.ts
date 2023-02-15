import { Store } from 'pullstate';
import { AccessToken } from '../types';

type AuthState = {
  token?: AccessToken;
};

const authStore = new Store<AuthState>({});

export { authStore };
export type { AuthState };
