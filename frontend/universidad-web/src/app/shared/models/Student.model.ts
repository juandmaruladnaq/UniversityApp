// src/app/models/student.model.ts
export interface Student {
    id?: number;
    nombre: string;
    fechaNacimiento:String;
    [key: string]: any;

}