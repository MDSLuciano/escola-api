import { Router } from "express";
import userController from "../controllers/UserController";

const router = new Router();

router.post('/', userController.store)


export default router;

/*
index -> lista todos os usuários       -> GET
store/create -> criar um novo usuário  -> POST
delete -> apagar um novo usuário       -> DELETE
show -> mostrar um usuário             -> GET
update -> atualiza um usuário          -> PATCH ou PUT
*/
