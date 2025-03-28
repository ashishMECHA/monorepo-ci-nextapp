import { PrismaClient } from '@prisma/client'

const prisma = new PrismaClient()

// Add global extension for TypeScript
declare global {
  var prisma: PrismaClient | undefined
}

const db = globalThis.prisma || new PrismaClient()

// if (process.env.NODE_ENV !== 'production') {
//   globalThis.prisma = db
// }

export { db as client }