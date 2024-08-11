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
                throw new NotFoundError("Não a plano registrado para o usuario selecionado!")
            
            const quantidadeDeEstabelecimentos = await this.estabelecimentoRepository.countUserEstabelecimentos(usuarioid)
            const regrasDeAdicaoEstabelecimento = new EstabelecimentoComercial(constulaPlanoDoUsuario)
            const consultaSePodeRegistrar = regrasDeAdicaoEstabelecimento.podeAdicionarEstabelecimento(quantidadeDeEstabelecimentos)
            
            if (consultaSePodeRegistrar) {
                estabelecimentoData.usuarioid = usuarioid
                console.log(estabelecimentoData)
                await this.estabelecimentoRepository.create(estabelecimentoData)
                return { message: "Estabelecimento criado com sucesso", success: true }
            }
            return { message: "Não é possivel registrar mais 1 estabelecimento com o plano atual ", success: false }
        }catch(error){
            if(error instanceof NotFoundError)
                throw error
            
            throw new DataBaseError("Erro interno ao processar a requisição" + error.message)
        }
    }
}