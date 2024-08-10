import { ModelStatic } from "sequelize";
import { Plano, Usuario } from "../../infraestruture/database/db";
import { IRepositoryBase } from "./IRepositoryBase";

export interface IUsuarioRepository extends IRepositoryBase<Usuario>{
    userIsExist(email:string):Promise<boolean>
    getPlanType(userid:number):Promise<Plano | null>
}