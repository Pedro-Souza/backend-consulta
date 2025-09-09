-- CreateEnum
CREATE TYPE "UserOrganizationRole" AS ENUM ('ADMIN', 'MEMBER');

-- CreateTable
CREATE TABLE "users" (
    "id" TEXT NOT NULL,
    "created_at" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updated_at" TIMESTAMP(3) NOT NULL,
    "email" TEXT NOT NULL,
    "password" TEXT NOT NULL,
    "name" TEXT NOT NULL,

    CONSTRAINT "users_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "OrganizationUser" (
    "id" TEXT NOT NULL,
    "created_at" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updated_at" TIMESTAMP(3) NOT NULL,
    "role" "UserOrganizationRole" NOT NULL DEFAULT 'ADMIN',
    "userId" TEXT NOT NULL,

    CONSTRAINT "OrganizationUser_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "organizations" (
    "id" TEXT NOT NULL,
    "created_at" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updated_at" TIMESTAMP(3) NOT NULL,
    "name" TEXT NOT NULL,

    CONSTRAINT "organizations_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "consult_registers" (
    "id" TEXT NOT NULL,
    "created_at" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updated_at" TIMESTAMP(3) NOT NULL,
    "organizationId" TEXT NOT NULL,
    "cpf" TEXT NOT NULL,
    "birthday" TEXT NOT NULL,
    "metadata" JSONB NOT NULL,
    "webhook_url" TEXT,

    CONSTRAINT "consult_registers_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "billing_histories" (
    "id" TEXT NOT NULL,
    "created_at" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updated_at" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "billing_histories_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "_OrganizationToOrganizationUser" (
    "A" TEXT NOT NULL,
    "B" TEXT NOT NULL
);

-- CreateIndex
CREATE UNIQUE INDEX "users_email_key" ON "users"("email");

-- CreateIndex
CREATE INDEX "consult_registers_organizationId_idx" ON "consult_registers"("organizationId");

-- CreateIndex
CREATE UNIQUE INDEX "_OrganizationToOrganizationUser_AB_unique" ON "_OrganizationToOrganizationUser"("A", "B");

-- CreateIndex
CREATE INDEX "_OrganizationToOrganizationUser_B_index" ON "_OrganizationToOrganizationUser"("B");

-- AddForeignKey
ALTER TABLE "OrganizationUser" ADD CONSTRAINT "OrganizationUser_userId_fkey" FOREIGN KEY ("userId") REFERENCES "users"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "consult_registers" ADD CONSTRAINT "consult_registers_organizationId_fkey" FOREIGN KEY ("organizationId") REFERENCES "organizations"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "_OrganizationToOrganizationUser" ADD CONSTRAINT "_OrganizationToOrganizationUser_A_fkey" FOREIGN KEY ("A") REFERENCES "organizations"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "_OrganizationToOrganizationUser" ADD CONSTRAINT "_OrganizationToOrganizationUser_B_fkey" FOREIGN KEY ("B") REFERENCES "OrganizationUser"("id") ON DELETE CASCADE ON UPDATE CASCADE;
