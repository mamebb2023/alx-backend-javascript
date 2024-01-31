const express = require('express');
const { readFileSync, existsSync } = require('fs');

function countStudent(path) {
    if (!existsSync(path)) {
      throw new Error('Cannot load the database');
    }
  
    const content = readFileSync(path, 'utf8').trim().split('\n');
    let s = `Number of students: ${content.length - 1}\n`;
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
      s += `Number of students in ${fieldName}: ${
        students.length
      }. List: ${students.join(', ')}\n`;
    }
    s = s.slice(0, s.length - 1);
    return s;
}

const app = express();

app.get('/', (req, res) => {
    res.send('Hello Holberton School!');
});

app.get('/students', (req, res) => {
    const s = 'This is the list of our students\n';
    try {
        s += countStudent(process.argv[2]);
        res.send(`${s}`);
    } catch (error) {
        res.send(`${s}${error.message}`);
    }
});

app.listen(1245);

module.exports = app;
