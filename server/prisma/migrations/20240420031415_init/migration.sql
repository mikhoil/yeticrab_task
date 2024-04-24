/*
  Warnings:

  - You are about to drop the column `comments` on the `Request` table. All the data in the column will be lost.
  - Added the required column `request_number` to the `Comment` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE "Comment" ADD COLUMN     "request_number" INTEGER NOT NULL;

-- AlterTable
ALTER TABLE "Request" DROP COLUMN "comments";

-- AddForeignKey
ALTER TABLE "Comment" ADD CONSTRAINT "Comment_request_number_fkey" FOREIGN KEY ("request_number") REFERENCES "Request"("number") ON DELETE RESTRICT ON UPDATE CASCADE;
