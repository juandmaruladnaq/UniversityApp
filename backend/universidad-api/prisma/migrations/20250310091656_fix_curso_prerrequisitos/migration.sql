-- CreateTable
CREATE TABLE `CursoPrerequisito` (
    `cursoId` INTEGER NOT NULL,
    `prerrequisitoId` INTEGER NOT NULL,

    PRIMARY KEY (`cursoId`, `prerrequisitoId`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- AddForeignKey
ALTER TABLE `CursoPrerequisito` ADD CONSTRAINT `CursoPrerequisito_cursoId_fkey` FOREIGN KEY (`cursoId`) REFERENCES `Curso`(`id`) ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `CursoPrerequisito` ADD CONSTRAINT `CursoPrerequisito_prerrequisitoId_fkey` FOREIGN KEY (`prerrequisitoId`) REFERENCES `Curso`(`id`) ON DELETE RESTRICT ON UPDATE CASCADE;
