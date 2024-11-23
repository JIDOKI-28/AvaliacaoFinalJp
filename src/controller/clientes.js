const ServiceClientes = require('../service/clientes')

class ControllerClientes {
    async GetSessionCliente(req, res) {
        try {
            const id = req.session.id
            const cliente = await ServiceClientes.GetClienteById(id)
            res.json({msg: cliente})
        } catch (error) {
            
        }
    }
    async GetClientes(req, res) {
        try {
            const clientes = await ServiceClientes.GetClientes()
            res.json({msg: clientes})
        } catch (error) {
            res.status(500).Json({msg: error.message})
        }
    }
    async CreateCliente(req, res) {
        try {
            const { nome, email, senha } = req.body
            const cliente = await ServiceClientes.CreateClientes(nome, email, senha)
            res.json({msg: cliente})
        } catch (error) {
            res.status(500).Json({msg: error.message})
        }
    }
    async UpdateClientes(req, res) {
        try {
            const id = req.params.id
            const {nome, email, senha} = req.body
            const cliente = await ServiceClientes.UpdateCliente(id, nome, email, senha)
            res.json({msg: cliente})
        } catch (error) {
            res.status(500).Json({msg: error.message})
        }
    }
    async DeleteCliente(req, res) {
        try {
            const id = req.params.id
            const cliente = await ServiceClientes.DeleteCliente(id)
            res.json({msg: cliente })
        } catch (error) {
            res.status(500).Json({msg: error.message})
        }
    }
    async Login(req, res) {
        try {
            const { email, senha } = req.body
            const token = await ServiceClientes.Login(email, senha)
            res.status(200).json({ token })
        } catch (error) {
            res.status(500).json({ msg: error.message })
        }
    }
}
module.exports = new ControllerClientes()