/*
  Warnings:

  - You are about to drop the column `confirmed` on the `User` table. All the data in the column will be lost.
  - You are about to drop the column `lastname` on the `User` table. All the data in the column will be lost.
  - Added the required column `last_name` to the `User` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE "User" DROP COLUMN "confirmed",
DROP COLUMN "lastname",
ADD COLUMN     "confirmed_email" BOOLEAN NOT NULL DEFAULT false,
ADD COLUMN     "last_name" TEXT NOT NULL,
ALTER COLUMN "role" SET DEFAULT 'user';
