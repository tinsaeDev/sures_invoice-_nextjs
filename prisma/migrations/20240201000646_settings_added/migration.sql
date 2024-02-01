/*
  Warnings:

  - Added the required column `userId` to the `DefaultValues` table without a default value. This is not possible if the table is not empty.
  - Added the required column `description` to the `InvoiceItem` table without a default value. This is not possible if the table is not empty.
  - Added the required column `price` to the `InvoiceItem` table without a default value. This is not possible if the table is not empty.
  - Added the required column `qty` to the `InvoiceItem` table without a default value. This is not possible if the table is not empty.
  - Added the required column `userId` to the `Labels` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE `DefaultValues` ADD COLUMN `userId` INTEGER NOT NULL;

-- AlterTable
ALTER TABLE `InvoiceItem` ADD COLUMN `description` VARCHAR(191) NOT NULL,
    ADD COLUMN `price` DOUBLE NOT NULL,
    ADD COLUMN `qty` INTEGER NOT NULL;

-- AlterTable
ALTER TABLE `Labels` ADD COLUMN `userId` INTEGER NOT NULL;

-- CreateTable
CREATE TABLE `client` (
    `id` INTEGER NOT NULL AUTO_INCREMENT,
    `type` ENUM('PERSON', 'ORGANIZATION') NOT NULL,
    `organization_name` VARCHAR(191) NOT NULL,
    `contact_first_name` VARCHAR(191) NOT NULL,
    `contact_last_name` VARCHAR(191) NOT NULL,
    `first_name` VARCHAR(191) NOT NULL,
    `last_name` VARCHAR(191) NOT NULL,
    `currency_code` VARCHAR(191) NOT NULL,
    `language_code` VARCHAR(191) NOT NULL,
    `email` VARCHAR(191) NOT NULL,
    `phone` VARCHAR(191) NOT NULL,
    `street_1` VARCHAR(191) NOT NULL,
    `street_2` VARCHAR(191) NOT NULL,
    `city` VARCHAR(191) NOT NULL,
    `state` VARCHAR(191) NOT NULL,
    `postal` VARCHAR(191) NOT NULL,
    `country_code` VARCHAR(191) NOT NULL,
    `userId` INTEGER NOT NULL,

    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `Setting` (
    `id` INTEGER NOT NULL AUTO_INCREMENT,
    `company_name` VARCHAR(191) NOT NULL,
    `email` VARCHAR(191) NOT NULL,
    `website` VARCHAR(191) NOT NULL,
    `street_1` VARCHAR(191) NOT NULL,
    `street_2` VARCHAR(191) NOT NULL,
    `city` VARCHAR(191) NOT NULL,
    `state` VARCHAR(191) NOT NULL,
    `postal` VARCHAR(191) NOT NULL,
    `country_code` VARCHAR(191) NOT NULL,
    `uploadedFileId` INTEGER NOT NULL,
    `userId` INTEGER NOT NULL,

    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- AddForeignKey
ALTER TABLE `Labels` ADD CONSTRAINT `Labels_userId_fkey` FOREIGN KEY (`userId`) REFERENCES `User`(`id`) ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `DefaultValues` ADD CONSTRAINT `DefaultValues_userId_fkey` FOREIGN KEY (`userId`) REFERENCES `User`(`id`) ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `client` ADD CONSTRAINT `client_userId_fkey` FOREIGN KEY (`userId`) REFERENCES `User`(`id`) ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `Setting` ADD CONSTRAINT `Setting_userId_fkey` FOREIGN KEY (`userId`) REFERENCES `User`(`id`) ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `Setting` ADD CONSTRAINT `Setting_uploadedFileId_fkey` FOREIGN KEY (`uploadedFileId`) REFERENCES `UploadedFile`(`id`) ON DELETE RESTRICT ON UPDATE CASCADE;
