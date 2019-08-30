/**
 *  Estándar de código utilizado: JavaScript Standard Style
 */
const express = require('express')
const router = express.Router()

/**
 *  Usuario predeterminado
 */
var data = {
  clientes: [
    {
      Id: '1',
      Nombre: 'Daniel',
      Ubicacion: '30°45\'32"N 55°31\'11"O',
      Telefono: '12345678'
    }
  ]
}

/**
 *  Ruta GET para el servicio de clientes
 */
router.get('/clientes/', (req, res) => {
  const id = req.query.id
  res.json(data['clientes'][id])
})

module.exports = router
