import {HttpClient} from '@angular/common/http';
import {Injectable} from '@angular/core';
import {Observable} from 'rxjs';
import {Student} from 'src/app/models/api-models/student.model';
import {UpdateStudentRequest} from "../models/api-models/update-student-request.model";
import {AddStudentRequest} from "../models/api-models/add-student-request-model";
import {environment} from "../../environments/environment";

@Injectable({
  providedIn: 'root',
})
export class StudentService {
  private baseAPIUrl = environment.baseApiUrl;

  constructor(private httpClient: HttpClient) {
  }

  getStudents(): Observable<Student[]> {
    return this.httpClient.get<Student[]>(this.baseAPIUrl + '/Students');
  }

  getStudent(studentId: string): Observable<Student> {
    return this.httpClient.get<Student>(
      this.baseAPIUrl + '/Students/' + studentId
    );
  }

  updateStudent(studentId: string, studentRequest: Student): Observable<Student> {
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

  deleteStudent(StudentId: string): Observable<Student> {
    return this.httpClient.delete<Student>(this.baseAPIUrl + `/Students/` + StudentId);
  }

  addStudent(studentRequest: Student): Observable<Student> {
    const addStudentRequest: AddStudentRequest = {
      firstName: studentRequest.firstName,
      lastName: studentRequest.lastName,
      dateOfBirth: studentRequest.dateOfBirth,
      email: studentRequest.email,
      mobile: studentRequest.mobile,
      genderId: studentRequest.genderId,
      physicalAddress: studentRequest.address.physicalAddress,
      postalAddress: studentRequest.address.postalAddress
    }

    return this.httpClient.post<Student>(this.baseAPIUrl + '/Students/add', addStudentRequest);
  }

  uploadImage(studentId: string, file: File): Observable<any> {
    const formData = new FormData();
    formData.append("profileImage", file)

    return this.httpClient.post(this.baseAPIUrl + '/students/' + studentId + '/upload-image',
      formData,
      {responseType: 'text'});
  }

  getImagePath(relativePath: string) {
    return `${this.baseAPIUrl}/${relativePath}`;
  }
}
