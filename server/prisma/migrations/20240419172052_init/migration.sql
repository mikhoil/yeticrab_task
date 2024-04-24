/*
  Warnings:

  - The primary key for the `Request` table will be changed. If it partially fails, the table could be left without primary key constraint.
  - You are about to drop the column `id` on the `Request` table. All the data in the column will be lost.

*/
-- DropIndex
DROP INDEX "Request_number_key";

-- AlterTable
CREATE SEQUENCE request_number_seq;
ALTER TABLE "Request" DROP CONSTRAINT "Request_pkey",
DROP COLUMN "id",
ALTER COLUMN "number" SET DEFAULT nextval('request_number_seq'),
ADD CONSTRAINT "Request_pkey" PRIMARY KEY ("number");
ALTER SEQUENCE request_number_seq OWNED BY "Request"."number";
