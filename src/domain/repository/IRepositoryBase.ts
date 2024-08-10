import { Model, ModelStatic } from "sequelize";

export interface IRepositoryBase<T extends Model >{
    create(data:Partial<T>):Promise<T>
    getById(id:number):Promise<T | null>
    update(id:number,data:Partial<T>):Promise<void>
    delete(id:number):Promise<void>
    findAll():Promise<T[]>
    getModel():ModelStatic<T>
}