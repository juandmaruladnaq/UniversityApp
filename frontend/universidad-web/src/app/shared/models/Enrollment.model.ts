import { Student } from './Student.model';
import { Course } from './Course.model';

export interface Enrollment {
    id?: number;
    student: Student;
    course: Course;   
    date: Date;
    grade?: number; 
}