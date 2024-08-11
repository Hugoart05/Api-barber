import { ICategoriaRepository } from "../../../domain/repository/ICategoriaRepository";
import { DataBaseError } from '../../../helpers/custom-errors/DataBaseError'
export class GetCategoriaUseCase{
    constructor(private categoriaRepository:ICategoriaRepository){}

    async execute(){
        try{
            return await this.categoriaRepository.findAll()
        }catch(erro){
            console.log(erro)
            throw new DataBaseError("Erro ao buscar categorias!")
        }
    }
}