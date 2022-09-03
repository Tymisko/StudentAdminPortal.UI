import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Student } from 'src/app/models/api-models/student.model';

@Injectable({
  providedIn: 'root',
})
export class StudentService {
  private baseAPIUrl = 'https://localhost:44359';

  constructor(private httpClient: HttpClient) {}

  getStudents(): Observable<Student[]> {
    return this.httpClient.get<Student[]>(this.baseAPIUrl + '/Students');
  }
}
