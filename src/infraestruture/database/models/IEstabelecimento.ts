import { Model } from "sequelize";

export interface IEstabelecimento {
    id:number,
    nome:string
    usuarioid:number
    categoriaid:number
}