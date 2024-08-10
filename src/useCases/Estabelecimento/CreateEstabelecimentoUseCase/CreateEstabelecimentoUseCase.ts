import { IUsuarioRepository } from "../../../domain/repository/IUsuarioRepository";
import { IEstabelecimentoRepository } from '../../../domain/repository/IEstabelecimentoRepository'
import { Optional } from "sequelize";
import { IEstabelecimento } from '../../../infraestruture/database/models/IEstabelecimento'
import EstabelecimentoComercial from '../../../domain/entities/Estabelecimento'

export default class CreateEstabelecimentoUseCase {
    constructor(
        private userRepository: IUsuarioRepository,
        private estabelecimentoRepository: IEstabelecimentoRepository
    ) { }

    async execute(estabelecimentoData: Optional<IEstabelecimento, 'id'>, usuarioid: number) {
        try {
            const planoDoUsuario = await this.userRepository.getPlanType(usuarioid)
            if (!planoDoUsuario)
                throw new Error("Não a planos registrado para o usuario selecionado!")
            const regrasDeAdicaoEstabelecimento = new EstabelecimentoComercial(planoDoUsuario)
            const podeRegistrarEstabelecimento = regrasDeAdicaoEstabelecimento.
                podeAdicionarEstabelecimento(await this.estabelecimentoRepository.countUserEstabelecimentos(usuarioid))
            if (podeRegistrarEstabelecimento) {
                await this.estabelecimentoRepository.create(estabelecimentoData)
                return
            }
            throw new Error("Não é possivel adicionar estabelecimentos com o plano atual");
        }catch(error){
            throw new Error("Erro ao assosiar um estabelecimento ao usuario")
        }
        
    }
}