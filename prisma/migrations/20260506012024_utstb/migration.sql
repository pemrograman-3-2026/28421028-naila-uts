/*
  Warnings:

  - You are about to drop the column `Tanggal_transaksi` on the `transactions` table. All the data in the column will be lost.
  - You are about to drop the column `jumlah` on the `transactions` table. All the data in the column will be lost.
  - You are about to drop the column `metode_pembayaran` on the `transactions` table. All the data in the column will be lost.
  - Added the required column `amount` to the `transactions` table without a default value. This is not possible if the table is not empty.
  - Added the required column `paymentmethod` to the `transactions` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE `admins` MODIFY `role` ENUM('ADMIN', 'CUSTOMER') NOT NULL DEFAULT 'ADMIN';

-- AlterTable
ALTER TABLE `customers` MODIFY `role` ENUM('ADMIN', 'CUSTOMER') NOT NULL DEFAULT 'CUSTOMER';

-- AlterTable
ALTER TABLE `transactions` DROP COLUMN `Tanggal_transaksi`,
    DROP COLUMN `jumlah`,
    DROP COLUMN `metode_pembayaran`,
    ADD COLUMN `amount` VARCHAR(191) NOT NULL,
    ADD COLUMN `paymentmethod` VARCHAR(191) NOT NULL,
    ADD COLUMN `transactiondate` DATETIME(3) NOT NULL DEFAULT CURRENT_TIMESTAMP(3);
