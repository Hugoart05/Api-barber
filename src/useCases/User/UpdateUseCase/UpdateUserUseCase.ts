import { Optional } from "sequelize";
import { IUsuarioRepository } from "../../../domain/repository/IUsuarioRepository"
import { IUsuario } from "../../../infraestruture/database/models/IUsuario";
import { IPermissaoPorIntervaloTempo } from "../../../types/IPermissaoPorIntervaloTempo";
import {  formatTimeForMessage } from "../../../helpers/validators";
import { NotFoundError } from "../../../helpers/custom-errors/NotFoundError";
import { CustomResult } from "../../../types/ICustomResult";
import { CustomError } from "../../../helpers/custom-errors/custom-error";
import { DataBaseError } from "../../../helpers/custom-errors/DataBaseError";

export class UpdateUserUseCase {

    constructor(
        private repository: IUsuarioRepository,
        private permissaoTempo: IPermissaoPorIntervaloTempo
    ) {
    }

    async execute(data: Optional<IUsuario, 'id'>, id: number):Promise<CustomResult> {
        try {
            const user = await this.repository.getById(id)

            if(!user)
                throw new NotFoundError("usuario iniexistente")
            
            const { isValid, rest } = this.permissaoTempo.validatePermissao(5, user.dataValues.updatedAt)
            if (!isValid){
                const message = formatTimeForMessage(rest)
                return {message:`Aguarde ${message} para  atualizar novamente`, success:false}
            }
            await this.repository.update(id, data)
            return {message:`Usuário atualizado com sucesso!`, success:true}
        } catch (error) {
            if(error instanceof CustomError){
                throw error
            }
            throw new DataBaseError(`Erro ao acessar os dados no banco!`)
        }
    }
}