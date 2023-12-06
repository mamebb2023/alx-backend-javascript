const student1 = { firstName: 'John', lastName: 'Test', age: 20, location: 'Addis' };
const student2 = { firstName: 'Joe', lastName: 'Black', age: 36, location: 'New York' };

const studentsList = [student1, student2];

const table = document.createElement("table");
const row = document.createElement("tr");
const data = document.createElement("td");
const data2 = document.createElement("td");

for (const e of studentsList){
    data.innerHTML = `${e.firstName}`;
    data2.innerHTML = `${e.location}`;
}

row.appendChild(data);
row.appendChild(data2);

table.appendChild(row);

document.body.appendChild(table);