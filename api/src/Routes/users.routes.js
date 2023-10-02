import {Router} from "express";

import { getUsers,ELogin,SingUp,comprueba,Wilson} from "../Controllers/Users.Controllers.js";

const UserRouter = Router();

UserRouter.get("/" , getUsers);

UserRouter.post("/login",ELogin);

UserRouter.post("/SignUp",SingUp);

UserRouter.post("/comprueba",comprueba)
UserRouter.post("/wilson",Wilson)




export default UserRouter;
