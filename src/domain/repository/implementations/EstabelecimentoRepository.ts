import { Estabelecimento, Plano, Usuario } from "../../../infraestruture/database/db";
import { IEstabelecimentoRepository } from "../IEstabelecimentoRepository";
import { RepositoryBase } from "./RepositoryBase";

export class EstabelecimentoRepository extends RepositoryBase<Estabelecimento> implements IEstabelecimentoRepository {
    constructor() {
        super(Estabelecimento)
    }

    async countUserEstabelecimentos(usuarioid: number): Promise<number> {
        const model = this.getModel()
        const estabelecimentos = await Estabelecimento.count({where:{usuarioid}})
        return estabelecimentos
    }

}