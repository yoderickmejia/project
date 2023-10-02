import {Router} from "express";

import { getUsers,ELogin,SingUp,comprueba,Wilson,Tarea1} from "../Controllers/Users.Controllers.js";
import { Tarea } from "../Services/Users.Services.js";

const UserRouter = Router();

UserRouter.get("/" , getUsers);

UserRouter.post("/login",ELogin);

UserRouter.post("/SignUp",SingUp);

UserRouter.post("/comprueba",comprueba)
UserRouter.post("/wilson",Wilson)
UserRouter.get("/Tarea",Tarea1)




export default UserRouter;
