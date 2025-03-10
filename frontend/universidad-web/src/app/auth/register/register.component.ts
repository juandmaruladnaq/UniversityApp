import { Component ,OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators,ReactiveFormsModule  } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { Router } from '@angular/router';

@Component({
  selector: 'app-register',
  imports: [ReactiveFormsModule,CommonModule],
  templateUrl: './register.component.html',
  styleUrl: './register.component.css'
})
export class RegisterComponent implements OnInit {
  formulario!: FormGroup;

  constructor(private formBuilder: FormBuilder ,private router: Router) {}

  ngOnInit(): void {
    this.formulario = this.formBuilder.group({
      nombre: ['', Validators.required],
      email: ['', [Validators.required, Validators.email]],
      password: ['', [Validators.required, Validators.minLength(6)]]
    });
  }

  enviarFormulario(): void {
    if (this.formulario.valid) {
      console.log('Formulario enviado:', this.formulario.value);
      

      this.formulario.reset();
      this.router.navigate(['/auth/login']);

    } else {
      console.log('Formulario inválido');
    }
  }
}