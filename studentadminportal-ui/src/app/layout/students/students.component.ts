import { Component, OnInit } from '@angular/core';
import { onErrorResumeNext } from 'rxjs';
import { StudentService } from './student.service';
import { Student } from 'src/app/models/ui-models/student.model';

@Component({
  selector: 'app-students',
  templateUrl: './students.component.html',
  styleUrls: ['./students.component.css'],
})
export class StudentsComponent implements OnInit {
  students: Student[] = [];

  constructor(private studentService: StudentService) {}

  ngOnInit(): void {
    // Fetch the students
    this.studentService.getStudents().subscribe(
      (successResponse) => {
        this.students = successResponse;
      },
      (errorResponse) => {
        console.log(errorResponse);
      }
    );
  }
}
