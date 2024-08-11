import { Categoria } from '../../../infraestruture/database/db';
import { ICategoriaRepository } from '../ICategoriaRepository';
import { RepositoryBase } from './RepositoryBase'
export class CategoriaRepository extends RepositoryBase<Categoria> implements ICategoriaRepository{
    constructor(){
        super(Categoria)
    }

    
}