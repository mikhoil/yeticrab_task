/*
  Warnings:

  - You are about to drop the column `carrier_phone` on the `Request` table. All the data in the column will be lost.
  - Added the required column `carrier_tel` to the `Request` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE "Request" DROP COLUMN "carrier_phone",
ADD COLUMN     "carrier_tel" TEXT NOT NULL;
