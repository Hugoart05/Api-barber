import { Optional } from "sequelize";
import { ICategoria } from "../infraestruture/database/models/ICategoria";
import { Categoria } from "../infraestruture/database/db";

export async function alimentarCategorias() {
    const categorias: Optional<ICategoria, 'id'>[] = [
        { nome: "Barba" },
        { nome: "Beleza" },
        { nome: "Manicure" },
        { nome: "Barba, cabelo e bigode" },
    ]
    const newCategorys = await Categoria.findAll()
    if (newCategorys.length === 0) {
        Categoria.bulkCreate(categorias)
        return
    }

    console.log("Já existem categorias registradas ")

}