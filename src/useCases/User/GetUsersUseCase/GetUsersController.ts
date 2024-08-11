import { GetUsersUseCase } from "./GetUsersUseCase";
import { Request, Response } from 'express'
import { sendResponse } from '../../../infraestruture/Http/ApiResponseTypes/IHttpResponse'
export class GetUsersController {
    constructor(private userUseCase: GetUsersUseCase) { }

    async handle(request: Request, response: Response) {
        try {
            const data = await this.userUseCase.execute()
            return sendResponse(response, 200, [], data)
        } catch (error) {
            console.log(error)
            return sendResponse(response, 400, ["Erro ao buscar dados dos usuarios 2"],)
        }
    }
}