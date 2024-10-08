export default function hasValuesFromArray(set, arr) {
  if (set instanceof Set && arr instanceof Array) {
    return arr.every(item => set.has(item));
  }

  return false;
}
