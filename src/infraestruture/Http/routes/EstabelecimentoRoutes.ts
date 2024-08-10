import { Router } from "express";
import { createEstabeelecimentoController } from "../../../useCases/Estabelecimento/CreateEstabelecimentoUseCase/index";

export const estabelecimentoRoutes = Router()

estabelecimentoRoutes.post("/estabelecimento", async (resquest  , response)=>{
    await createEstabeelecimentoController.handle(resquest,response)
})