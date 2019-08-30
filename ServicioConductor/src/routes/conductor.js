/**
 *  Estándar de código utilizado: JavaScript Standard Style
 */
const express = require('express')
const router = express.Router()

/**
 *  Usuario predeterminado
 */
var data = {
  'pilotos':[
    {
      Id : '2',
      Nombre: 'Conductor Juan Perez',
      Telefono: '12345678',
      Vehiculo: 'C209ZMK'
    }
  ]
}

/**
 *  Ruta GET para el servicio de clientes
 */
router.get('/conductores', (req, res) => {
  let placa = req.query.id
  let ubicacion = req.query.id
  piloto = localizar_piloto(placa)
  res.json(piloto)
})

/**
 *  Ruta POST para el servicio de clientes
 */
router.post('/conductores', (req, res) => {
  console.log(req.body)
})

/**
 *  Función utilizada para localicar al piloto
 *  que corresponde al vehículo ubicado.
 */

function localizar_piloto(placa) {
  return data["pilotos"][0];
}
module.exports = router
