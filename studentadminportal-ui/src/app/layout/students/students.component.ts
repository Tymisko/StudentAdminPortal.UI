import { Component, OnInit, ViewChild } from '@angular/core';
import { onErrorResumeNext } from 'rxjs';
import { StudentService } from './student.service';
import { Student } from 'src/app/models/ui-models/student.model';
import { MatTable, MatTableDataSource } from '@angular/material/table';
import { MatPaginator } from '@angular/material/paginator';

@Component({
  selector: 'app-students',
  templateUrl: './students.component.html',
  styleUrls: ['./students.component.css'],
})
export class StudentsComponent implements OnInit {
  students: Student[] = [];
  displayedColumns: string[] = [
    'firstName',
    'lastName',
    'dateOfBirth',
    'email',
    'mobile',
    'gender',
  ];

  dataSource: MatTableDataSource<Student> = new MatTableDataSource<Student>();
  @ViewChild(MatPaginator) matPaginator!: MatPaginator;

  constructor(private studentService: StudentService) {}

  ngOnInit(): void {
    // Fetch the students
    this.studentService.getStudents().subscribe(
      (successResponse) => {
        this.students = successResponse;
        this.dataSource = new MatTableDataSource<Student>(this.students);

        if (this.matPaginator) {
          this.dataSource.paginator = this.matPaginator;
        }
      },
      (errorResponse) => {
        console.log(errorResponse);
      }
    );
  }
}
