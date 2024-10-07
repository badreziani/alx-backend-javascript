export default function getStudentIdsSum(arr) {
  if (arr instanceof Array) {
    return arr.reduce((acc, item) => acc + item.id, 0);
  }
}
