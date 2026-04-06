import { expect, test } from 'vitest';

import { objectInsertIf } from './';

test('objectInsertIf: returns null if condition is false', () => {
  expect(objectInsertIf(false, { a: 0, b: 1 })).toEqual(null);
});

test('objectInsertIf: returns object if condition is true', () => {
  expect(objectInsertIf(true, { a: 0, b: 1 })).toEqual({ a: 0, b: 1 });
});
