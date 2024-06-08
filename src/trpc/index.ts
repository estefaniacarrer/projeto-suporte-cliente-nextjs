import { customerRouter } from "./routers/customer";
import { userRouter } from "./routers/user";
import { router } from "./trpc";

export const appRouter = router({
  user: userRouter,
  customer: customerRouter,
  //customerRouter
  //etc
});
 

export type AppRouter = typeof appRouter;