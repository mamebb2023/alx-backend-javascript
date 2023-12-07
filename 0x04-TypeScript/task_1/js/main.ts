interface Teacher {
    readonly firstName: string;
    readonly lastName: string;
    fullTimeEmployee: true | false;
    yearsOfExperience?: number;
    location: string;
    [att: string]: any;
}

interface Directors extends Teacher {
    numberOfReports: number;
}

interface printTeacherFunction {
    (firstName: string, lastName: string): string;
}

function printTeacher(firstName: string, lastName: string){
    return `${firstName[0]}. ${lastName}`;
}

interface StudentClass {
    student: StudentClass;
}

interface StudentClassConstructor {
    firstName: string;
    lastName: string;
}

class StudentClass {
    firstName: string;
    lastName: string;

    constructor(firstName: string, lastName: string){
        this.firstName = firstName;
        this.lastName = lastName;
    }

    workOnHomework(){
        return `Currently working`;
    }

    displayName(){
        return `${this.firstName}`;
    }
}