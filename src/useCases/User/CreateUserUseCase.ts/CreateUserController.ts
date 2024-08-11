import { Optional } from "sequelize";
import { userValidationForm } from "../../../helpers/validators";
import { IUsuario } from "../../../infraestruture/database/models/IUsuario";
import { sendResponse } from "../../../infraestruture/Http/ApiResponseTypes/IHttpResponse";
import { CreateUserUseCase } from "./CreateUserUseCase";
import { NextFunction, Request, Response } from "express";


export default class CreateUserController {
    constructor(private createUserUseCase: CreateUserUseCase) { }

    async handle(request: Request, response: Response, next:NextFunction) {
        try {
            const userRequest = request.body as Omit<IUsuario, 'id'>
            const errors = userValidationForm(userRequest)
            if (errors.length > 0)
                return sendResponse(response, 400, errors)
            const {success, message} = await this.createUserUseCase.execute(userRequest)
            if(success)
                return sendResponse(response, 200, [message])
            return sendResponse(response,400,[message])
        } catch (errors) {
            next(errors)
        }
    }
}