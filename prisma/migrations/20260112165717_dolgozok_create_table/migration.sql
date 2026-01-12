-- CreateTable
CREATE TABLE `dolgozok` (
    `id` INTEGER NOT NULL AUTO_INCREMENT,
    `csaladnev` VARCHAR(191) NOT NULL,
    `utonev` VARCHAR(191) NOT NULL,
    `kor` INTEGER NOT NULL,
    `nem` VARCHAR(191) NULL,
    `munkaterulet` VARCHAR(191) NULL,
    `otthon_dolgozik` BOOLEAN NULL DEFAULT false,

    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;
