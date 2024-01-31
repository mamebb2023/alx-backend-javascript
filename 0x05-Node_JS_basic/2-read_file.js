const { readFileSync, existsSync } = require('fs');

function countStudents(path) {
  if (!existsSync(path)) {
    throw new Error('Cannot load the database');
  }

  const content = readFileSync(path, 'utf-8').trim().split('\n');
  console.log(`Number of students: ${content.length - 1}`);
  const fields = new Map();
  for (const row of content.splice(1)) {
    const tmp = row.split(',');
    const fieldName = tmp[tmp.length - 1];
    const studentName = tmp.splice(0, 1).join();

    if (fields.has(fieldName)) {
      fields.get(fieldName).push(studentName);
    } else {
      fields.set(fieldName, [studentName]);
    }
  }

  for (const [fieldName, students] of fields) {
    console.log(`Number of students in ${fieldName}: ${students.length}. List: ${students.join(', ')}`);
  }
}

module.exports = countStudents;
