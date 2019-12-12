import {Injectable} from '@angular/core';
import {Student} from '../models/student.model';

@Injectable({
        providedIn: 'root'
})
export class StudentsService {

        private students: Student[] = [
                {
                        id: 0,
                        name: 'Robert',
                        surname: 'Dupont',
                        age: 99,
                        biography: 'Lorem ipsum blablabl',
                        city: 'Metz'
                },
                {
                        id: 1,
                        name: 'Roberti',
                        surname: 'Sanchez',
                        age: 99,
                        biography: 'Lorem ipsum blablabl',
                        city: 'Metz'
                },
                {
                        id: 2,
                        name: 'Roberto',
                        surname: 'Jones',
                        age: 99,
                        biography: 'Lorem ipsum blablabl',
                        city: 'Metz'
                },
                {
                        id: 3,
                        name: 'Roberta',
                        surname: 'XXX',
                        age: 99,
                        biography: 'Lorem ipsum blablabl',
                        city: 'Metz'
                }
        ];

        constructor() {
        }

        getAllStudents(): Student[] {
                return this.students;
        }

        getOneStudent(id: number) {
                return this.students.find(student => student.id === id);
        }
}
