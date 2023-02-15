import { useMutation, UseMutationOptions } from '@tanstack/react-query';
import { signInMutation } from '../mutations';
import { AuthUser, Credentials } from '../types';

const useSignIn = (
  options?: UseMutationOptions<AuthUser, unknown, Credentials, unknown>,
) => {
  const signIn = useMutation({ ...options, ...signInMutation() });
  return signIn;
};

export { useSignIn };
