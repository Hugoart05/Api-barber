import { NextFunction } from "express";
import { GetCategoriaUseCase } from "./GetCategoriasUseCase";
import { sendResponse } from "../../../infraestruture/Http/ApiResponseTypes/IHttpResponse";
import { Response, Request } from "express";
export class GetCategoriaController{
    constructor(private getCategoriaUseCase: GetCategoriaUseCase){}

    async handle(request:Request, response:Response, next:NextFunction){
        try{
            const data = await this.getCategoriaUseCase.execute()
            return sendResponse(response,200,[],data)
        }catch(erro){
            next(erro)
        }
    }
}