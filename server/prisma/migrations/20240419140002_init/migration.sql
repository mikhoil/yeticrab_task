-- CreateEnum
CREATE TYPE "status" AS ENUM ('todo', 'in_process', 'completed');

-- CreateTable
CREATE TABLE "Request" (
    "id" SERIAL NOT NULL,
    "number" INTEGER NOT NULL,
    "date_time" TIMESTAMP(3) NOT NULL,
    "company_title" TEXT NOT NULL,
    "translator_name" TEXT NOT NULL,
    "translator_phone" TEXT NOT NULL,
    "comments" TEXT[],
    "status" "status" NOT NULL DEFAULT 'todo',
    "ati_code" TEXT NOT NULL,

    CONSTRAINT "Request_pkey" PRIMARY KEY ("id")
);

-- CreateIndex
CREATE UNIQUE INDEX "Request_number_key" ON "Request"("number");
