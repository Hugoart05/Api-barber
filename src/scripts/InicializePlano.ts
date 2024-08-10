import { Optional } from "sequelize";
import { Plano, sequelize } from "../infraestruture/database/db";
import { IPlano } from "../types/IPlano";

export default async function InicializarPlanos(){
    try{
        console.log("realizando authenticacao no banco de dados")
        await sequelize.authenticate()
        console.log("authenticação concluida!")

        await sequelize.sync()

        const planosPadroes:Optional<IPlano, 'id'>[] = [
            {
                nome:'basic',
                maxMudancaNome:0,
                maxProdutosPermitidos:0,
                numeroMaximoDePersonalizacao:2,
                numeroMaximoEstabelecimento:1,
                numeroMaximoServico:3,
            },
            {
                nome:'plus',
                maxMudancaNome:2,
                maxProdutosPermitidos:5,
                numeroMaximoDePersonalizacao:10,
                numeroMaximoEstabelecimento:2,
                numeroMaximoServico:10,
            },
            {
                nome:'premium',
                maxMudancaNome:1000,
                maxProdutosPermitidos:1000,
                numeroMaximoDePersonalizacao:1000,
                numeroMaximoEstabelecimento:1000,
                numeroMaximoServico:20,
            },
        ]
        const planosExistentes =await Plano.findAll()

        if(planosExistentes.length === 0 ){
            console.log("iniciando cadastro dos planos")
            await Plano.bulkCreate(planosPadroes)
            console.log('cadastro de planos concluido')
        }
        console.log("não é nescessario efetuar cadastro de planos!")
        console.log("base de dados atualizada com sucesso!")
        console.log("iniciando a aplicacao...")
    }catch(error){
        console.log("Não foi possivel conectar ao banco de dados, verifique as credenciais de acesso ou contate ao administrador ou dev responsavel",error)
    }
}