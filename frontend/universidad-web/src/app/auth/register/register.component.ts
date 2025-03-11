import { Component ,OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators,ReactiveFormsModule  } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { Router } from '@angular/router';
import { AuthService } from '../../shared/services/auth.service';

@Component({
  selector: 'app-register',
  imports: [ReactiveFormsModule,CommonModule],
  templateUrl: './register.component.html',
  styleUrl: './register.component.css'
})
export class RegisterComponent implements OnInit {
  formulario!: FormGroup;

  constructor(private formBuilder: FormBuilder, private authService: AuthService, private router: Router) {}

  ngOnInit(): void {
    this.formulario = this.formBuilder.group({
      nombre: ['', Validators.required],
      email: ['', [Validators.required, Validators.email]],
      password: ['', [Validators.required, Validators.minLength(6)]],
      role: ['estudiante', Validators.required]
    });
  }

  enviarFormulario(): void {
    if (this.formulario.valid) {
      this.authService.register(this.formulario.value).subscribe({
        next: () => {
          alert('Registro exitoso');
          this.router.navigate(['/auth/login']);
        },
        error: (err) => alert(`Error: ${err.error.message}`)
      });
    } else {
      alert('Formulario inválido');
    }
  }
}