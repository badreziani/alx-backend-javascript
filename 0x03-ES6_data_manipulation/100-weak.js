export const weakMap = new WeakMap();

export function queryAPI(endpoint) {
  let counter = weakMap.get(endpoint) || 0;
  counter += 1;
  weakMap.set(endpoint, counter);
  if (counter >= 5) {
    throw Error('Endpoint load is high');
  }
  return counter;
}
