import ConflictError from "../../../helpers/custom-errors/ConflictError";
import { NotFoundError } from "../../../helpers/custom-errors/NotFoundError";
import { Plano } from "../../../infraestruture/database/db";
import { IPlano } from "../../../types/IPlano";
import { IPlanoRepository } from "../IPlanoRepository";
import { RepositoryBase } from "./RepositoryBase";

export class PlanoRepository extends RepositoryBase<Plano> implements IPlanoRepository {
    constructor() {
        super(Plano)
    }
    async findByPlanName(planName: string): Promise<IPlano> {
        try {
            const model = Plano
            const plano = await model.findOne({where:{nome:planName}})
            if (!plano?.dataValues)
                throw new NotFoundError(`Nenhum plano encontrado com o nome ${planName}`)
            return plano.dataValues
        } catch (error) {
            if(error instanceof NotFoundError)
                throw error
            
            throw new ConflictError("Erro ao buscar o plano pelo nome: " + error)
        }
    }

}