import { Component } from '@angular/core';
import { AuthService } from '../../../shared/services/auth.service';
import { User } from '../../../shared/models/User.model';

@Component({
  selector: 'app-profile',
  imports: [],
  templateUrl: './profile.component.html',
  styleUrl: './profile.component.css'
})
export class ProfileComponent {

user: User | null = null;

  constructor(private authService: AuthService) {
    this.authService.user$.subscribe(user => {
      this.user = user;
    });
  }

  logout() {
    this.authService.logout();
  }
}