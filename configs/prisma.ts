import { PrismaClient } from "@prisma/client";

declare global {
  // allow global `var` declarations
  // eslint-disable-next-line no-var
  var prisma: PrismaClient | undefined;
}

export const prisma =
  global.prisma ||
  new PrismaClient({
    log: ["query"],
  });

if (process.env.NODE_ENV !== "production") global.prisma = prisma;

// Middleware

prisma.$use(async (params, next) => {
  // Manipulate params here
  const result = await next(params);

  // if result errorcode is P1001 then store params in rxdb
  // else store rxdb content in prisma and empty rxdb content
  // See results here
  return result;
});
