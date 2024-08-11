import { IRepositoryBase } from "./IRepositoryBase";
import {Plano} from '../../infraestruture/database/db'
import { IPlano } from "../../types/IPlano";

export interface IPlanoRepository extends IRepositoryBase<Plano>{
    findByPlanName(planName:string):Promise<IPlano | null>
}