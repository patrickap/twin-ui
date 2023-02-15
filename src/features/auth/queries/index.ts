import { authenticate } from '../api';
import { AccessToken } from '../types';

const authenticateQuery = (token?: Partial<AccessToken>) => ({
  queryKey: ['authenticate', token?.value ?? ''],
  queryFn: () => authenticate(token),
});

export { authenticateQuery };
