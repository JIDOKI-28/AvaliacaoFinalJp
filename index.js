const express = require('express')
const database = require('./src/config/database')
const routerClientes = require('./src/routes/clientes')
const routerFilmes = require('./src/routes/filmes')


const port = 3000

const app = express()

app.use(express.json())

app.use('/clientes', routerClientes)
app.use('/filmes', routerFilmes)

database.db
    .sync({force: false})
    .then(() => {
        console.info("banco conectado com sucesso")
        app.listen(port, () => {
            console.info(`Servidor rodando na porta ${port}`)
        })
    })
    .catch((e) => {
        console.error(`Conexão falhou ${e}`)
    })

