import { signIn } from '../api/auth';

const signInMutation = () => ({
  mutationKey: ['signIn'],
  mutationFn: signIn,
});

export { signInMutation };
