import { PrismaClient } from '@prisma/client';
import * as bcrypt from 'bcrypt';

const prisma = new PrismaClient();

async function main() {
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

  console.log('✅ Usuario administrador creado:', admin);
}

main()
  .catch((e) => {
    console.error('❌ Error al ejecutar el seed:', e);
    process.exit(1);
  })
  .finally(async () => {
    await prisma.$disconnect();
  });
