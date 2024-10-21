import { Router } from "express";
import userController from "../controllers/UserController";

import loginRequired from "../middlewares/loginRequired";

const router = new Router();

//Não deveria existir
// router.get('/', userController.index) //Lista usuários
//router.get('/:id', userController.show) //Lista usuário


router.post('/', loginRequired, userController.store)
router.put('/', loginRequired, userController.update)
router.delete('/', loginRequired, userController.delete)

export default router;

/*
index -> lista todos os usuários       -> GET
store/create -> criar um novo usuário  -> POST
delete -> apagar um novo usuário       -> DELETE
show -> mostrar um usuário             -> GET
update -> atualiza um usuário          -> PATCH ou PUT
*/
