import { Model, ModelStatic, UpdateOptions, WhereOptions } from "sequelize";
import { IRepositoryBase } from '../IRepositoryBase'

export class RepositoryBase<T extends Model> implements IRepositoryBase<T> {
    constructor(private model: ModelStatic<T>) { }
    async getById(id: number): Promise<T | null> {
        try {
            return await this.model.findByPk(id) as T
        } catch (error) {
            console.log("Ocorreu um erro ao buscar por id:", error)
            throw new Error("Falha ao tentar buscar usuario pelo id")
        }
    }

    async update(id: number, data: Partial<T>): Promise<void> {
        try {
            await this.model.update(data, {
                where: { id }
            } as UpdateOptions)
        } catch (error) {
            console.log("Ocorreu um erro ao atualizar: ", error)
            throw new Error("Falha ao tentar atualizar o usuario id")
        }
    }

    async delete(id: number): Promise<void> {
        try {
            const affectedCount = await this.model.destroy({ where: { id } as WhereOptions })
            if(affectedCount === 0)
                throw new Error(`Nenhum registro foi deletado, verifique se o id esta correto`)
        }catch(error){
            console.log("Ocorreu um erro ao deletar: ", error)
            throw new Error(`Problemas ao acessar a base de dados, tente novamente mais tarde`)
        }
    }
    async findAll(): Promise<T[]> {
       return (await this.model.findAll())
    }

    async create(data: T extends Model<any, any> ? any : any): Promise<T> {
        try{
            return await this.model.create(data)
        }catch(error){
            console.log("Ocorreu um erro ao criar: ", error)
            throw new Error(`Problemas ao acessar a base de dados, tente novamente mais tarde`)
        }
    }

    getModel(): ModelStatic<T> {
        return this.model
    }
}