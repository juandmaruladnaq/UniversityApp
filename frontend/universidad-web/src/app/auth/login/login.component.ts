import { Component ,OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators,ReactiveFormsModule  } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  imports: [ReactiveFormsModule,CommonModule],
  templateUrl: './login.component.html',
  styleUrl: './login.component.css'
})
export class LoginComponent implements OnInit {
  formulario!: FormGroup;

  constructor(private formBuilder: FormBuilder, private router: Router) {}

  ngOnInit(): void {
    this.formulario = this.formBuilder.group({
      email: ['', [Validators.required, Validators.email]],
      password: ['', [Validators.required]]
    });
  }

  enviarFormulario(): void {
    if (this.formulario.valid) {
      console.log('Formulario enviado:', this.formulario.value);
      
      // Aquí puedes manejar la lógica de autenticación (por ejemplo, llamar a un servicio de autenticación)

      // Redirigir a la página de inicio después de iniciar sesión
      this.router.navigate(['/auth/dashboard']); // Cambia esto a la ruta deseada

      // Limpiar el formulario
      this.formulario.reset();
    } else {
      console.log('Formulario inválido');
    }
  }
}