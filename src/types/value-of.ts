/**
 * Returns the union of all the values of a given object type.
 */
type ValueOf<T> = T extends any ? T[keyof T] : never;

export type { ValueOf };
