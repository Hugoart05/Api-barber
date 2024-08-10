import { GetUsersUseCase } from "./GetUsersUseCase"
import UsuarioRepository from "../../../domain/repository/implementations/UsuarioRepository.ts"
import { GetUsersController } from "./GetUsersController"

const repository = new UsuarioRepository()

const getUserUseCase = new GetUsersUseCase(repository)

export const getUsersController = new GetUsersController(getUserUseCase)
