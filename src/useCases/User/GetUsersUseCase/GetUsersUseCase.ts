import { IUsuarioRepository } from "../../../domain/repository/IUsuarioRepository"
import { DataBaseError } from "../../../helpers/custom-errors/DataBaseError";
import { Estabelecimento, Plano } from "../../../infraestruture/database/db";
import { IUsuario } from '../../../infraestruture/database/models/IUsuario'
export class GetUsersUseCase {
    constructor(private usuarioRepository: IUsuarioRepository) { }

    async execute() {
      try{
        const users =  await this.usuarioRepository.getModel().findByPk(2,{include:[{model:Plano, as:'plan'},{model:Estabelecimento, as: 'estabelecimentos'}], })
        return users?.dataValues
      }catch(error){
        throw new DataBaseError("Erro ao carregar as entidades associadas ao usuario.")
      }
    }
}