import { Teacher } from './Teacher.model';

export interface Course {
    id?: number;
    name: string;
    description?: string; 
    teacher: Teacher; 
}