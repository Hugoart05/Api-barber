import { IRepositoryBase } from "./IRepositoryBase";
import {Plano} from '../../infraestruture/database/db'

export interface IPlanoRepository extends IRepositoryBase<Plano>{
    findByPlanName(planName:string):Promise<Plano | null>
}