const { Error } = require('sequelize')
const ModelFilmes = require('../model/filmes')

class ServiceFilmes {
    async GetFilmes() {
        return ModelFilmes.findAll()
    }
    async CreateFilmes(titulo, faixaEtaria, diretor) {
        if (!titulo || !faixaEtaria || !diretor) {
            throw new Error("Coloque todos os dados")
        }
        return ModelFilmes.create({titulo, faixaEtaria, diretor})
    }
    async UpdateFilmes(id, titulo, faixaEtaria, diretor ) {
        const filme = await ModelFilmes.findByPk(id)
        if (!filme){
            throw new Error("filme nao encontrado")
        }
        filme.titulo = titulo || filme.titulo
        filme.faixaEtaria = faixaEtaria || filme.faixaEtaria
        filme.diretor = diretor
        filme.save()
        return filme
    }
    async DeleteFilmes(id) {
        if (!id) {
            throw new Error("coloque o id")
        }
        const filme = await ModelFilmes.findByPk(id)
        if (!filme){
            throw new Error("filme nao encontrado")
        }
        return filme.destroy()
    }
}
module.exports = new ServiceFilmes()