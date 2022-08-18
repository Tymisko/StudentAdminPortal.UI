import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class StudentService {
  private baseAPIUrl = 'https://localhost:44359';

  constructor(private httpClient: HttpClient) {}

  getStudents(): Observable<any> {
    return this.httpClient.get<any>(this.baseAPIUrl + '/Students');
  }
}
