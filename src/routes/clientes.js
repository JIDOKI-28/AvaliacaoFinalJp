const express = require('express')
const ControllerClientes = require('../controller/clientes')
const auth = require('../middleware/auth')

const router = express.Router()

router.post('/create', ControllerClientes.CreateCliente)
router.post('/login', ControllerClientes.Login)

router.get('/session', auth, ControllerClientes.GetSessionCliente)
router.get('/', auth, ControllerClientes.GetClientes)
router.put('/:id', auth, ControllerClientes.UpdateClientes)
router.delete('/:id', auth, ControllerClientes.DeleteCliente)

module.exports = router