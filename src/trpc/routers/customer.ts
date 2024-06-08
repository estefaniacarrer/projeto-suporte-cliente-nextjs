import { z } from "zod";
import { publicProcedure, router } from "../trpc";
import prismaClient from "@/lib/prisma";

export const customerRouter = router({
    deleteCustomer: publicProcedure
          .input(z.object({ id: z.string() }))
          .mutation(async ({ input }) => {
            try {
              await prismaClient.customer.delete({
                where: {
                  id: input.id,
                },
              });
              return { message: "Cliente deletado com sucesso!" };
            } catch (err) {
              console.error("Erro ao deletar cliente:", err);
              throw new Error("Falha ao deletar cliente");
            }
          }),
    
        createCustomer: publicProcedure
          .input(z.object({ name: z.string(), phone: z.string(), email: z.string() })) 
          .mutation(async ({ input }) => {
            try {
              const createdCustomer = await prismaClient.customer.create({
                data: {
                  name: input.name,
                  phone: input.phone,
                  email: input.email,
                },
              });
              return createdCustomer; 
            } catch (err) {
              console.error("Erro ao criar cliente:", err);
              throw new Error("Falha ao criar cliente");
            }
          }),
      });


export type CustomerRouter = typeof customerRouter;