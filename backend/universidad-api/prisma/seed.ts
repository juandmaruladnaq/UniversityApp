import { PrismaClient } from '@prisma/client';
import * as bcrypt from 'bcrypt';

const prisma = new PrismaClient();

async function main() {
  console.log('Seeding database...');

  // Poblar la tabla Departamento
  const departamentos = await prisma.departamento.createMany({
    data: [
      { nombre: 'Ingeniería' },
      { nombre: 'Ciencias' },
      { nombre: 'Humanidades' },
      { nombre: 'Artes' },
      { nombre: 'Economía' },
      { nombre: 'Derecho' },
      { nombre: 'Medicina' },
      { nombre: 'Ingeniería Civil' },
      { nombre: 'Ingeniería Mecánica' },
      { nombre: 'Ingeniería Eléctrica' },
      { nombre: 'Ingeniería Química' },
      { nombre: 'Ingeniería Informática' },
      { nombre: 'Ingeniería Aeroespacial' },
      { nombre: 'Ingeniería Ambiental' },
      { nombre: 'Ingeniería Biomédica' },
    ],
  });

  // Poblar la tabla Usuario (Profesor)
  const profesores = await prisma.usuario.createMany({
    data: [
      {
        nombre: 'Dr. Juan Pérez',
        email: 'juan.perez@example.com',
        password: await bcrypt.hash('password', 10),
        role: 'profesor',
        departamentoId: 1,
      },
      {
        nombre: 'Dra. Ana Gómez',
        email: 'ana.gomez@example.com',
        password: await bcrypt.hash('password', 10),
        role: 'profesor',
        departamentoId: 2,
      },
      {
        nombre: 'Dr. Carlos Ramírez',
        email: 'carlos.ramirez@example.com',
        password: await bcrypt.hash('password', 10),
        role: 'profesor',
        departamentoId: 3,
      },
      {
        nombre: 'Dra. María López',
        email: 'maria.lopez@example.com',
        password: await bcrypt.hash('password', 10),
        role: 'profesor',
        departamentoId: 4,
      },
      {
        nombre: 'Dr. José García',
        email: 'jose.garcia@example.com',
        password: await bcrypt.hash('password', 10),
        role: 'profesor',
        departamentoId: 5,
      },
      {
        nombre: 'Dra. Sofía Rodríguez',
        email: 'sofia.rodriguez@example.com',
        password: await bcrypt.hash('password', 10),
        role: 'profesor',
        departamentoId: 6,
      },
      {
        nombre: 'Dr. Luis Hernández',
        email: 'luis.hernandez@example.com',
        password: await bcrypt.hash('password', 10),
        role: 'profesor',
        departamentoId: 7,
      },
      {
        nombre: 'Dra. Laura Martínez',
        email: 'laura.martinez@example.com',
        password: await bcrypt.hash('password', 10),
        role: 'profesor',
        departamentoId: 8,
      },
      {
        nombre: 'Dr. Antonio Díaz',
        email: 'antonio.diaz@example.com',
        password: await bcrypt.hash('password', 10),
        role: 'profesor',
        departamentoId: 9,
      },
      {
        nombre: 'Dra. Elena Sánchez',
        email: 'elena.sanchez@example.com',
        password: await bcrypt.hash('password', 10),
        role: 'profesor',
        departamentoId: 10,
      },
      {
        nombre: 'Dr. Francisco Torres',
        email: 'francisco.torres@example.com',
        password: await bcrypt.hash('password', 10),
        role: 'profesor',
        departamentoId: 11,
      },
      {
        nombre: 'Dra. Cristina Navarro',
        email: 'cristina.navarro@example.com',
        password: await bcrypt.hash('password', 10),
        role: 'profesor',
        departamentoId: 12,
      },
      {
        nombre: 'Dr. Gabriel González',
        email: 'gabriel.gonzalez@example.com',
        password: await bcrypt.hash('password', 10),
        role: 'profesor',
        departamentoId: 13,
      },
      {
        nombre: 'Dra. Lucía Moreno',
        email: 'lucia.moreno@example.com',
        password: await bcrypt.hash('password', 10),
        role: 'profesor',
        departamentoId: 14,
      },
      {
        nombre: 'Dr. Daniel Fernández',
        email: 'daniel.fernandez@example.com',
        password: await bcrypt.hash('password', 10),
        role: 'profesor',
        departamentoId: 15,
      },
    ],
  });

  // Poblar la tabla Usuario (Estudiante)
  const estudiantes = await prisma.usuario.createMany({
    data: [
      {
        nombre: 'Carlos Ramírez',
        email: 'carlos.ramirez.estudiante@example.com',
        password: await bcrypt.hash('password', 10),
        role: 'estudiante',
      },
      {
        nombre: 'María López',
        email: 'maria.lopez.estudiante@example.com',
        password: await bcrypt.hash('password', 10),
        role: 'estudiante',
      },
      {
        nombre: 'Juan González',
        email: 'juan.gonzalez.estudiante@example.com',
        password: await bcrypt.hash('password', 10),
        role: 'estudiante',
      },
      {
        nombre: 'Sofía Rodríguez',
        email: 'sofia.rodriguez.estudiante@example.com',
        password: await bcrypt.hash('password', 10),
        role: 'estudiante',
      },
      {
        nombre: 'Luis Hernández',
        email: 'luis.hernandez.estudiante@example.com',
        password: await bcrypt.hash('password', 10),
        role: 'estudiante',
      },
      {
        nombre: 'Laura Martínez',
        email: 'laura.martinez.estudiante@example.com',
        password: await bcrypt.hash('password', 10),
        role: 'estudiante',
      },
      {
        nombre: 'Antonio Díaz',
        email: 'antonio.diaz.estudiante@example.com',
        password: await bcrypt.hash('password', 10),
        role: 'estudiante',
      },
      {
        nombre: 'Elena Sánchez',
        email: 'elena.sanchez.estudiante@example.com',
        password: await bcrypt.hash('password', 10),
        role: 'estudiante',
      },
      {
        nombre: 'Francisco Torres',
        email: 'francisco.torres.estudiante@example.com',
        password: await bcrypt.hash('password', 10),
        role: 'estudiante',
      },
      {
        nombre: 'Cristina Navarro',
        email: 'cristina.navarro.estudiante@example.com',
        password: await bcrypt.hash('password', 10),
        role: 'estudiante',
      },
      {
        nombre: 'Gabriel González',
        email: 'gabriel.gonzalez.estudiante@example.com',
        password: await bcrypt.hash('password', 10),
        role: 'estudiante',
      },
      {
        nombre: 'Lucía Moreno',
        email: 'lucia.moreno.estudiante@example.com',
        password: await bcrypt.hash('password', 10),
        role: 'estudiante',
      },
      {
        nombre: 'Daniel Fernández',
        email: 'daniel.fernandez.estudiante@example.com',
        password: await bcrypt.hash('password', 10),
        role: 'estudiante',
      },
      {
        nombre: 'Ana García',
        email: 'ana.garcia.estudiante@example.com',
        password: await bcrypt.hash('password', 10),
        role: 'estudiante',
      },
      {
        nombre: 'José Gómez',
        email: 'jose.gomez.estudiante@example.com',
        password: await bcrypt.hash('password', 10),
        role: 'estudiante',
      },
    ],
  });

  // Poblar la tabla Curso
  const cursos = await prisma.curso.createMany({
    data: [
      {
        nombre: 'Matemáticas Avanzadas',
        descripcion: 'Cálculo y álgebra',
        profesorId: 1,
      },
      {
        nombre: 'Física Cuántica',
        descripcion: 'Teoría y aplicaciones',
        profesorId: 2,
      },
      {
        nombre: 'Química Orgánica',
        descripcion: 'Reacciones y compuestos',
        profesorId: 3,
      },
      {
        nombre: 'Biología Molecular',
        descripcion: 'Genética y evolución',
        profesorId: 4,
      },
      {
        nombre: 'Inteligencia Artificial',
        descripcion: 'Aprendizaje automático',
        profesorId: 5,
      },
      {
        nombre: 'Desarrollo Web',
        descripcion: 'Frontend y backend',
        profesorId: 6,
      },
      {
        nombre: 'Redes de Computadoras',
        descripcion: 'Protocolos y seguridad',
        profesorId: 7,
      },
      {
        nombre: 'Sistemas Operativos',
        descripcion: 'Administración y configuración',
        profesorId: 8,
      },
      {
        nombre: 'Bases de Datos',
        descripcion: 'Diseño y administración',
        profesorId: 9,
      },
      {
        nombre: 'Ciberseguridad',
        descripcion: 'Análisis y prevención de riesgos',
        profesorId: 10,
      },
      {
        nombre: 'Economía Internacional',
        descripcion: 'Comercio y finanzas',
        profesorId: 11,
      },
      {
        nombre: 'Derecho Constitucional',
        descripcion: 'Análisis y aplicación',
        profesorId: 12,
      },
      {
        nombre: 'Medicina Preventiva',
        descripcion: 'Promoción de la salud',
        profesorId: 13,
      },
      {
        nombre: 'Ingeniería Aeroespacial',
        descripcion: 'Diseño y construcción de aeronaves',
        profesorId: 14,
      },
      {
        nombre: 'Ingeniería Biomédica',
        descripcion: 'Aplicaciones médicas',
        profesorId: 15,
      },
    ],
  });

  // Poblar la tabla Matricula
  const matriculas = await prisma.matricula.createMany({
    data: [
      { estudianteId: 1, cursoId: 1, fecha: new Date(), calificacion: 4.5 },
      { estudianteId: 2, cursoId: 2, fecha: new Date(), calificacion: 3.8 },
      { estudianteId: 3, cursoId: 3, fecha: new Date(), calificacion: 4.2 },
      { estudianteId: 4, cursoId: 4, fecha: new Date(), calificacion: 4.0 },
      { estudianteId: 5, cursoId: 5, fecha: new Date(), calificacion: 3.9 },
      { estudianteId: 6, cursoId: 6, fecha: new Date(), calificacion: 4.1 },
      { estudianteId: 7, cursoId: 7, fecha: new Date(), calificacion: 3.7 },
      { estudianteId: 8, cursoId: 8, fecha: new Date(), calificacion: 4.3 },
      { estudianteId: 9, cursoId: 9, fecha: new Date(), calificacion: 4.4 },
      { estudianteId: 10, cursoId: 10, fecha: new Date(), calificacion: 3.6 },
      { estudianteId: 11, cursoId: 11, fecha: new Date(), calificacion: 4.6 },
      { estudianteId: 12, cursoId: 12, fecha: new Date(), calificacion: 3.5 },
      { estudianteId: 13, cursoId: 13, fecha: new Date(), calificacion: 4.7 },
      { estudianteId: 14, cursoId: 14, fecha: new Date(), calificacion: 3.4 },
      { estudianteId: 15, cursoId: 15, fecha: new Date(), calificacion: 4.8 },
    ],
  });

  // Poblar la tabla Evaluación
  const evaluaciones = await prisma.evaluacion.createMany({
    data: [
      { fecha: new Date(), cursoId: 1, estudianteId: 1, nota: 90 },
      { fecha: new Date(), cursoId: 2, estudianteId: 2, nota: 85 },
      { fecha: new Date(), cursoId: 3, estudianteId: 3, nota: 88 },
      { fecha: new Date(), cursoId: 4, estudianteId: 4, nota: 92 },
      { fecha: new Date(), cursoId: 5, estudianteId: 5, nota: 89 },
      { fecha: new Date(), cursoId: 6, estudianteId: 6, nota: 86 },
      { fecha: new Date(), cursoId: 7, estudianteId: 7, nota: 91 },
      { fecha: new Date(), cursoId: 8, estudianteId: 8, nota: 87 },
      { fecha: new Date(), cursoId: 9, estudianteId: 9, nota: 93 },
      { fecha: new Date(), cursoId: 10, estudianteId: 10, nota: 84 },
      { fecha: new Date(), cursoId: 11, estudianteId: 11, nota: 95 },
      { fecha: new Date(), cursoId: 12, estudianteId: 12, nota: 83 },
      { fecha: new Date(), cursoId: 13, estudianteId: 13, nota: 96 },
      { fecha: new Date(), cursoId: 14, estudianteId: 14, nota: 82 },
      { fecha: new Date(), cursoId: 15, estudianteId: 15, nota: 97 },
    ],
  });

  // Crear usuario administrador
  const hashedPassword = await bcrypt.hash('admin123', 10);
  const admin = await prisma.usuario.upsert({
    where: { email: 'admin@example.com' },
    update: {},
    create: {
      nombre: 'Administrador',
      email: 'admin@example.com',
      password: hashedPassword,
      role: 'admin',
    },
  });

  console.log('Seeding completed!');
  console.log('✅ Usuario administrador creado:', admin);
}

main().catch((error) => {
  console.error(' Error al ejecutar el seed:', error);
});
