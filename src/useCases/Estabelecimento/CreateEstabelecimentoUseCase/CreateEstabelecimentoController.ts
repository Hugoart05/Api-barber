import { IEstabelecimento } from "../../../infraestruture/database/models/IEstabelecimento";
import { IUsuario } from "../../../infraestruture/database/models/IUsuario";
import CreateEstabelecimentoUseCase from "./CreateEstabelecimentoUseCase";
import {Response, Request} from 'express'
import { sendResponse } from '../../../infraestruture/Http/ApiResponseTypes/IHttpResponse'

export default class CreateEstabelecimentoController{
    constructor(private createEstabelecimentoUseCase: CreateEstabelecimentoUseCase){}

    async handle(request:Request, response:Response){
        try{
            const estabelecimento = request.body as Omit<IEstabelecimento, 'id'>
            await this.createEstabelecimentoUseCase.execute(estabelecimento, 2 )
            return sendResponse(response, 200, [],{success:true})
        }catch(error){
            response.send(error)
        }
    }
}