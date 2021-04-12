import { Component } from '@angular/core';
import { EmployeeService } from '../services/employeeservice.service';
import { Router } from '@angular/router';
import { Employee } from '../entity/Employee';

@Component({
  templateUrl: './addemployee.component.html'
})
export class AddemployeeComponent {

  FirstName:string;
  LastName:string;
  DOB:string;
  Gender:string;
  Department:string;
  employee: Employee;
  department : string[]=["Production","Purchasing","Marketing","HRD"]

  constructor(private employeeService: EmployeeService, private router: Router) { 
  }

  // Method to save an employee
  saveEmployee(){
    this.employee = new Employee(this.makeRandomID(), this.FirstName, this.LastName, this.DOB, this.Gender,this.Department);
    this.employeeService.addEmployee(this.employee);
    this.router.navigate(["Employees"]);
  }

  cancelEmployee(){
    this.router.navigate(["Employees"]);
  }

  OnItemChange(value : any){
    this.Gender = value;
  }

  // Creates random id for employee
  makeRandomID(): string {
    var text = "";
    var possible = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789";

    for (var i = 0; i < 10; i++)
      text += possible.charAt(Math.floor(Math.random() * possible.length));

    return text;
  }

  OnItemSelect(value : any){
    this.Department = value;
  }
}
