import { Routes } from '@angular/router';
import { LoginComponent } from './auth/login/login.component';
import { RegisterComponent } from './auth/register/register.component';
import { HomeComponent } from './home/home.component';
import { CoursesComponent as AdminCoursesComponent } from './admin/courses/courses.component';
import { TeachersComponent } from './admin/teachers/teachers.component';
import { StudentsComponent } from './admin/students/students.component';
import { CoursesComponent as StudentCoursesComponent } from './student/courses/courses.component';
import { EnrollComponent } from './student/enroll/enroll.component';
import { MyCoursesComponent } from './professor/my-courses/my-courses.component';
import { EvaluationsComponent } from './professor/evaluations/evaluations.component';
import { DepartmentComponent } from './admin/department/department.component';

export const routes: Routes = [
    { path: '', component: HomeComponent },
    { path: 'auth/login', component: LoginComponent },
    { path: 'auth/register', component: RegisterComponent },
    { path: 'admin/courses', component: AdminCoursesComponent },
    { path: 'admin/teachers', component: TeachersComponent },
    { path: 'admin/students', component: StudentsComponent },
    { path: 'student/courses', component: StudentCoursesComponent },
    { path: 'student/enroll', component: EnrollComponent },
    { path: 'professor/my-courses', component: MyCoursesComponent },
    { path: 'professor/evaluations', component: EvaluationsComponent },
    {path: 'admin/departments', component: DepartmentComponent },
    { path: '**', redirectTo: '' },
  ];