import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import {API_URL} from '../constants/api-url';
import { User } from '../models/User.model';

@Injectable({
  providedIn: 'root'
})
export class UserService {
  private apiUrl =`${API_URL}/usuarios`

  constructor(private http: HttpClient) { }

  getUsers(): Observable<User[]> {
    return this.http.get<User[]>(this.apiUrl);
  }


  getUserById(id: number): Observable<User> {
    return this.http.get<User>(`${this.apiUrl}/${id}`);
  }


  createUser(user: User): Observable<User> {
    return this.http.post<User>(this.apiUrl, user);
  }

  updateUser(id: number,user: Partial<User>):Observable<User>{

    return this.http.put<User>(`${this.apiUrl}/${id}`,user);
  }
  

  deleteUser(id: number): Observable<void> {
    return this.http.delete<void>(`${this.apiUrl}/${id}`);
  }

  getCourseByUser(UserId: number): Observable<any[]> {
    return this.http.get<any[]>(`${this.apiUrl}/${UserId}/cursos`);
  }

  registerCourse(usuarioId: number, cursoId: number): Observable<any> {
    return this.http.post(`${this.apiUrl}/inscribir`, { usuarioId, cursoId });
  }
}
