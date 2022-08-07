import { Component, OnInit } from '@angular/core';
import { onErrorResumeNext } from 'rxjs';
import { StudentService } from './student.service';

@Component({
  selector: 'app-students',
  templateUrl: './students.component.html',
  styleUrls: ['./students.component.css'],
})
export class StudentsComponent implements OnInit {
  constructor(private studentService: StudentService) {}

  ngOnInit(): void {
    // Fetch the students
    this.studentService.getStudents().subscribe(
      (successResponse) => {
        console.log(successResponse);
      },
      (errorResponse) => {
        console.log(errorResponse);
      }
    );
  }
}
