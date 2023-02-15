import { signIn } from '../api';

const signInMutation = () => ({
  mutationKey: ['signIn'],
  mutationFn: signIn,
});

export { signInMutation };
