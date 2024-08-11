import {IUsuario} from '../../infraestruture/database/models/IUsuario'
import { IPlano } from '../../types/IPlano'

export default class EstabelecimentoComercial{
    private plano:IPlano

    constructor( plano:IPlano){
        this.plano = plano
    }
    
    //Todos os metodos levam em consideracao que o plano premium nao tem limites para adicionar items ao seu inventario

    podeAdicionarEstabelecimento(quantidadeEstabelecimento:number):boolean{
        if(quantidadeEstabelecimento < this.plano.numeroMaximoEstabelecimento)
            return true
        return false
    }

    podeMudarNome(countMudanca:number):boolean{
        return countMudanca < this.plano.maxMudancaNome || this.plano.nome === "premium"
    }

    podeAdicionarServico(countServicoEstabelecimento:number):boolean{
        return countServicoEstabelecimento < this.plano.numeroMaximoServico || this.plano.nome === "premium"
    }

    podeAdicionarProdutos(countProdutos:number){
        return countProdutos < this.plano.maxProdutosPermitidos || this.plano.nome  === "premium"
    }
}