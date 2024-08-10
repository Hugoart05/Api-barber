import { IUsuarioRepository } from "../../../domain/repository/IUsuarioRepository";
import { Request, Response } from "express";
import { IPermissaoPorIntervaloTempo } from "../../../types/IPermissaoPorIntervaloTempo";
import { sendResponse } from "../../../infraestruture/Http/ApiResponseTypes/IHttpResponse";
import { UpdateUserUseCase } from "./UpdateUserUseCase";


export default class UpdateUserController {
    constructor(
        private usuarioUseCase: UpdateUserUseCase,
    ) { }

    async handle(request: Request, response: Response) {
        try {
            const user = request.body
            if (!user.id)
                throw new Error("Usuário não existe ou é inválido")
            await this.usuarioUseCase.execute(user, user.id)
            return sendResponse(response, 200, ["Usuario atualizado com sucesso!"],)
        } catch (error) {
            return sendResponse(response, 400, [error.message])
        }
    }
}