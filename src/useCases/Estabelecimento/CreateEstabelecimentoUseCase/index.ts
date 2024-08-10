import { EstabelecimentoRepository } from "../../../domain/repository/implementations/EstabelecimentoRepository";
import UsuarioRepository from "../../../domain/repository/implementations/UsuarioRepository";
import CreateEstabelecimentoController from "./CreateEstabelecimentoController";
import CreateEstabelecimentoUseCase from "./CreateEstabelecimentoUseCase";


const estabeelecimentoRepo = new EstabelecimentoRepository()
const usuarioRepo = new UsuarioRepository()
const useCase = new CreateEstabelecimentoUseCase(usuarioRepo,estabeelecimentoRepo)

export const createEstabeelecimentoController = new CreateEstabelecimentoController(useCase)
