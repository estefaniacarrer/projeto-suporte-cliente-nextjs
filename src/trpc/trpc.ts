
import { initTRPC } from "@trpc/server"
/**
 * Initialization of tRPC backend
 * Should be done only once per backend!
 */
const t = initTRPC.create();

export const router = t.router
export const publicProcedure = t.procedure































//modelo: 

// import { TRPCError, initTRPC } from '@trpc/server'

// const t = initTRPC.create()

// export const router = t.router
// export const publicProcedure = t.procedure





//import { CreateNextContextOptions } from "@trpc/server/adapters/next"
//import prisma from "@/lib/prisma"

// export async function createContext({ req, res }: CreateNextContextOptions) {
//   return {
//     prisma,
//   }
// }

// const t = initTRPC.context<typeof createContext>().create({
//   errorFormatter({ shape }) {
//     return shape
//   },
// })