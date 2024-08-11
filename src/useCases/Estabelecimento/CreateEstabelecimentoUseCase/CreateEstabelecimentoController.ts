import { IEstabelecimento } from "../../../infraestruture/database/models/IEstabelecimento";
import { IUsuario } from "../../../infraestruture/database/models/IUsuario";
import CreateEstabelecimentoUseCase from "./CreateEstabelecimentoUseCase";
import { Response, Request, NextFunction } from 'express'
import { sendResponse } from '../../../infraestruture/Http/ApiResponseTypes/IHttpResponse'
import { LimitExceededError } from "../../../helpers/custom-errors/LimitExceededErro";

export default class CreateEstabelecimentoController {
    constructor(private createEstabelecimentoUseCase: CreateEstabelecimentoUseCase) { }

    async handle(request: Request, response: Response, next:NextFunction) {
        const estabelecimento = request.body as Omit<IEstabelecimento, 'id'>
        try {
            const {message, success} = await this.createEstabelecimentoUseCase.execute(estabelecimento, 4)
            if(!success)
                return sendResponse(response, 403,[message])
            return sendResponse(response, 200, [message], )
        }catch(error){
            next(error)
        }
    }
}