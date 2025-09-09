/*
  Warnings:

  - A unique constraint covering the columns `[user_email]` on the table `OrganizationUser` will be added. If there are existing duplicate values, this will fail.
  - Added the required column `user_email` to the `OrganizationUser` table without a default value. This is not possible if the table is not empty.
  - Added the required column `user_name` to the `OrganizationUser` table without a default value. This is not possible if the table is not empty.

*/
-- DropForeignKey
ALTER TABLE "OrganizationUser" DROP CONSTRAINT "OrganizationUser_userId_fkey";

-- AlterTable
ALTER TABLE "OrganizationUser" ADD COLUMN     "user_email" TEXT NOT NULL,
ADD COLUMN     "user_name" TEXT NOT NULL,
ALTER COLUMN "userId" DROP NOT NULL;

-- CreateIndex
CREATE UNIQUE INDEX "OrganizationUser_user_email_key" ON "OrganizationUser"("user_email");

-- AddForeignKey
ALTER TABLE "OrganizationUser" ADD CONSTRAINT "OrganizationUser_userId_fkey" FOREIGN KEY ("userId") REFERENCES "users"("id") ON DELETE SET NULL ON UPDATE CASCADE;
