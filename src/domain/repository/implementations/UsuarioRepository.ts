import { RepositoryBase } from "./RepositoryBase";
import { IUsuarioRepository } from "../IUsuarioRepository";
import { Estabelecimento, Plano, Usuario } from "../../../infraestruture/database/db";
import { ModelStatic } from "sequelize";
import { IPlano } from "../../../types/IPlano";
import { DataBaseError } from "../../../helpers/custom-errors/DataBaseError";
import { IUsuario } from "../../../infraestruture/database/models/IUsuario";

export default class UsuarioRepository extends RepositoryBase<Usuario> implements IUsuarioRepository {
    constructor() {
        super(Usuario)
    }
    async getPlanType(usuarioid: number):Promise<Plano | null> {
       try{
        const model = this.getModel()
        const userPlantype = await model.findByPk(2,{
            include:[{model:Plano, as:'plan'}]
        })
        return userPlantype?.dataValues.plan?.dataValues
       }catch(error){
        return null
       }
    }

    async userIsExist(email: string): Promise<boolean> {
        try {
            const model = this.getModel()
            const exist = await model.findOne({ where: { email:email } }) 
            return exist != null ? true : false

        } catch (error) {
            
            console.log("falha ao buscar por email: ", error)
            throw new Error("Falha ao buscar usuário pelo email.")
        }
    }

    async getViewModelData(usuarioid:number):Promise<IUsuario | undefined>{
        try{
            const user = await this.getModel().findByPk(usuarioid, {include:[{model:Plano, as: 'plan'}, {model:Estabelecimento, as:'estabelecimentos'}]}) 
            return user?.dataValues
        }catch(error){
            throw new DataBaseError(error.message)
        }
    }
}