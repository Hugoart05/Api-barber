import { IUsuarioRepository } from "../../../domain/repository/IUsuarioRepository"
import { Plano } from "../../../infraestruture/database/db";
import { IUsuario } from '../../../infraestruture/database/models/IUsuario'
export class GetUsersUseCase {
    constructor(private usuarioRepository: IUsuarioRepository) { }

    async execute() {
        const users = (await this.usuarioRepository.getModel()).findAll({include:Plano});
        return users
    }
}