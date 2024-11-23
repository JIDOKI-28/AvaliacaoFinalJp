const ServiceFilmes = require('../service/filmes')

class ControllerFilmes {
    async GetCFilmes(req, res) {
        try {
            const filmes = await ServiceFilmes.GetFilmes()
            res.json({msg: filmes})
        } catch (error) {
            res.status(500).json({msg: error.message})
        }
    }
    async CreateFilme(req, res) {
        try {
            const { titulo, faixaEtaria, diretor } = req.body
            const filme = await ServiceFilmes.CreateFilmes(titulo, faixaEtaria, diretor)
            res.json({msg: filme})
        } catch (error) {
            res.status(500).json({msg: error.message})
        }
    }
    async UpdateFilme(req, res) {
        try {
            const id = req.params.id
            const { titulo, faixaEtaria, diretor } = req.body
            const filme = await ServiceFilmes.UpdateFilmes(id, titulo, faixaEtaria, diretor)
            res.json({msg: filme})
        } catch (error) {
            res.status(500).json({msg: error.message})
        }
    }
    async DeleteFilme(req, res) {
        try {
            const id = req.params.id
            const filme = await ServiceFilmes.DeleteFilmes(id)
            res.json({msg: filme })
        } catch (error) {
            res.status(500).json({msg: error.message})
        }
    }
}
module.exports = new ControllerFilmes()