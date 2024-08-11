import {  Optional } from "sequelize";
import { IUsuarioRepository } from "../../../domain/repository/IUsuarioRepository.ts";

import { IPlano } from "../../../infraestruture/database/models/IPlanoModel.ts";
import { IPlanoRepository } from "../../../domain/repository/IPlanoRepository.ts";
import { IUsuario } from "../../../infraestruture/database/models/IUsuario.ts";
import ConflictError from "../../../helpers/custom-errors/ConflictError.ts";
import { CustomResult } from "../../../types/ICustomResult.ts";
import { NotFoundError } from "../../../helpers/custom-errors/NotFoundError.ts";

export class CreateUserUseCase {
    constructor(
        private repository: IUsuarioRepository,
        private planRepository: IPlanoRepository
    ) {
    }

    async execute(usuario: Optional<IUsuario, 'id'>): Promise<CustomResult> {
        try {
            const userExist = await this.repository.userIsExist(usuario.email)
            if (userExist)
                return { message: "Usuario já existe!", success: false }

            const basicPlan = await this.planRepository.findByPlanName("basic") as IPlano | null
            if (!basicPlan?.id)
                throw new NotFoundError("Erro interno")

            usuario.planoid = 2
            await this.repository.create(usuario)
            console.log("camada use case")
            return {
                message: "Usuario criado com sucesso!",
                success: true
            }
        } catch (error) {
            if (error instanceof NotFoundError) {
                throw error
            }
            
            throw error
            // throw new DataBaseError("Erro interno")
        }
    }
}
