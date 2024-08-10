import { Plano } from "../../../infraestruture/database/db";
import { IPlanoRepository } from "../IPlanoRepository";
import { RepositoryBase } from "./RepositoryBase";

export class PlanoRepository extends RepositoryBase<Plano> implements IPlanoRepository {
    constructor() {
        super(Plano)
    }
    async findByPlanName(planName: string): Promise<Plano> {
        try {
            const model = await this.getModel()
            const plano = await model.findAll()
            if (!plano)
                throw new Error(`Nenhum plano encontrado com o nome ${planName}`)
            return plano[0]
        } catch (error) {
            throw new Error("Erro ao buscar o plano pelo nome: " + error)
        }
    }

}