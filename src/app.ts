import express, { Application, Request, Response } from "express";
const app: Application = express();
import cors from "cors";
import { ProductsRoutes } from "./app/modules/product/product.route";
//parser
app.use(express.json());
app.use(cors());
app.use("/", ProductsRoutes);
app.get("/", (req: Request, res: Response) => {
  res.send("Hello World!");
});

export default app;
