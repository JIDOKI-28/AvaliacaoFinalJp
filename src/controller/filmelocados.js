const ServicesFilmeLocados = require('../service/filmesLocados')

class ControllerFilmesLocados {
    async GetCFilmesLocados( req,res) {
        try {
            const filmes = await ServicesFilmeLocados.GetFilmesLocados()
            res.json({msg: filmes})
        } catch (error) {
            res.status(500).json({msg: error.message})
        }
    }
    async CreateFilmeLocado(req, res) {
        try {
            const { idFilmes, idClientes } = req.body
            const filmeLocado = await ServicesFilmeLocados.CreateFilmeLocados(idFilmes, idClientes)
            res.json({msg: filmeLocado})
        } catch (error) {
            res.status(500).json({msg: error.message})
        }
    }
    async UpdateFilmeLocado(req, res) {
        try {
            const id = req.params.id
            const filmeLocado = await ServicesFilmeLocados.UpdateFilmeLocados(id)
            res.json({msg: filmeLocado})
        } catch (error) {
            res.status(500).json({msg: error.message})
        }
    }
}
module.exports = new ControllerFilmesLocados()