import { useMutation, UseMutationOptions } from '@tanstack/react-query';
import { signInMutation } from '../mutations';
import { authStore } from '../stores';
import { AccessToken, Credentials } from '../types';

// TODO: FIXME: state is not shared using useMutation but useQuery does...

const useAuth = (options?: {
  signIn: UseMutationOptions<AccessToken, unknown, Credentials, unknown>;
}) => {
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

  // TODO: also check expiration time
  const isTokenValid = authStore.useState((s) => !!s.token);

  // TODO: add mutations like signUp, signOut, ...
  return { signIn, isTokenValid };
};

export { useAuth };
