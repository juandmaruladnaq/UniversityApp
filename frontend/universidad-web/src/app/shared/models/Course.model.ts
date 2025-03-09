
export interface Course {
    id?: number;
    nombre: string;
    descripcion: string; 
    profesorId?: number; 
    [key: string]: any;

}