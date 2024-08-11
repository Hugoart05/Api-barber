import express, { json, NextFunction, Request, Response } from 'express'
import userRoutes from './infraestruture/Http/routes/UserRoutes'
import funcionariosRoutes from './infraestruture/Http/routes/FuncionarioRoutes'
import InicializarPlanos from './scripts/InicializePlano'
import { estabelecimentoRoutes } from './infraestruture/Http/routes/EstabelecimentoRoutes'
import errorMiddleware from './middleware/error'
import { alimentarCategorias } from './scripts/InicializaCategorias'
import { categoriaRoutes } from './infraestruture/Http/routes/CategoriaRoutes'


const app = express()
app.use(json())
const PORT = process.env.PORT
const HOST = process.env.HOST

//Configuração das rotas 
app.use('/api', userRoutes)
app.use('/api', funcionariosRoutes)
app.use('/api', estabelecimentoRoutes)
app.use('/api', categoriaRoutes)

//Configuracao de middlewares
app.use(errorMiddleware)
app.listen('8080', async () => {
    await InicializarPlanos()
    await alimentarCategorias()
    // sequelize.sync({force:true})
    console.log(`server is running in http://${HOST}:${PORT}`)
})
