import { Router } from "express";
import UserRouter from "./users.routes.js";

const indexRouter = Router();

const prefix="/api";
indexRouter.get(prefix, (req , res) =>   {
    res.send("Welcome to planet APi");
})

indexRouter.use(`${prefix}/Users`,UserRouter)

export default indexRouter;