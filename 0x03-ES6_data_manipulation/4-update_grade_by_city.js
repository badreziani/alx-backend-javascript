export default function updateStudentGradeByCity(arr, city, newGrades) {
  const defaultGrade = { grade: 'N/A' };

  if (arr instanceof Array) {
    return arr
      .filter((item) => student.location === city)
      .map((item) => ({
        id: item.id,
        firstName: item.firstName,
        location: item.location,
        grade: (newGrades
          .filter((grade) => grade.itemId === student.id)
          .pop() || defaultGrade).grade,
      }));
  }
  return [];
}
