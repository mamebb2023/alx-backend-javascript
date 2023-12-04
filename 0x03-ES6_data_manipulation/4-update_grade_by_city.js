export default function updateStudentGradeByCity(arr, city, newGrades) {
  const filterdRow = arr.filter((row) => row.location === city);
  return filterdRow.map((student) => {
    const grades = newGrades.filter((x) => x.studentId === student.id);
    if (grades.length === 0) {
      return {
        ...student,
        grades: 'N/A',
      };
    }
    return {
      ...student,
      grade: grades[grades.length - 1].grade,
    };
  });
}
