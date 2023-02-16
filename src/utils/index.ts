/**
 * Returns true if given value is null or undefined otherwise false.
 *
 * @param value
 * @returns boolean
 */
const isNil = <T>(value: T | undefined | null): value is undefined | null => {
  return value === undefined || value === null;
};

/**
 * Async sleep. Useful for delaying execution of subsequent code.
 *
 * @param ms
 * @returns promise
 */
const sleep = (ms: number) => {
  return new Promise((resolve) => setTimeout(resolve, ms));
};

export { isNil, sleep };
