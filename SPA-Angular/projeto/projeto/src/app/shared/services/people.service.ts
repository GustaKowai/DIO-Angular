import { Injectable } from '@angular/core';
import { Observable, of  } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class PeopleService {

  constructor() { }

  getPeople():Observable<any> {
    let peopleArray = [
      {
        firstName: 'Gustavo',
        lastName: 'Gregorio',
       age: 28
      },
      {
        firstName: 'Felipe',
        lastName: 'Gregorio',
       age: 10
      },
      {
        firstName: 'Daniela',
        lastName: 'Noschang',
       age: 24
      },
      {
        firstName: 'Gagato',
        lastName: 'Absoluto',
       age: 1
      }
    ];

    return of (peopleArray)
  }

}
