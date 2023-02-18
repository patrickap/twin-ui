/**
 * Returns true if given value is a function otherwise false.
 *
 * @param value
 * @returns boolean
 */
const isFunction = <T>(value: T | Function): value is Function => {
  return typeof value === 'function';
};

export { isFunction };
