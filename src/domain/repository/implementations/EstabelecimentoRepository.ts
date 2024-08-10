import { Estabelecimento, Usuario } from "../../../infraestruture/database/db";
import { IEstabelecimentoRepository } from "../IEstabelecimentoRepository";
import { RepositoryBase } from "./RepositoryBase";

export class EstabelecimentoRepository extends RepositoryBase<Estabelecimento> implements IEstabelecimentoRepository {
    constructor() {
        super(Estabelecimento)
    }

    async countUserEstabelecimentos(usuarioid: number): Promise<number> {
        const model = await this.getModel()
        return await model.count({where: {usuarioid}})
    }

}