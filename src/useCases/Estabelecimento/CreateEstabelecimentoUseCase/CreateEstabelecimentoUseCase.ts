import { IUsuarioRepository } from "../../../domain/repository/IUsuarioRepository";
import { IEstabelecimentoRepository } from '../../../domain/repository/IEstabelecimentoRepository'
import { DatabaseError, Optional } from "sequelize";
import { IEstabelecimento } from '../../../infraestruture/database/models/IEstabelecimento'
import EstabelecimentoComercial from '../../../domain/entities/Estabelecimento'
import { NotFoundError } from "../../../helpers/custom-errors/NotFoundError";
import { CustomResult } from "../../../types/ICustomResult";
import { DataBaseError } from "../../../helpers/custom-errors/DataBaseError";

export default class CreateEstabelecimentoUseCase {
    constructor(
        private userRepository: IUsuarioRepository,
        private estabelecimentoRepository: IEstabelecimentoRepository
    ) { }

    async execute(estabelecimentoData: Optional<IEstabelecimento, 'id'>, usuarioid: number): Promise<CustomResult> {
        try {
            const constulaPlanoDoUsuario = await this.userRepository.getPlanType(usuarioid)
            if (!constulaPlanoDoUsuario)
                throw new NotFoundError("Não a planos registrado para o usuario selecionado!")

            const regrasDeAdicaoEstabelecimento = new EstabelecimentoComercial(constulaPlanoDoUsuario)
            const consultaSePodeRegistrar = regrasDeAdicaoEstabelecimento.
                podeAdicionarEstabelecimento(await this.estabelecimentoRepository.countUserEstabelecimentos(usuarioid))

            if (consultaSePodeRegistrar) {
                await this.estabelecimentoRepository.create(estabelecimentoData)
                return { message: "Usuario criado com sucesso", success: true }
            }
            return { message: "Não é possivel registrar mais 1 estabelecimento com o plano atual", success: true }
        }catch(error){
            if(error instanceof NotFoundError)
                throw error
            
            throw new DataBaseError("Erro interno ao processar a requisição")
        }
    }
}