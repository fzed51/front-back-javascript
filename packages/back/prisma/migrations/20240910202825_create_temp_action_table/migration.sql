-- CreateTable
CREATE TABLE "temp_action" (
    "id" TEXT NOT NULL PRIMARY KEY,
    "ref" TEXT NOT NULL,
    "data" TEXT NOT NULL,
    "expire_at" DATETIME NOT NULL
);
