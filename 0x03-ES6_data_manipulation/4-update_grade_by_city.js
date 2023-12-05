export default function updateStudentGradeByCity(studentsList, city, newGrades) {
  const filteredRow = studentsList.filter((val) => val.location === city);
  return filteredRow.map((student) => {
    const grades = newGrades.filter((val) => val.studentId === student.id);
    if (grades.length === 0) {
      return {
        grade: 'N/A',
        ...student,
      };
    }

    return {
      grade: grades[grades.length - 1].grade,
      ...student,
    };
  });
}
