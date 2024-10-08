export default function getListStudentIds(arr) {
  try {
    return arr.map(item => item.id);
  } catch (e) {
    return [];
  }
}
