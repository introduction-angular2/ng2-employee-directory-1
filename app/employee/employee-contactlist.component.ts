import {Component} from "angular2/core";
import {Employee} from './employee.interface';
import {EmployeeContactService} from './employee-contact.service';

@Component({
  selector : 'employee-contact-list',
  template : `
    <table class="table table-striped table-bordered">
      <thead  >
        <tr >
          <th >#</th>
          <th >Employee Name</th>
          <th >Title</th>
          <th >Phone</th>
          <th >City</th>
          <th >State</th>
        </tr>
      </thead>
      <tbody>
        <tr *ngFor="#employee of employeeContacts"  >
          <td ><span class="badge" >{{employee.id}}</span></td>
          <td >{{employee.name}}</td>
          <td >{{employee.title}}</td>
          <td >{{employee.phone}}</td>
          <td >{{employee.city}}</td>
          <td >{{employee.state}}</td>
        </tr>
      </tbody>
    </table>`,
  providers: [EmployeeContactService]      
})

export class EmployeeContactListComponent {

  private employeeContacts : Employee[]; 

  constructor(private _employeeContactService: EmployeeContactService) { }

  ngOnInit() {
      this.getEmployeeContacts();
  }

  private getEmployeeContacts() {
      this._employeeContactService.getEmployeeContacts()
          .then(
          data => this.handleSuccess(data),
          error => this.handleError(error));
  }

  private handleSuccess(data) {
      console.log("Response data == >", data);
      this.employeeContacts = data;
  }

  private handleError(error) {
      console.error("Error while invoking the service == >", error);
  }
  
}

