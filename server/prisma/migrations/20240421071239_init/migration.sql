/*
  Warnings:

  - You are about to drop the column `translator_name` on the `Request` table. All the data in the column will be lost.
  - You are about to drop the column `translator_phone` on the `Request` table. All the data in the column will be lost.
  - Added the required column `carrier_name` to the `Request` table without a default value. This is not possible if the table is not empty.
  - Added the required column `carrier_phone` to the `Request` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE "Request" DROP COLUMN "translator_name",
DROP COLUMN "translator_phone",
ADD COLUMN     "carrier_name" TEXT NOT NULL,
ADD COLUMN     "carrier_phone" TEXT NOT NULL;
