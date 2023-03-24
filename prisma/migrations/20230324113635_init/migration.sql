/*
  Warnings:

  - You are about to drop the `_CoffeeToOrder` table. If the table is not empty, all the data it contains will be lost.

*/
-- DropForeignKey
ALTER TABLE "_CoffeeToOrder" DROP CONSTRAINT "_CoffeeToOrder_A_fkey";

-- DropForeignKey
ALTER TABLE "_CoffeeToOrder" DROP CONSTRAINT "_CoffeeToOrder_B_fkey";

-- DropTable
DROP TABLE "_CoffeeToOrder";

-- CreateTable
CREATE TABLE "CoffeeToOrder" (
    "id" SERIAL NOT NULL,
    "coffeeId" INTEGER NOT NULL,
    "orderId" INTEGER NOT NULL,

    CONSTRAINT "CoffeeToOrder_pkey" PRIMARY KEY ("id")
);

-- AddForeignKey
ALTER TABLE "CoffeeToOrder" ADD CONSTRAINT "CoffeeToOrder_coffeeId_fkey" FOREIGN KEY ("coffeeId") REFERENCES "Coffee"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "CoffeeToOrder" ADD CONSTRAINT "CoffeeToOrder_orderId_fkey" FOREIGN KEY ("orderId") REFERENCES "Order"("id") ON DELETE RESTRICT ON UPDATE CASCADE;
