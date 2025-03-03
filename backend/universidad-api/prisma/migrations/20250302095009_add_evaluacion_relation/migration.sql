/*
  Warnings:

  - You are about to drop the column `tipo` on the `Evaluacion` table. All the data in the column will be lost.
  - Added the required column `estudianteId` to the `Evaluacion` table without a default value. This is not possible if the table is not empty.
  - Added the required column `nota` to the `Evaluacion` table without a default value. This is not possible if the table is not empty.

*/
-- DropForeignKey
ALTER TABLE `Evaluacion` DROP FOREIGN KEY `Evaluacion_cursoId_fkey`;

-- DropIndex
DROP INDEX `Evaluacion_cursoId_fkey` ON `Evaluacion`;

-- AlterTable
ALTER TABLE `Evaluacion` DROP COLUMN `tipo`,
    ADD COLUMN `estudianteId` INTEGER NOT NULL,
    ADD COLUMN `nota` INTEGER NOT NULL;

-- AddForeignKey
ALTER TABLE `Evaluacion` ADD CONSTRAINT `Evaluacion_estudianteId_fkey` FOREIGN KEY (`estudianteId`) REFERENCES `Estudiante`(`id`) ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `Evaluacion` ADD CONSTRAINT `Evaluacion_cursoId_fkey` FOREIGN KEY (`cursoId`) REFERENCES `Curso`(`id`) ON DELETE CASCADE ON UPDATE CASCADE;
