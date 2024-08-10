import { RepositoryBase } from "./RepositoryBase";
import { IUsuarioRepository } from "../IUsuarioRepository";
import { Plano, Usuario } from "../../../infraestruture/database/db";
import { ModelStatic } from "sequelize";
import { IPlano } from "../../../types/IPlano";

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
}