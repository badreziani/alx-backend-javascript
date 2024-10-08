export default function getStudentsByLocation(arr, location) {
  if (arr instanceof Array) {
    return arr.filter(item => item.location === location);
  }

  return [];
}
