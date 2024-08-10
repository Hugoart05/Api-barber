import { Optional } from "sequelize";
import { IUsuarioRepository } from "../../../domain/repository/IUsuarioRepository.ts";
import { Usuario } from "../../../infraestruture/database/db.ts";

import UsuarioRepository from "../../../domain/repository/implementations/UsuarioRepository.ts"
import { IPlano } from "../../../infraestruture/database/models/IPlanoModel.ts";
import { IPlanoRepository } from "../../../domain/repository/IPlanoRepository.ts";
import { IUsuario } from "../../../infraestruture/database/models/IUsuario.ts";

export class CreateUserUseCase {
    constructor(
        private repository: IUsuarioRepository,
        private planRepository: IPlanoRepository
    ) {
    }

    async execute(usuario: Optional<IUsuario, 'id'>) {
        const userExist = await this.repository.userIsExist(usuario.email)
        if (userExist)
            throw new Error("O usuário com esse email ja existe na base de dados.")

        const basicPlan = await this.planRepository.findByPlanName("basic")
        if (basicPlan?.id != undefined && basicPlan?.id != 0) {
            usuario.planoid = 1
            const test = await this.repository.create(usuario)
            console.log(test)
        }
    }
}
