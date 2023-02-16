/**
 * Async sleep. Useful for delaying execution of subsequent code.
 *
 * @param ms
 * @returns promise
 */
const sleep = (ms: number) => {
  return new Promise((resolve) => setTimeout(resolve, ms));
};

export { sleep };
