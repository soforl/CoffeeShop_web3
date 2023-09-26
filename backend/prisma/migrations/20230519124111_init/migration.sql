/*
  Warnings:

  - You are about to drop the `TokenInfo` table. If the table is not empty, all the data it contains will be lost.
  - Added the required column `hash` to the `User` table without a default value. This is not possible if the table is not empty.
  - Added the required column `updatedAt` to the `User` table without a default value. This is not possible if the table is not empty.

*/
-- DropForeignKey
ALTER TABLE "TokenInfo" DROP CONSTRAINT "TokenInfo_userId_fkey";

-- AlterTable
ALTER TABLE "User" ADD COLUMN     "hash" TEXT NOT NULL,
ADD COLUMN     "hashRt" TEXT,
ADD COLUMN     "updatedAt" TIMESTAMP(3) NOT NULL;

-- DropTable
DROP TABLE "TokenInfo";
