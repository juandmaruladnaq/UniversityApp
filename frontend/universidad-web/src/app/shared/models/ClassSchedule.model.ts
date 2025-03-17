export interface ClassSchedule {
    id?: number;
    aula: string;
    diaSemana: string;
    horaInicio: string;
    horaFin: string;
    cursoId: number;
    [key: string]: any;
}