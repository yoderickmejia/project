import {Router} from "express";

import { getUsers,ELogin,SingUp,comprueba} from "../Controllers/Users.Controllers.js";

const UserRouter = Router();

UserRouter.get("/" , getUsers);

UserRouter.post("/login",ELogin);

UserRouter.post("/SignUp",SingUp);

UserRouter.post("/comprueba",comprueba)



export default UserRouter;
