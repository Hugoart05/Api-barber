import { Optional } from "sequelize";
import { IUsuarioRepository } from "../../../domain/repository/IUsuarioRepository"
import { IUsuario } from "../../../infraestruture/database/models/IUsuario";
import { IPermissaoPorIntervaloTempo } from "../../../types/IPermissaoPorIntervaloTempo";

export class UpdateUserUseCase {

    constructor(
        private repository: IUsuarioRepository,
        private permissaoTempo: IPermissaoPorIntervaloTempo
    ) {
    }

    async execute(data: Optional<IUsuario, 'id'>, id: number) {
        try {
            const user = await this.repository.getById(id)
            if(!user)
                throw new Error("usuario iniexistente")

            const { isValid, rest } = this.permissaoTempo.validatePermissao(5, user.dataValues.updatedAt)
            if (!isValid)
                throw new Error(`Aguarde  ${rest < 240 ? `${rest} segundos` : `${(parseInt(rest.toFixed(2)) / 60).toFixed(0).toString().replace('.', ':')} minutos`} para  atualizar novamente`)

            await this.repository.update(id, data)
        } catch (error) {
            console.log(error)
            throw new Error(`${error}`)
        }
    }
}