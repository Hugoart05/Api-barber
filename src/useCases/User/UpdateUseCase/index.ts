import UsuarioRepository from "../../../domain/repository/implementations/UsuarioRepository";
import PermissaoPorIntervaloTempo from "../../../domain/valores-objetos/PermisoesBaseadasEmTempo";
import UpdateUserController from "./UpdateUserController";
import { UpdateUserUseCase } from "./UpdateUserUseCase";

const permissaoBaseadaEmTempo = new PermissaoPorIntervaloTempo()
const repository = new UsuarioRepository()

const updateUserUseCase = new UpdateUserUseCase(
    repository,
    permissaoBaseadaEmTempo
)

export const updateUserController = new UpdateUserController(updateUserUseCase)