export default function updateGradesByCity(arr, city, grades) {
  if (arr instanceof Array) {
    return arr.map(item => {
      if (item.location === city) {
        return { ...item, grades };
      }

      return item;
    });
  }

  return [];
}
