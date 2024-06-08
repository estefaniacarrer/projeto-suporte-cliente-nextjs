import { z } from "zod";
import { publicProcedure, router } from "../trpc";

export const userRouter = router({
  getUsers: publicProcedure.query(() => {
    return [
      { name: "Maria", race: "Orc" },
      { name: "João", race: "Orc"},
    ];
  }),

  addUser: publicProcedure.input(z.object({ name: z.string(), race: z.string() }))
  .mutation((opts) => {
    const { input } = opts;
    // Cal prisma add user method
  }),
});

export type UserRouter = typeof userRouter;






































 // greeting: publicProcedure
  //   .input(
  //     z.object({
  //       name: z.string().nullish(),
  //     })
  //   )
  //   .query(({ input }) => {
  //     return {
  //       text: `hello ${input?.name ?? "world"}`,
  //     };
  //   }),



// const appRouter = router({
//   customerList: publicProcedure
//     .query(async () => {
//       const customers = await prisma.customer.findMany();
//       return customers;
//     }),

//   customerCreate: publicProcedure
//     .input(z.object({ name: z.string() }))
//     .mutation(async (opts) => {
//       const { input } = opts;
//       const user = await prisma.user.create({});
//       return user;
//     }),
// });

// export type AppRouter = typeof appRouter;

// const server = createHTTPServer({
//   router: appRouter,
// });

// server.listen(3000);
