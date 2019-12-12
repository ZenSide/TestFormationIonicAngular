import {Component, OnInit} from '@angular/core';
import {StudentsService} from '../../services/students.service';
import {Student} from '../../models/student.model';

@Component({
        selector: 'app-liste-students',
        templateUrl: './liste-students.page.html',
        styleUrls: ['./liste-students.page.scss'],
})
export class ListeStudentsPage implements OnInit {

        students: Student[] = [];

        constructor(private studentService: StudentsService) {
        }

        ngOnInit() {
                this.students = this.studentService.getAllStudents();
        }
}
