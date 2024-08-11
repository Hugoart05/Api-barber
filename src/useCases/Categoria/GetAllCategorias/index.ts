import { CategoriaRepository } from "../../../domain/repository/implementations/CategoriaRepository";
import { GetCategoriaController } from "./GetCategoriasController";
import { GetCategoriaUseCase } from "./GetCategoriasUseCase";

const categoriaRepository = new CategoriaRepository()
const categoriaUseCase = new GetCategoriaUseCase(categoriaRepository)

export const getCategoriaController = new GetCategoriaController(categoriaUseCase)