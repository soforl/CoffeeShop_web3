/*
  Warnings:

  - Added the required column `image` to the `Coffee` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE "Coffee" ADD COLUMN     "image" TEXT NOT NULL;
