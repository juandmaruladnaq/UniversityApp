import { Component } from '@angular/core';
import { User } from '../../shared/models/User.model';
import { UserService } from '../../shared/services/user.service';
import { CrudTemplateComponent } from '../../shared/components/crud-template/crud-template.component';
@Component({
  selector: 'app-users',
  imports: [CrudTemplateComponent],
  templateUrl: './users.component.html',
  styleUrl: './users.component.css'
})
export class UsersComponent {
 users: User[] = [];
  headersTable: string[] = ['id', 'nombre' ,'email', 'password', 'role'];
  constructor(private userService: UserService) {}

  ngOnInit(): void {
    this.getUsers();
  }

  getUsers(): void {
    this.userService
      .getUsers()
      .subscribe((users) => (this.users = users));
  }

  createUser(entity: any): void {
    const user: User = {
      nombre: entity.nombre,
      email: entity.email,
      password: entity.password,
      role: entity.role
    };
    this.userService
      .createUser(user)
      .subscribe(() => this.getUsers());
  }

  deleteUser(userId: number): void {
    console.log('eliminando departamento con ID:', userId);

    this.userService.deleteUser(userId).subscribe(() => {
      this.getUsers();
    });
  }

  updateUser(user: User): void {
    this.userService
     .updateUser(user.id!, user)
     .subscribe(() => this.getUsers());
  }

  
}

