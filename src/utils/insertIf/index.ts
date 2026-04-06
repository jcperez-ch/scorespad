/**
 * Helper function to enable the following syntax:
 *
 * {
 *   a: 0,
 *   b: 1,
 *   ...objectInsertIf(someCondition, { conditionalItemC: 2, conditionalItemD: 3 })
 * }
 */
function objectInsertIf<T>(condition: unknown, item: T): T | null {
  return condition ? item : null;
}

export { objectInsertIf };
