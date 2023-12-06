interface Student {
    firstName: string,
    lastName: string,
    age: number,
    location: string,
}

const student1: Student = { firstName: 'John', lastName: 'Test', age: 20, location: 'Addis' };
const student2: Student = { firstName: 'Joe', lastName: 'Black', age: 36, location: 'New York' };

const studentsList = [student1, student2];

function createTable(studentsList: Student[]) {
    const body = document.getElementsByTagName('body')[0];
    const tbl = document.createElement('table');

    tbl.style.width = '300px';
    tbl.setAttribute('border', '2');

    const tbdy = document.createElement('tbody');

    for (const e of studentsList){
        const row = tbdy.insertRow();

        const data = row.insertCell();
        data.appendChild(document.createTextNode(`${e.firstName}`));
        const data2 = row.insertCell();
        data2.appendChild(document.createTextNode(`${e.location}`));

        tbdy.appendChild(row);
    }

    tbl.appendChild(tbdy);
    body.appendChild(tbl);
}

createTable(studentsList);