import { Optional } from "sequelize";
import { userValidationForm } from "../../../helpers/validators";
import { IUsuario } from "../../../infraestruture/database/models/IUsuario";
import { sendResponse } from "../../../infraestruture/Http/ApiResponseTypes/IHttpResponse";
import { CreateUserUseCase } from "./CreateUserUseCase";
import { Request, Response } from "express";


export default class CreateUserController {
    constructor(private createUserUseCase: CreateUserUseCase) { }

    async handle(request: Request, response: Response) {
        try {
            const { email, password, nome } = request.body
            const errors = userValidationForm({email,password,nome, planoid: 0})
            if (email && password && nome) {
                const newUser: Optional<IUsuario, 'id'> = { email, password, nome, planoid:0}
                if (errors.length > 0)
                    return sendResponse(response, 400, errors)
                console.log(newUser)
                const user = await this.createUserUseCase.execute(newUser)
                return sendResponse(response, 200, ["Usuario criado com sucesso!"], user)
            }
            return sendResponse(response, 400,errors)

        } catch (errors) {
            console.log("erro ao criar um usuario na controller: ", errors)
            sendResponse(response, 500, errors.message)
        }
    }
}