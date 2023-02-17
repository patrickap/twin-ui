import { useMutation, UseMutationOptions } from '@tanstack/react-query';
import { signInMutation } from '../mutations';

import { authStore } from '../stores';
import { AccessToken, Credentials } from '../types';

const useAuth = (options?: {
  signIn: UseMutationOptions<AccessToken, unknown, Credentials, unknown>;
}) => {
  // TODO: check also token expiration
  const isAuthenticated = authStore.useState((s) => !!s.token);

  const signIn = useMutation({
    ...options?.signIn,
    ...signInMutation(),
    onSuccess: (...args) => {
      options?.signIn.onSuccess?.(...args);

      const [token] = args;
      authStore.update((s) => {
        s.token = token;
      });
    },
  });

  // TODO: add mutations like signUp, signOut, ...
  return { isAuthenticated, signIn };
};

export { useAuth };
