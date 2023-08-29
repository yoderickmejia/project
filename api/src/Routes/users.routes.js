import {Router} from "express";

import { getUsers,ELogin,SingUp} from "../Controllers/Users.Controllers.js";

const UserRouter = Router();

UserRouter.get("/" , getUsers);

UserRouter.post("/login",ELogin);

UserRouter.post("/SignUp",SingUp)



export default UserRouter;
