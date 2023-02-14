import KY from 'ky';

const ky = KY.extend({ credentials: 'same-origin', hooks: {} });

export { ky };
