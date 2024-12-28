import express, { Application, Request, Response } from "express";
const app: Application = express();
import cors from "cors";
import { ProductsRoutes } from "./app/modules/product/product.route";
import globalErrorHandler from "./app/middlewares/globalErrorHandler";
import notFound from "./app/middlewares/notFound";
import router from "./app/routes";
//parser
app.use(express.json());
app.use(cors());
app.use("/", router);
app.get("/", (req: Request, res: Response) => {
  res.status(200).json({
    success: true,
    message: "Express server is running!",
  });
});
// global error handler
app.use(globalErrorHandler);
//For not found api
app.use(notFound);
export default app;
