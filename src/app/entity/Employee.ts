export class Employee {
    id:string;
    FirstName:string;
    LastName:string;
    DOB:string;
    Gender:string;
    Department:string;

    constructor(id:string,
        FirstName:string,
        LastName:string,
        DOB:string,
        Gender:string,
        Department:string){
            this.id = id;
            this.FirstName = FirstName;
            this.LastName = LastName;
            this.DOB = DOB;
            this.Gender = Gender;
            this.Department = Department;
        }
}