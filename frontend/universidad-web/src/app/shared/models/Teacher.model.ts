import { Department } from './Department.model';

export interface Teacher {
    id?: number;
    name: string;
    dateOfHiring: Date;
    department: Department; 
}