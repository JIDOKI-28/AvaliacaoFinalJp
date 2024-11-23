const express = require('express')
const ControllerFilmes = require('../controller/filmes')
const ControllerFilmesLocados = require('../controller/filmelocados')
const auth = require('../middleware/auth')

const router = express.Router()

router.get('/', auth, ControllerFilmes.GetCFilmes)
router.post('/create', auth, ControllerFilmes.CreateFilme)
router.put('/:id', auth, ControllerFilmes.UpdateFilme)
router.delete('/:id', auth, ControllerFilmes.DeleteFilme)

router.post('/locar', auth, ControllerFilmesLocados.CreateFilmeLocado)
router.put('/devolver/:id', auth, ControllerFilmesLocados.UpdateFilmeLocado)
router.get('/locados', auth, ControllerFilmesLocados.GetCFilmesLocados)

module.exports = router