/*
  Warnings:

  - You are about to drop the column `FROM` on the `Invoice` table. All the data in the column will be lost.
  - Added the required column `FROM_lbl` to the `Invoice` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE `Invoice` DROP COLUMN `FROM`,
    ADD COLUMN `FROM_lbl` VARCHAR(191) NOT NULL;
