import { Course } from './Course.model';
import { Student } from './Student.model';

export interface Evaluation {
    id?: number;
    date: Date;
    type: string;
    course: Course;   
    student: Student; 
    grade: number;    
}