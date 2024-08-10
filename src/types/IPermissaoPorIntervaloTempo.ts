import { IValidateTimedBased } from "./IValidateTimedBased";

export interface IPermissaoPorIntervaloTempo{
    validatePermissao(interval:number, lastUpdated?:Date):IValidateTimedBased
}