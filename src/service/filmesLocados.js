
const ModelFilmesLocados = require('../model/filmes_locados')

class ServicesFilmeLocados {
    async GetFilmesLocados() {
        return ModelFilmesLocados.findAll()
    }
    async CreateFilmeLocados(idFilmes, idClientes) {
        if (!idFilmes || !idClientes) {
            throw new Error("id de filme ou clientes esta faltando insira os dados")
        }
        const dataLocacao = new Date()
        return ModelFilmesLocados.create({ idFilmes, idClientes, dataLocacao })
    }
    async UpdateFilmeLocados(id) {
        const filmeLocado = await ModelFilmesLocados.findByPk(id)
        if (!filmeLocado) {
            throw new Error("insira o id do filme locado")
        }
        const dataDevolucao = new Date()

        filmeLocado.dataDevolucao = dataDevolucao
        filmeLocado.save()
        return filmeLocado
    }
}
module.exports = new ServicesFilmeLocados()