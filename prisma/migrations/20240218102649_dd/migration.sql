/*
  Warnings:

  - You are about to drop the `client` table. If the table is not empty, all the data it contains will be lost.

*/
-- DropForeignKey
ALTER TABLE `client` DROP FOREIGN KEY `client_userId_fkey`;

-- DropTable
DROP TABLE `client`;

-- CreateTable
CREATE TABLE `Client` (
    `id` INTEGER NOT NULL AUTO_INCREMENT,
    `type` ENUM('PERSON', 'ORGANIZATION') NOT NULL,
    `organization_name` VARCHAR(191) NULL,
    `contact_first_name` VARCHAR(191) NULL,
    `contact_last_name` VARCHAR(191) NULL,
    `first_name` VARCHAR(191) NULL,
    `last_name` VARCHAR(191) NULL,
    `currency_code` VARCHAR(191) NOT NULL DEFAULT 'INR',
    `language_code` VARCHAR(191) NOT NULL DEFAULT 'hin',
    `email` VARCHAR(191) NOT NULL DEFAULT '',
    `phone` VARCHAR(191) NOT NULL DEFAULT '',
    `street_1` VARCHAR(191) NOT NULL DEFAULT '',
    `street_2` VARCHAR(191) NOT NULL DEFAULT '',
    `city` VARCHAR(191) NOT NULL DEFAULT '',
    `state` VARCHAR(191) NOT NULL DEFAULT '',
    `postal` VARCHAR(191) NOT NULL DEFAULT '',
    `country_code` VARCHAR(191) NOT NULL DEFAULT 'IND',
    `userId` INTEGER NOT NULL,

    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- AddForeignKey
ALTER TABLE `Client` ADD CONSTRAINT `Client_userId_fkey` FOREIGN KEY (`userId`) REFERENCES `User`(`id`) ON DELETE RESTRICT ON UPDATE CASCADE;
