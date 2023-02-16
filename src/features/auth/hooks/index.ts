import {
  useMutation,
  UseMutationOptions,
  useQuery,
  UseQueryOptions,
} from '@tanstack/react-query';
import { signInMutation, userQuery } from '../factories';
import { authStore } from '../stores';
import { AccessToken, Credentials, User } from '../types';

const useSignIn = (
  options?: UseMutationOptions<AccessToken, unknown, Credentials, unknown>,
) => {
  const signIn = useMutation({ ...options, ...signInMutation() });
  return signIn;
};

const useUser = (options?: UseQueryOptions<User, unknown, User, string[]>) => {
  const token = authStore.useState((s) => s.token);
  const user = useQuery({
    ...options,
    ...userQuery(token!),
  });
  return user;
};

export { useSignIn, useUser };
