import { Model } from "sequelize";

export interface IUsuario {
    id:number,
    nome:string,
    email:string,
    password:string,
    planoid:number
    createdAt?:Date,
    updatedAt?:Date
}