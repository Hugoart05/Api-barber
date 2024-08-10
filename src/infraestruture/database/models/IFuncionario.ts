import { Model } from "sequelize"

export interface IFuncionario {
    id:number,
    nome:string
    usuarioid:number
    categoriaid:number
}