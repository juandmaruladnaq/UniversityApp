import { PrismaClient } from '@prisma/client';

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

  // Poblar la tabla Profesor
  const profesores = await prisma.profesor.createMany({
    data: [
      {
        nombre: 'Dr. Juan Pérez',
        fechaContratacion: new Date(),
        departamentoId: 1,
      },
      {
        nombre: 'Dra. Ana Gómez',
        fechaContratacion: new Date(),
        departamentoId: 2,
      },
      {
        nombre: 'Dr. Carlos Ramírez',
        fechaContratacion: new Date(),
        departamentoId: 3,
      },
      {
        nombre: 'Dra. María López',
        fechaContratacion: new Date(),
        departamentoId: 4,
      },
      {
        nombre: 'Dr. José García',
        fechaContratacion: new Date(),
        departamentoId: 5,
      },
      {
        nombre: 'Dra. Sofía Rodríguez',
        fechaContratacion: new Date(),
        departamentoId: 6,
      },
      {
        nombre: 'Dr. Luis Hernández',
        fechaContratacion: new Date(),
        departamentoId: 7,
      },
      {
        nombre: 'Dra. Laura Martínez',
        fechaContratacion: new Date(),
        departamentoId: 8,
      },
      {
        nombre: 'Dr. Antonio Díaz',
        fechaContratacion: new Date(),
        departamentoId: 9,
      },
      {
        nombre: 'Dra. Elena Sánchez',
        fechaContratacion: new Date(),
        departamentoId: 10,
      },
      {
        nombre: 'Dr. Francisco Torres',
        fechaContratacion: new Date(),
        departamentoId: 11,
      },
      {
        nombre: 'Dra. Cristina Navarro',
        fechaContratacion: new Date(),
        departamentoId: 12,
      },
      {
        nombre: 'Dr. Gabriel González',
        fechaContratacion: new Date(),
        departamentoId: 13,
      },
      {
        nombre: 'Dra. Lucía Moreno',
        fechaContratacion: new Date(),
        departamentoId: 14,
      },
      {
        nombre: 'Dr. Daniel Fernández',
        fechaContratacion: new Date(),
        departamentoId: 15,
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

  // Poblar la tabla Estudiante
  const estudiantes = await prisma.estudiante.createMany({
    data: [
      { nombre: 'Carlos Ramírez', fechaNacimiento: new Date('2000-05-20') },
      { nombre: 'María López', fechaNacimiento: new Date('2002-09-15') },
      { nombre: 'Juan González', fechaNacimiento: new Date('2001-02-10') },
      { nombre: 'Sofía Rodríguez', fechaNacimiento: new Date('2003-07-25') },
      { nombre: 'Luis Hernández', fechaNacimiento: new Date('2000-11-05') },
      { nombre: 'Laura Martínez', fechaNacimiento: new Date('2002-04-20') },
      { nombre: 'Antonio Díaz', fechaNacimiento: new Date('2001-08-15') },
      { nombre: 'Elena Sánchez', fechaNacimiento: new Date('2003-01-10') },
      { nombre: 'Francisco Torres', fechaNacimiento: new Date('2000-06-25') },
      { nombre: 'Cristina Navarro', fechaNacimiento: new Date('2002-03-05') },
      { nombre: 'Gabriel González', fechaNacimiento: new Date('2001-09-20') },
      { nombre: 'Lucía Moreno', fechaNacimiento: new Date('2003-05-15') },
      { nombre: 'Daniel Fernández', fechaNacimiento: new Date('2000-10-10') },
      { nombre: 'Ana García', fechaNacimiento: new Date('2002-07-25') },
      { nombre: 'José Gómez', fechaNacimiento: new Date('2001-04-20') },
    ],
  });

  // Poblar la tabla Matrícula
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

  console.log('Seeding completed!');
}

main()
  .catch((error) => {
    console.error(error);
    process.exit(1);
  })
  .finally(async () => {
    await prisma.$disconnect();
  });
