import { Router } from "express";
import { getCategoriaController } from "../../../useCases/Categoria/GetAllCategorias";

export const categoriaRoutes = Router()

categoriaRoutes.get('/categoria/:id',async (req, res, next)=>{
    await getCategoriaController.handle(req,res,next)
})