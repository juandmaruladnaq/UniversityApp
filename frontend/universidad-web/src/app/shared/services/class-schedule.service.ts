import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import {API_URL} from '../constants/api-url';
import { ClassSchedule } from '../models/ClassSchedule.model';

@Injectable({
  providedIn: 'root'
})
export class ClassScheduleService {
 private apiUrl =`${API_URL}/horarios-clase`


  constructor(private http: HttpClient) { }

  getAllClassSchedule(): Observable<ClassSchedule[]> {
    return this.http.get<ClassSchedule[]>(this.apiUrl);
  }
  getClassScheduleById(id: number): Observable<ClassSchedule> {
    return this.http.get<ClassSchedule>(`${this.apiUrl}/${id}`);
  }
  createClassSchedule(course: ClassSchedule): Observable<ClassSchedule> {
    return this.http.post<ClassSchedule>(this.apiUrl, course);
  }

  updateClassSchedule( id: number, course: Partial<ClassSchedule>): Observable<ClassSchedule> {
    return this.http.put<ClassSchedule>(`${this.apiUrl}/${id}`,course);
  }

  deleteClassSchedule(id: number): Observable<void> {
    return this.http.delete<void>(`${this.apiUrl}/${id}`);
  }
}
