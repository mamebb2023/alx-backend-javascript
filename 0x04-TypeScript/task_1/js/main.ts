export interface Teacher {
    readonly firstName: string;
    readonly lastName: string;
    fullTimeEmployee: true | false;
    yearsOfExperience?: number;
    location: string;
    [att: string]: any;
}

export interface Directors extends Teacher {

}