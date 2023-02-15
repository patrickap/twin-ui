import { AccessToken } from '../types';

const authenticate = async (token?: Partial<AccessToken>) => {
  // TODO: remove mock
  if (!!token?.value) return Promise.resolve(true);

  return Promise.resolve(false);
};

export { authenticate };
