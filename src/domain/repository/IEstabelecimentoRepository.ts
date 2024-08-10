import { Estabelecimento, Usuario } from "../../infraestruture/database/db";
import { IRepositoryBase } from "./IRepositoryBase";

export interface IEstabelecimentoRepository extends IRepositoryBase<Estabelecimento>{
    countUserEstabelecimentos(id:number):Promise<number>
}