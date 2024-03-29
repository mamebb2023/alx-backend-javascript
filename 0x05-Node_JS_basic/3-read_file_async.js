const { readFile } = require('fs');

function countStudents(path) {
  return new Promise((resolve, reject) => {
    readFile(path, 'utf8', (err, data) => {
      if (err) {
        reject(new Error('Cannot load the database'));
      }
      const content = data.toString('utf-8').trim().split('\n');
      console.log(`Number of students: ${content.length - 1}`);
      const fields = new Map();
      for (const row of content.splice(1)) {
        const tmp = row.split(',');
        const fieldName = tmp[tmp.length - 1];
        const studentName = tmp.splice(0, 1).join(' ');

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
