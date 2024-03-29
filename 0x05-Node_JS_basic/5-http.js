const http = require('http');
const { readFileSync, existsSync } = require('fs');

const host = '127.0.0.1';
const port = 1245;

function countStudents(path) {
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
    s += `Number of students in ${fieldName}: ${students.length}. List: ${students.join(', ')}\n`;
  }
  s = s.slice(0, s.length - 1);
  return s;
}

const app = http.createServer((req, res) => {
  res.statusCode = 200;
  res.setHeader('Content-Type', 'text/plain');
  switch (req.url) {
    case '/':
      res.end('Hello Holberton School!');
      break;
    case '/students':
      try {
        const s = countStudents(process.argv[2]);
        res.end(`This is the list of our students\n${s}`);
      } catch (error) {
        res.end(`This is the list of our students\n${error.message}`);
      }
      break;
    default:
      break;
  }
});

app.listen(port, host);

module.exports = app;
