import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import {API_URL} from '../constants/api-url';
import { Evaluation } from '../models/Evaluation';

@Injectable({
  providedIn: 'root'
})
export class EvaluationService {
  private evaluationsUrl = `${API_URL}/evaluaciones`;

  constructor(private http: HttpClient) { }

  getEvaluations(): Observable<Evaluation[]> {
    return this.http.get<Evaluation[]>(this.evaluationsUrl);
  }

  getEvaluation(id: number): Observable<Evaluation> {
    return this.http.get<Evaluation>(`${this.evaluationsUrl}/${id}`);
  }

  addEvaluation(evaluation: Evaluation): Observable<Evaluation> {
    return this.http.post<Evaluation>(this.evaluationsUrl, evaluation);
  }


  updateDepartment(id: number,evaluation: Partial<Evaluation>):Observable<Evaluation>{
    return this.http.patch<Evaluation>(`${this.evaluationsUrl}/${id}`,evaluation);
  }
  

  deleteEvaluation(id: number): Observable<{}> {
    return this.http.delete(`${this.evaluationsUrl}/${id}`);
  }
}
