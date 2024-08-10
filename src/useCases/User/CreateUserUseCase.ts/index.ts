import { PlanoRepository } from "../../../domain/repository/implementations/PlanoRepository";
import UsuarioRepository from "../../../domain/repository/implementations/UsuarioRepository";
import CreateUserController from "./CreateUserController";
import { CreateUserUseCase } from "./CreateUserUseCase";


const userRepository = new UsuarioRepository()
const planRepsitory = new PlanoRepository()

const createUseCase = new CreateUserUseCase(userRepository, planRepsitory)
export const createUserController = new CreateUserController(createUseCase)