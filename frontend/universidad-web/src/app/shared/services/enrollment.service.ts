import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import {API_URL} from '../constants/api-url';
import { Enrollment } from  '../models/Enrollment.model'

@Injectable({
  providedIn: 'root'
})
export class EnrollmentService {
  private apiUrl =`${API_URL}/matriculas`


  constructor(private http: HttpClient) { }

  getEnrollments(): Observable<Enrollment[]> {
    return this.http.get<Enrollment[]>(this.apiUrl);
  }
  getEnrollment(id: number): Observable<Enrollment> {
    return this.http.get<Enrollment>(`${this.apiUrl}/${id}`);
  }
  addEnrollment(enrollment: Enrollment): Observable<Enrollment> {
    return this.http.post<Enrollment>(this.apiUrl, enrollment);
  }
  updateDepartment(id: number,enrollment: Partial<Enrollment>):Observable<Enrollment>{
    return this.http.patch<Enrollment>(`${this.apiUrl}/${id}`,enrollment);
  }
  deleteEnrollment(id: number): Observable<Enrollment> {
    return this.http.delete<Enrollment>(`${this.apiUrl}/${id}`);
  }

}
