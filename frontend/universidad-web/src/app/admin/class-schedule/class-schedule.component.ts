import { Component } from '@angular/core';
import { ClassSchedule } from '../../shared/models/ClassSchedule.model';
import { ClassScheduleService } from '../../shared/services/class-schedule.service';
import { CrudTemplateComponent } from '../../shared/components/crud-template/crud-template.component';

@Component({
  selector: 'app-class-schedule',
  imports: [CrudTemplateComponent],
  templateUrl: './class-schedule.component.html',
  styleUrl: './class-schedule.component.css'
})
export class ClassScheduleComponent {

  classSchedules : ClassSchedule[] =[];
  headersTable: string[] = ['aula', 'diaSemana','horaInicio','horaFin','cursoId'];

  constructor(private classScheduleService: ClassScheduleService) {}

  ngOnInit(): void {
    this.getClassSchedule();
  }

getClassSchedule(): void {
    this.classScheduleService
      .getAllClassSchedule()
      .subscribe((classSchedules) => (this.classSchedules = classSchedules));
  }

  createClassSchedule(entity:any): void {
    const classSchedule: ClassSchedule = {
      aula: entity.aula,
      diaSemana: entity.diaSemana,
      horaInicio: entity.horaInicio,
      horaFin: entity.horaFin,
      cursoId: parseInt(entity.cursoId),
    };
    this.classScheduleService
      .createClassSchedule(classSchedule)
      .subscribe(() => this.getClassSchedule());
  }

  deleteClassSchedule(classScheduleId: number): void {

    this.classScheduleService.deleteClassSchedule(classScheduleId).subscribe(() => {
      this.getClassSchedule();
    });
  }

  updateClassSchedule(classSchedule: ClassSchedule): void {
    this.classScheduleService
     .updateClassSchedule(classSchedule.id!, classSchedule)
     .subscribe(() => this.getClassSchedule());
  }
}
