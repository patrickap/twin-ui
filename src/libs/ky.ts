import Ky from 'ky';

const ky = Ky.extend({ credentials: 'same-origin', hooks: {} });

export { ky };
