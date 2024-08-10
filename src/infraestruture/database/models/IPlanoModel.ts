import { Model } from "sequelize"

export interface IPlano {
    id:number
    nome:string
    numeroMaximoEstabelecimento:number
    numeroMaximoDePersonalizacao:number
    maxMudancaNome:number 
    numeroMaximoServico:number
    maxProdutosPermitidos:number
}