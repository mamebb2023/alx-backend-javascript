const { readFile } = require('fs');

function countStudents(path) {
  return new Promise((resolve, reject) => {
    readFile(path, 'utf-8', (err, data) => {
      if (err) {
        reject(new Error('Cannot read database'));
      }
      const content = data.trim().split('\n');
      console.log(`Number of students: ${content.length - 1}`);
      const fields = new Map();
      for (const row of content) {
        const tmp = row.split(',');
        const fieldName = tmp[tmp.length - 1];
        const studentName = tmp.slice(0, 1).join();

        if (fields.has(fieldName)) {
          fields.get(fieldName).push(studentName);
        } else {
          fields.set(fieldName, [studentName]);
        }
      }

      for (const [fieldName, students] of fields) {
        console.log(`Number of students in ${fieldName}: ${students.length}. List: ${students.join(', ')}`);
      }
      resolve();
    });
  });
}

module.exports = countStudents;
