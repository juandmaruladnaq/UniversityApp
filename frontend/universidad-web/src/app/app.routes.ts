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
import { authGuard } from './shared/guards/auth.guard';
import { ProfileComponent } from './auth/profile/profile/profile.component';
import { UsersComponent } from './admin/users/users.component';

export const routes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'auth/login', component: LoginComponent },
  { path: 'auth/register', component: RegisterComponent },
  { path: 'profile', component: ProfileComponent, canActivate: [authGuard] },
  { path: 'admin/courses', component: AdminCoursesComponent, canActivate: [authGuard], data: { roles: ['admin'] }},
  { path: 'admin/teachers', component: TeachersComponent, canActivate: [authGuard], data: { roles: ['admin'] }},
  { path: 'admin/students', component: StudentsComponent, canActivate: [authGuard], data: { roles: ['admin'] }},
  { path: 'admin/users', component: UsersComponent, canActivate: [authGuard], data: { roles: ['admin'] }},
  { path: 'student/courses', component: StudentCoursesComponent, canActivate: [authGuard], data: { roles: ['estudiante'] }},
  { path: 'student/enroll', component: EnrollComponent, canActivate: [authGuard], data: { roles: ['estudiante'] }},
  { path: 'professor/my-courses', component: MyCoursesComponent, canActivate: [authGuard], data: { roles: ['profesor'] }},
  { path: 'professor/evaluations', component: EvaluationsComponent, canActivate: [authGuard], data: { roles: ['profesor'] }},
  { path: 'admin/departments', component: DepartmentComponent, canActivate: [authGuard], data: { roles: ['admin'] }},
  { path: '**', redirectTo: '' },
];