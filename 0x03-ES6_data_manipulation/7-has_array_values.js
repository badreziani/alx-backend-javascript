export default function hasValuesFromArray(aSet, arr) {
  for (const i of arr) {
    if (!aSet.has(i)) {
      return false;
    }
  }
  return true;
}
