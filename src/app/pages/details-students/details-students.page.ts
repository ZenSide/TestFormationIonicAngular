import {Component, OnInit} from '@angular/core';
import {Student} from '../../models/student.model';
import {ActivatedRoute} from '@angular/router';
import {StudentsService} from '../../services/students.service';
import {SocialSharing} from '@ionic-native/social-sharing/ngx';

@Component({
        selector: 'app-details-students',
        templateUrl: './details-students.page.html',
        styleUrls: ['./details-students.page.scss'],
})
export class DetailsStudentsPage implements OnInit {

        student: Student;

        constructor(private route: ActivatedRoute,
                    private socialSharingService: SocialSharing,
                    private studentService: StudentsService) {
        }

        ngOnInit() {
                const id: number = parseInt(this.route.snapshot.params.id, 10);
                this.student = this.studentService.getOneStudent(id);
        }

        share() {
                this.socialSharingService
                        .share('Découvez vite ce superbe étudiant de '
                                + this.student.age
                                + ' ans. Youpi bonjour '
                                + this.student.surname);
        }
}

