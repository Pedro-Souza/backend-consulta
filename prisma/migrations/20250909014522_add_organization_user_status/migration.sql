-- CreateEnum
CREATE TYPE "UserOrganizationStatus" AS ENUM ('ACTIVE', 'PENDING', 'DISABLED');

-- AlterTable
ALTER TABLE "OrganizationUser" ADD COLUMN     "status" "UserOrganizationStatus" NOT NULL DEFAULT 'ACTIVE';
