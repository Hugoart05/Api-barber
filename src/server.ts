import express, { json } from 'express'
import userRoutes from './infraestruture/Http/routes/UserRoutes'
import funcionariosRoutes from './infraestruture/Http/routes/FuncionarioRoutes'
import { sequelize } from './infraestruture/database/db'
import InicializarPlanos from './scripts/InicializePlano'
import { estabelecimentoRoutes } from './infraestruture/Http/routes/EstabelecimentoRoutes'
const app = express()
app.use(json())
const PORT = process.env.PORT
const HOST = process.env.HOST
// injeçao de dependencia 

//Add grupo de rotas da api

app.use('/api', userRoutes)
app.use('/api', funcionariosRoutes)
app.use('/api', estabelecimentoRoutes)

app.listen('8080', async()=>{
    await InicializarPlanos()
    // sequelize.sync({force:true})
    console.log(`server is running in http://${HOST}:${PORT}`)
})
