
export interface Teacher {
    id?: number;
    nombre: string;
    fechaContratacion: Date;
    departamentoId: number;
    [key: string]: any; 
}