import {Component} from "angular2/core";
import {NavbarComponent} from './layout/navbar.component';
import {EmployeeContactListComponent} from './employee/employee-contactlist.component';

@Component({
    selector : 'my-app',
    template : `
        <nav-bar></nav-bar>
        <h2>Welcome to Angular2 !!</h2>
        <employee-contact-list></employee-contact-list>`,
    directives: [NavbarComponent, EmployeeContactListComponent]    
})

export class MainComponent{}

