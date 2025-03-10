/*
  Warnings:

  - You are about to drop the `Estudiante` table. If the table is not empty, all the data it contains will be lost.
  - You are about to drop the `Profesor` table. If the table is not empty, all the data it contains will be lost.

*/
-- DropForeignKey
ALTER TABLE `Curso` DROP FOREIGN KEY `Curso_profesorId_fkey`;

-- DropForeignKey
ALTER TABLE `Evaluacion` DROP FOREIGN KEY `Evaluacion_estudianteId_fkey`;

-- DropForeignKey
ALTER TABLE `Matricula` DROP FOREIGN KEY `Matricula_estudianteId_fkey`;

-- DropForeignKey
ALTER TABLE `Profesor` DROP FOREIGN KEY `Profesor_departamentoId_fkey`;

-- DropTable
DROP TABLE `Estudiante`;

-- DropTable
DROP TABLE `Profesor`;

-- CreateTable
CREATE TABLE `Usuario` (
    `id` INTEGER NOT NULL AUTO_INCREMENT,
    `nombre` VARCHAR(191) NOT NULL,
    `email` VARCHAR(191) NOT NULL,
    `password` VARCHAR(191) NOT NULL,
    `role` VARCHAR(191) NOT NULL DEFAULT 'estudiante',
    `departamentoId` INTEGER NULL,

    UNIQUE INDEX `Usuario_email_key`(`email`),
    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- AddForeignKey
ALTER TABLE `Usuario` ADD CONSTRAINT `Usuario_departamentoId_fkey` FOREIGN KEY (`departamentoId`) REFERENCES `Departamento`(`id`) ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `Curso` ADD CONSTRAINT `Curso_profesorId_fkey` FOREIGN KEY (`profesorId`) REFERENCES `Usuario`(`id`) ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `Matricula` ADD CONSTRAINT `Matricula_estudianteId_fkey` FOREIGN KEY (`estudianteId`) REFERENCES `Usuario`(`id`) ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `Evaluacion` ADD CONSTRAINT `Evaluacion_estudianteId_fkey` FOREIGN KEY (`estudianteId`) REFERENCES `Usuario`(`id`) ON DELETE CASCADE ON UPDATE CASCADE;
