/*
  Warnings:

  - You are about to drop the column `role` on the `User` table. All the data in the column will be lost.
  - You are about to drop the `Admin` table. If the table is not empty, all the data it contains will be lost.
  - You are about to drop the `_CoffeeToOrder` table. If the table is not empty, all the data it contains will be lost.

*/
-- DropForeignKey
ALTER TABLE "_CoffeeToOrder" DROP CONSTRAINT "_CoffeeToOrder_A_fkey";

-- DropForeignKey
ALTER TABLE "_CoffeeToOrder" DROP CONSTRAINT "_CoffeeToOrder_B_fkey";

-- AlterTable
ALTER TABLE "Order" ADD COLUMN     "coffeeId" INTEGER;

-- AlterTable
ALTER TABLE "User" DROP COLUMN "role";

-- DropTable
DROP TABLE "Admin";

-- DropTable
DROP TABLE "_CoffeeToOrder";

-- DropEnum
DROP TYPE "Role";

-- AddForeignKey
ALTER TABLE "Order" ADD CONSTRAINT "Order_coffeeId_fkey" FOREIGN KEY ("coffeeId") REFERENCES "Coffee"("id") ON DELETE SET NULL ON UPDATE CASCADE;
