/*
  Warnings:

  - You are about to drop the column `customerID` on the `payment` table. All the data in the column will be lost.
  - You are about to drop the column `customerID` on the `transactions` table. All the data in the column will be lost.
  - You are about to drop the `admins` table. If the table is not empty, all the data it contains will be lost.
  - You are about to drop the `customers` table. If the table is not empty, all the data it contains will be lost.

*/
-- DropForeignKey
ALTER TABLE `payment` DROP FOREIGN KEY `payment_customerID_fkey`;

-- DropForeignKey
ALTER TABLE `transactions` DROP FOREIGN KEY `transactions_customerID_fkey`;

-- DropIndex
DROP INDEX `payment_customerID_fkey` ON `payment`;

-- DropIndex
DROP INDEX `transactions_customerID_fkey` ON `transactions`;

-- AlterTable
ALTER TABLE `payment` DROP COLUMN `customerID`;

-- AlterTable
ALTER TABLE `transactions` DROP COLUMN `customerID`;

-- DropTable
DROP TABLE `admins`;

-- DropTable
DROP TABLE `customers`;

-- CreateTable
CREATE TABLE `users` (
    `id` INTEGER NOT NULL AUTO_INCREMENT,
    `username` VARCHAR(191) NOT NULL,
    `password` VARCHAR(191) NOT NULL,
    `role` ENUM('ADMIN', 'USER') NOT NULL DEFAULT 'USER',
    `created_at` DATETIME(3) NOT NULL DEFAULT CURRENT_TIMESTAMP(3),
    `updated_at` DATETIME(3) NOT NULL,

    UNIQUE INDEX `users_username_key`(`username`),
    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;
