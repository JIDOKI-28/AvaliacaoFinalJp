const { Error } = require('sequelize')
const ModelClientes = require('../model/clientes')
const bcrypt = require('bcrypt')
const jwt = require('jsonwebtoken')
const SALT = 10

class ServiceClientes {
    async GetClienteById(id) {
        return ModelClientes.findByPk(id)
    }
    async GetClientes() {
        return ModelClientes.findAll()
    }
    async CreateClientes(nome, email, senha) {
        if (!nome || !email || !senha) {
            throw new Error("Coloque todos os dados")
        }
        const hashSenha = await bcrypt.hash(senha, SALT)
        return ModelClientes.create({nome, email, senha: hashSenha})
    }
    async UpdateCliente(id, nome, email, senha ) {
        const cliente = await ModelClientes.findByPk(id)
        if (!cliente){
            throw new Error("cliente nao encontrado")
        }
        cliente.nome = nome || cliente.nome
        cliente.email = email || cliente.email
        cliente.senha = senha 
            ? await bcrypt.hash(senha, SALT)
            : cliente.senha

        cliente.save()
        return cliente
    }
    async DeleteCliente(id) {
        if (!id) {
            throw new Error("coloque o id")
        }
        const cliente = await ModelClientes.findByPk(id)
        if (!cliente){
            throw new Error("cliente nao encontrado")
        }
        return cliente.destroy()
    }
    async Login(email, senha) {
        if(!email || !senha) {
            throw new Error("Email ou senha inválido!")
        }
        const cliente = await ModelClientes.findOne({ where: { email } })

        if(!cliente) {
            throw new Error("Email ou senha inválido!")
        }
        const senhaValida = await bcrypt.compare(senha, cliente.senha)

        if(!senhaValida) {
            throw new Error("Email ou senha inválido!")
        }
        return jwt.sign({ id: cliente.id }, 'segredo', { expiresIn: 60 * 60 })
    }
}
module.exports = new ServiceClientes()