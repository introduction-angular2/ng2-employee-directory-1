import {Employee} from './employee.interface';
import {Injectable} from 'angular2/core';

export class EmployeeContactService {
    
  private employeeContacts : Employee[] = [
      {
        id: 1,
        name: 'James Bell',
        title: 'Application Architect',
        phone: '470-255-4784',
        city: 'Orlando',
        state: 'Florida'
      },
      {
        id: 2,
        name: 'Robert Burge',
        title: 'Business Analyst',
        phone: '344-756-7491',
        city: 'Los Angeles',
        state: 'California'
      },
      {
        id: 3,
        name: 'Tom Hardy',
        title: 'Senior Developer',
        phone: '546-234-9812',
        city: 'Seattle',
        state: 'Washington'
      },
      {
        id: 4,
        name: 'Isaac Howard',
        title: 'Project Manager',
        phone: '657-888-2846',
        city: 'Salt Lake City',
        state: 'Utah'
      },
      {
        id: 5,
        name: 'Dave Davis',
        title: 'Test Analyst',
        phone: '470-232-7890',
        city: 'Orlando',
        state: 'Florida'
      },
      {
        id: 6,
        name: 'Alex Young',
        title: 'Director',
        phone: '876-121-8421',
        city: 'Las Vegas',
        state: 'Nevada'
      }
  ]; 

  getEmployeeContacts() {
    return Promise.resolve(this.employeeContacts);
  }

}