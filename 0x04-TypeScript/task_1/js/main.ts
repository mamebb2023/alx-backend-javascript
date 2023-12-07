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