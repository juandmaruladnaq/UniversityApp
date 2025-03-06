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
    ],
  });

  // Poblar la tabla Estudiante
  const estudiantes = await prisma.estudiante.createMany({
    data: [
      { nombre: 'Carlos Ramírez', fechaNacimiento: new Date('2000-05-20') },
      { nombre: 'María López', fechaNacimiento: new Date('2002-09-15') },
    ],
  });

  // Poblar la tabla Matrícula
  const matriculas = await prisma.matricula.createMany({
    data: [
      { estudianteId: 1, cursoId: 1, fecha: new Date(), calificacion: 4.5 },
      { estudianteId: 2, cursoId: 2, fecha: new Date(), calificacion: 3.8 },
    ],
  });

  // Poblar la tabla Evaluación
  const evaluaciones = await prisma.evaluacion.createMany({
    data: [
      { fecha: new Date(), cursoId: 1, estudianteId: 1, nota: 90 },
      { fecha: new Date(), cursoId: 2, estudianteId: 2, nota: 85 },
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
