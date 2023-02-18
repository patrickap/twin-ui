import { useMutation, UseMutationResult } from '@tanstack/react-query';
import { createContext, ReactNode } from 'react';
import { signInMutation } from '../mutations';
import { authStore } from '../stores';
import { AccessToken, Credentials } from '../types';

type AuthenticationContextValue = {
  signIn: UseMutationResult<AccessToken, unknown, Credentials, unknown>;
  isTokenValid: boolean;
};

// provider for auth mutations as the state is not shared between components
// issue: https://github.com/TanStack/query/issues/2304
const AuthenticationProvider = ({ children }: { children: ReactNode }) => {
  const signIn = useMutation({
    ...signInMutation(),
    onSuccess: (...args) => {
      const [token] = args;
      authStore.update((s) => {
        s.token = token;
      });
    },
  });

  // TODO: also check expiration time
  const isTokenValid = authStore.useState((s) => !!s.token);

  // TODO: add mutations like signUp, signOut, refresh ...
  return (
    <AuthenticationContext.Provider value={{ signIn, isTokenValid }}>
      {children}
    </AuthenticationContext.Provider>
  );
};

const AuthenticationContext = createContext<AuthenticationContextValue>(
  {} as AuthenticationContextValue,
);

export { AuthenticationContext, AuthenticationProvider };
export type { AuthenticationContextValue };
