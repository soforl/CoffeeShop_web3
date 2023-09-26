/*
  Warnings:

  - The primary key for the `TokenInfo` table will be changed. If it partially fails, the table could be left without primary key constraint.

*/
-- AlterTable
ALTER TABLE "TokenInfo" DROP CONSTRAINT "TokenInfo_pkey",
ADD CONSTRAINT "TokenInfo_pkey" PRIMARY KEY ("userId");
