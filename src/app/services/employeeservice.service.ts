import { Injectable } from '@angular/core';
import { Employee } from '../entity/Employee';

@Injectable({
  providedIn:'root'
})
export class EmployeeService {

  allEmployees:Employee[] = [
    {
      "id": "1",
      "FirstName": "Lalit",
      "LastName": "Aggarwal",
      "DOB": "26-01-1996",
      "Gender": "Male",
      "Department":"HRD"
    }
  ];

  getAllEmployees():Employee[]{
    return this.allEmployees;
  }

  addEmployee(employee:Employee){
    this.allEmployees.push(employee);
  }

  updateEmployee(employee:Employee){
    var updateEmployee = this.allEmployees.find(emp => emp.id == employee.id);
    updateEmployee.FirstName = employee.FirstName;
    updateEmployee.LastName = employee.LastName;
    updateEmployee.DOB = employee.DOB;
    updateEmployee.Gender = employee.Gender;
    updateEmployee.Department = employee.Department;
  }

  deleteEmployee(id:string){
    this.allEmployees = this.allEmployees.filter(employee => employee.id != id);
  }

  getEmployee(id:string):Employee{
    return this.allEmployees.find(emp => emp.id == id);
  }
}
