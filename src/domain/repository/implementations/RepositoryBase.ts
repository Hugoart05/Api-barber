import {  Model, ModelStatic, UpdateOptions, WhereOptions } from "sequelize";
import { IRepositoryBase } from '../IRepositoryBase'
import { DataBaseError } from "../../../helpers/custom-errors/DataBaseError";
import { CustomError } from "../../../helpers/custom-errors/custom-error";

export class RepositoryBase<T extends Model> implements IRepositoryBase<T> {
    constructor(private model: ModelStatic<T>) { }
    async getById(id: number): Promise<T | null> {
        try {
            const result= await this.model.findByPk(id) 
            if(!result)
                throw new DataBaseError("Registro não encontrado")

            return result
        } catch (error) {
            throw new DataBaseError("Falha ao tentar buscar registro pelo id")
        }
    }

    async update(id: number, data: Partial<T>): Promise<void> {
        try {
            const [affectedCount] = await this.model.update(data, {
                where: { id }
            } as UpdateOptions)

            if(affectedCount  === 0)
                throw new DataBaseError("Falha ao atualizar o registro")
        } catch (error) {
            throw new DataBaseError("Nenhum registro foi atualizado, verifique se o id esta correto")
        }
    }

    async delete(id: number): Promise<void> {
        try {
            const affectedCount = await this.model.destroy({ where: { id } as WhereOptions })
            if(affectedCount === 0)
                throw new DataBaseError(`Nenhum registro foi deletado, verifique se o id esta correto`)
        }catch(error){
            throw new DataBaseError(`Problemas ao acessar a base de dados, tente novamente mais tarde`)
        }
    }
    async findAll(): Promise<T[]> {
       return (await this.model.findAll())
    }

    async create(data: T extends Model<any, any> ? any : any): Promise<T> {
        try{
            return await this.model.create(data)
        }catch(error){
            if(error instanceof CustomError){
                throw new DataBaseError(`Problemas ao acessar a base de dados, tente novamente mais tarde`)
            }
            throw error
        }
    }

    getModel(): ModelStatic<T> {
        return this.model
    }
}