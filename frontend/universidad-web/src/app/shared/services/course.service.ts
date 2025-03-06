import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import {API_URL} from '../constants/api-url';
import { Course } from '../models/Course.model';
@Injectable({
  providedIn: 'root'
})
export class CourseService {
  private apiUrl =`${API_URL}/departamentos`


  constructor(private http: HttpClient) { }

  getAllCourses(): Observable<Course[]> {
    return this.http.get<Course[]>(this.apiUrl);
  }
  getCourseById(id: number): Observable<Course> {
    return this.http.get<Course>(`${this.apiUrl}/${id}`);
  }
  createCourse(course: Course): Observable<Course> {
    return this.http.post<Course>(this.apiUrl, course);
  }

  updateCourse( id: number, course: Partial<Course>): Observable<Course> {
    return this.http.patch<Course>(`${this.apiUrl}/${id}`,course);
  }
  deleteCourse(id: number): Observable<void> {
    return this.http.delete<void>(`${this.apiUrl}/${id}`);
  }
}
