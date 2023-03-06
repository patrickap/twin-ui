import { authStore } from '@/features/auth/stores';
import Ky from 'ky';

const ky = Ky.extend({
  credentials: 'same-origin',
  retry: 0,
  hooks: {
    beforeRequest: [
      (request, options) => {
        const { token } = authStore.getRawState();

        if (!!token) {
          request.headers.set('Authorization', `Bearer ${token}`);
        }
      },
    ],
  },
});

export { ky };
