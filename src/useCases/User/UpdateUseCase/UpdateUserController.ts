import { IUsuarioRepository } from "../../../domain/repository/IUsuarioRepository";
import { NextFunction, Request, Response } from "express";
import { IPermissaoPorIntervaloTempo } from "../../../types/IPermissaoPorIntervaloTempo";
import { sendResponse } from "../../../infraestruture/Http/ApiResponseTypes/IHttpResponse";
import { UpdateUserUseCase } from "./UpdateUserUseCase";


export default class UpdateUserController {
    constructor(
        private usuarioUseCase: UpdateUserUseCase,
    ) { }

    async handle(request: Request, response: Response, next:NextFunction) {
        try {
            const user = request.body
            if (!user.id)
                throw new Error("Usuário não existe ou é inválido")
            const {message, success} = await this.usuarioUseCase.execute(user, user.id)
            if(success)
                return sendResponse(response, 200, [message],)
            return sendResponse(response,400, [message])
        } catch (error) {
            next(error)
        }
    }
}