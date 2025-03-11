import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { BehaviorSubject, Observable } from 'rxjs';
import { tap } from 'rxjs/operators';
import { User } from '../models/User.model';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  
  private apiUrl = 'http://localhost:3000/auth'; 
  private userSubject = new BehaviorSubject<User | null>(null);
  user$ = this.userSubject.asObservable();

  constructor(private http: HttpClient) {
    this.loadUser();
  }

  private loadUser() {
    // Verifica si estamos en un entorno de navegador antes de usar localStorage
    if (typeof window !== 'undefined' && window.localStorage) {
      const storedUser = localStorage.getItem('user');
      if (storedUser) {
        this.userSubject.next(JSON.parse(storedUser));
      }
    }
  }

  login(email: string, password: string): Observable<{ access_token: string; usuario: User }> {
    return this.http.post<{ access_token: string; usuario: User }>(`${this.apiUrl}/login`, { email, password }).pipe(
      tap(response => {
        // Verifica si estamos en el navegador antes de acceder a localStorage
        if (typeof window !== 'undefined' && window.localStorage) {
          localStorage.setItem('user', JSON.stringify(response.usuario));
          localStorage.setItem('token', response.access_token);
        }
        this.userSubject.next(response.usuario);
      })
    );
  }

  register(user: { nombre: string; email: string; password: string; role: string }) {
    return this.http.post(`${this.apiUrl}/register`, user);
  }

  logout() {
    // Verifica si estamos en el navegador antes de acceder a localStorage
    if (typeof window !== 'undefined' && window.localStorage) {
      localStorage.removeItem('user');
      localStorage.removeItem('token');
    }
    this.userSubject.next(null);
  }

  getUserRole(): string | null {
    return this.userSubject.value?.role || null;
  }

  getToken(): string | null {
    // Verifica si estamos en el navegador antes de acceder a localStorage
    if (typeof window !== 'undefined' && window.localStorage) {
      return localStorage.getItem('token');
    }
    return null;
  }
}