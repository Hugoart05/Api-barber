import { IUsuario } from "../../database/models/IUsuario"

export interface ApiResponse{
    statuscode:number
    messages?:string[]
    data?:unknown
}