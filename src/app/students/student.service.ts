import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Student } from 'src/app/models/api-models/student.model';
import {UpdateStudentRequest } from "../models/api-models/update-student-request.model";

@Injectable({
  providedIn: 'root',
})
export class StudentService {
  private baseAPIUrl = 'https://localhost:5001';

  constructor(private httpClient: HttpClient) {}

  getStudents(): Observable<Student[]> {
    return this.httpClient.get<Student[]>(this.baseAPIUrl + '/Students');
  }

  getStudent(studentId: string): Observable<Student> {
    return this.httpClient.get<Student>(
      this.baseAPIUrl + '/Students/' + studentId
    );
  }

  updateStudent(studentId: string, studentRequest: Student) : Observable<Student> {
    const updateStudentRequest: UpdateStudentRequest = {
      firstName: studentRequest.firstName,
      lastName: studentRequest.lastName,
      dateOfBirth: studentRequest.dateOfBirth,
      email: studentRequest.email,
      mobile: studentRequest.mobile,
      genderId: studentRequest.genderId,
      physicalAddress: studentRequest.address.physicalAddress,
      postalAddress: studentRequest.address.postalAddress,
    }

    return this.httpClient.put<Student>(this.baseAPIUrl + '/Students/' + studentId, updateStudentRequest);
  }

}
