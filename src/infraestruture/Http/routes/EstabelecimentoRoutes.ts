import { NextFunction, Router } from "express";
import { createEstabeelecimentoController } from "../../../useCases/Estabelecimento/CreateEstabelecimentoUseCase/index";

export const estabelecimentoRoutes = Router()

estabelecimentoRoutes.post("/estabelecimento", async (resquest  , response, next:NextFunction)=>{
    await createEstabeelecimentoController.handle(resquest,response, next)
})