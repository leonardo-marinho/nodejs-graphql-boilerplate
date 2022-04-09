-- CreateTable
CREATE TABLE "User" (
    "ukey" SERIAL NOT NULL,
    "active" BOOLEAN,
    "email" TEXT,
    "name" TEXT,
    "password" TEXT,

    CONSTRAINT "User_pkey" PRIMARY KEY ("ukey")
);
