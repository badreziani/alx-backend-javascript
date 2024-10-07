export default function getStudentsByLocation(arr, city) {
  if (arr instanceof Array) {
    return arr.filter(item => item.location === city);
  }
}
