import { Optional } from "sequelize";
import { IUsuario } from "../infraestruture/database/models/IUsuario";

export function userValidationForm({ nome, email, password }: Optional<IUsuario, 'id'>): string[] {
    let errors: string[] = []

    const emailValidator = /^[^\s@]+@[^\s@]+\.[^\s@]+$/
    const passwordValidator = /^(?=.*[A-Z])(?=.*\d).+$/

    if (!email)
        errors.push("O campo email é obrigatório!")
    if (!nome)
        errors.push("O campo nome é obrigatório.")
    if (!emailValidator.test(email))
        errors.push("Digite um email válido!")
    if (!passwordValidator.test(password))
        errors.push("A senha deve conter pelo menos 1 letra maiúscula e 1 numero")

    return errors
}