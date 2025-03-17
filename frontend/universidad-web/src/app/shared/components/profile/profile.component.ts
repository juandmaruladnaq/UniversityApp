import { Component, OnInit } from '@angular/core';
import { AuthService } from '../../services/auth.service';
import { UserService } from '../../services/user.service';
import { CommonModule } from '@angular/common'; 
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-profile',
  imports: [CommonModule, FormsModule],
  templateUrl: './profile.component.html',
  styleUrl: './profile.component.css'
})
export class ProfileComponent  implements OnInit{
  user: any = {};
  isEditing: boolean = false;
  selectedFile: File | null = null;
  previewImage: string | ArrayBuffer | null = null;

  constructor(private authService: AuthService, private userService: UserService) {}

  ngOnInit(): void {
    this.loadUserProfile();
  }

  loadUserProfile(): void {
    const storedUser = JSON.parse(localStorage.getItem('user') || '{}');
    if (storedUser?.id) {
      this.user = storedUser;
      this.previewImage = this.user.photoUrl || 'assets/default-avatar.png';
    }
  }

  enableEdit(): void {
    this.isEditing = true;
  }

  saveProfile(): void {
    this.userService.updateUserProfile(this.user.id, this.user).subscribe({
      next: (updatedUser) => {
        this.user = updatedUser;
        localStorage.setItem('user', JSON.stringify(updatedUser));
        this.isEditing = false;
        alert('Perfil actualizado con éxito.');
      },
      error: (err) => {
        console.error('Error al actualizar perfil:', err);
      }
    });
  }

  cancelEdit(): void {
    this.isEditing = false;
    this.loadUserProfile();
  }

  onFileSelected(event: any): void {
    const file = event.target.files[0];
    if (file) {
      this.selectedFile = file;

      const reader = new FileReader();
      reader.onload = (e) => {
        this.previewImage = e.target?.result || null;
      };
      reader.readAsDataURL(file);
    }
  }
}