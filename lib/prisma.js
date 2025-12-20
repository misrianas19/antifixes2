import { PrismaClient } from "@prisma/client";

const globalForPrisma = globalThis;

export const prisma =
  globalForPrisma.prisma ??
  new PrismaClient({
    datasourceUrl: process.env.DATABASE_URL,
    log: ["query"], // optional
  });

if (process.env.NODE_ENV !== "production") {
  globalForPrisma.prisma = prisma;
}

