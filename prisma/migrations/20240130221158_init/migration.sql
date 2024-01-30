/*
  Warnings:

  - You are about to drop the `Post` table. If the table is not empty, all the data it contains will be lost.
  - You are about to drop the `Profile` table. If the table is not empty, all the data it contains will be lost.

*/
-- DropForeignKey
ALTER TABLE `Post` DROP FOREIGN KEY `Post_authorId_fkey`;

-- DropForeignKey
ALTER TABLE `Profile` DROP FOREIGN KEY `Profile_userId_fkey`;

-- DropTable
DROP TABLE `Post`;

-- DropTable
DROP TABLE `Profile`;

-- CreateTable
CREATE TABLE `UploadedFile` (
    `id` INTEGER NOT NULL AUTO_INCREMENT,
    `path` VARCHAR(191) NOT NULL,

    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `Labels` (
    `id` INTEGER NOT NULL AUTO_INCREMENT,
    `INVOICE` VARCHAR(191) NOT NULL,
    `FROM` VARCHAR(191) NOT NULL,
    `BILL_TO` VARCHAR(191) NOT NULL,
    `SHIPPED_TO` VARCHAR(191) NOT NULL,
    `DATE_PREPARED` VARCHAR(191) NOT NULL,
    `PAYMENT_TERMS` VARCHAR(191) NOT NULL,
    `DUE_DATE` VARCHAR(191) NOT NULL,
    `PO` VARCHAR(191) NOT NULL,
    `TABLE_ITEM` VARCHAR(191) NOT NULL,
    `TABLE_QTY` VARCHAR(191) NOT NULL,
    `TABLE_RATE` VARCHAR(191) NOT NULL,
    `TABLE_AMOUNT` VARCHAR(191) NOT NULL,
    `NOTE` VARCHAR(191) NOT NULL,
    `LINK` VARCHAR(191) NOT NULL,
    `QR` VARCHAR(191) NOT NULL,
    `TERMS` VARCHAR(191) NOT NULL,
    `SUB_TOTAL` VARCHAR(191) NOT NULL,
    `DISCOUNT` VARCHAR(191) NOT NULL,
    `SHIPPING` VARCHAR(191) NOT NULL,
    `TAX_RATE` VARCHAR(191) NOT NULL,
    `TOTAL` VARCHAR(191) NOT NULL,
    `AMOUNT_PAID` VARCHAR(191) NOT NULL,
    `BALANCE_DUE` VARCHAR(191) NOT NULL,
    `SIGNATURE` VARCHAR(191) NOT NULL,

    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `DefaultValues` (
    `id` INTEGER NOT NULL AUTO_INCREMENT,
    `note` VARCHAR(191) NOT NULL,
    `terms` VARCHAR(191) NOT NULL,
    `currency_code` VARCHAR(191) NOT NULL,
    `tax_rate` INTEGER NOT NULL,
    `signature` VARCHAR(191) NOT NULL,
    `uploadedFileId` INTEGER NOT NULL,

    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `Invoice` (
    `id` INTEGER NOT NULL AUTO_INCREMENT,
    `bill_to` VARCHAR(191) NOT NULL,
    `shipped_to` VARCHAR(191) NOT NULL,
    `date_prepared` DATETIME(3) NOT NULL,
    `payment_terms` VARCHAR(191) NOT NULL,
    `due_date` DATETIME(3) NOT NULL,
    `po` VARCHAR(191) NOT NULL,
    `discount` INTEGER NOT NULL,
    `shipping` INTEGER NOT NULL,
    `amount_paid` INTEGER NOT NULL,
    `link` VARCHAR(191) NOT NULL,
    `uploadedFileId` INTEGER NOT NULL,
    `userId` INTEGER NULL,

    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `InvoiceItem` (
    `id` INTEGER NOT NULL AUTO_INCREMENT,
    `invoiceId` INTEGER NULL,

    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- AddForeignKey
ALTER TABLE `DefaultValues` ADD CONSTRAINT `DefaultValues_uploadedFileId_fkey` FOREIGN KEY (`uploadedFileId`) REFERENCES `UploadedFile`(`id`) ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `Invoice` ADD CONSTRAINT `Invoice_uploadedFileId_fkey` FOREIGN KEY (`uploadedFileId`) REFERENCES `UploadedFile`(`id`) ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `Invoice` ADD CONSTRAINT `Invoice_userId_fkey` FOREIGN KEY (`userId`) REFERENCES `User`(`id`) ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `InvoiceItem` ADD CONSTRAINT `InvoiceItem_invoiceId_fkey` FOREIGN KEY (`invoiceId`) REFERENCES `Invoice`(`id`) ON DELETE SET NULL ON UPDATE CASCADE;
