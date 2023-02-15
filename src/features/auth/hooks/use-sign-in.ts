import { useMutation, UseMutationOptions } from '@tanstack/react-query';
import { signInMutation } from '../mutations';
import { Credentials, User } from '../types';

const useSignIn = (
  options?: UseMutationOptions<User, unknown, Credentials, unknown>,
) => {
  const signIn = useMutation({ ...options, ...signInMutation() });
  return signIn;
};

export { useSignIn };
