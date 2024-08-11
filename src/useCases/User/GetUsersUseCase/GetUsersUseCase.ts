import { IUsuarioRepository } from "../../../domain/repository/IUsuarioRepository"
import { DataBaseError } from "../../../helpers/custom-errors/DataBaseError";
import { Estabelecimento, Plano } from "../../../infraestruture/database/db";
import { IUsuario } from '../../../infraestruture/database/models/IUsuario'
export class GetUsersUseCase {
  constructor(private usuarioRepository: IUsuarioRepository) { }

  async execute() {
    try {
      const users = await this.usuarioRepository.getViewModelData(1)
      const plan = users?.plan?.dataValues
      // if (users && plan ) {
      //   const viewModel = {
      //     nome: users.nome,
      //     email: users.email,
      //     plan: users.plan?.dataValues.nome
      //   }
      //   return viewModel
      // }
      return users
    } catch (error) {
      throw new DataBaseError("Erro ao carregar as entidades associadas ao usuario.")
    }
  }
}