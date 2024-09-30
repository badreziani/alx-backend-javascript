export default function appendToEachArrayValue(array, appendString) {
  const arr = [];
  for (let item of array) {
    arr.push(appendString + item);
  }
  return arr;
}
