/*
  Warnings:

  - Added the required column `Image` to the `products` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE `admins` MODIFY `role` ENUM('ADMIN', 'CUSTOMER') NOT NULL DEFAULT 'ADMIN';

-- AlterTable
ALTER TABLE `customers` MODIFY `role` ENUM('ADMIN', 'CUSTOMER') NOT NULL DEFAULT 'CUSTOMER';

-- AlterTable
ALTER TABLE `products` ADD COLUMN `Image` VARCHAR(191) NOT NULL;
