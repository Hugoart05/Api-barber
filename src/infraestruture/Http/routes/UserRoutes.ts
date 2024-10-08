import { NextFunction, Router } from "express";
import UsuarioRepository from "../../../domain/repository/implementations/UsuarioRepository";
import { AuthenticationMiddlewares } from "../../../middleware/Auth.ts/AuthenticationMiddleware";
import { getUsersController } from "../../../useCases/User/GetUsersUseCase/index.ts";
import { createUserController } from "../../../useCases/User/CreateUserUseCase.ts";
import { updateUserController } from "../../../useCases/User/UpdateUseCase";


const userRoutes = Router()

const repository = new UsuarioRepository()
const {isAuthenticated} = new AuthenticationMiddlewares(repository)

userRoutes.get('/user',  async (request, response)=>{
    await getUsersController.handle(request, response)
})
userRoutes.post('/user', async (req, res, next:NextFunction)=>{
    await createUserController.handle(req, res, next)
})

userRoutes.put('/user', async (req, res, next)=>{
    await updateUserController.handle(req,res, next)
})

// userRoutes.delete('/user', )
export default userRoutes