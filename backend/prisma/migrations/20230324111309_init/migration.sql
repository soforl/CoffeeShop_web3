/*
  Warnings:

  - You are about to drop the column `coffeeId` on the `Order` table. All the data in the column will be lost.

*/
-- DropForeignKey
ALTER TABLE "Order" DROP CONSTRAINT "Order_coffeeId_fkey";

-- AlterTable
ALTER TABLE "Order" DROP COLUMN "coffeeId";

-- CreateTable
CREATE TABLE "_CoffeeToOrder" (
    "A" INTEGER NOT NULL,
    "B" INTEGER NOT NULL
);

-- CreateIndex
CREATE UNIQUE INDEX "_CoffeeToOrder_AB_unique" ON "_CoffeeToOrder"("A", "B");

-- CreateIndex
CREATE INDEX "_CoffeeToOrder_B_index" ON "_CoffeeToOrder"("B");

-- AddForeignKey
ALTER TABLE "_CoffeeToOrder" ADD CONSTRAINT "_CoffeeToOrder_A_fkey" FOREIGN KEY ("A") REFERENCES "Coffee"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "_CoffeeToOrder" ADD CONSTRAINT "_CoffeeToOrder_B_fkey" FOREIGN KEY ("B") REFERENCES "Order"("id") ON DELETE CASCADE ON UPDATE CASCADE;
