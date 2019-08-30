/**
 *  Estándar de código utilizado: JavaScript Standard Style
 */
const express = require('express')
const router = express.Router()

/**
 *  Información de vehículo
 *  predeterminado
 */
var data = {
  'vehiculos':[
    {
      Id : '2',
      Placa: 'C209ZMK',
      Ubicacion: '40°25\'13"N 3°42\'21"O',
    }
  ]
}

/**
 *  Ruta GET para el servicio de rastreo
 */
router.get('/rastreos', (req, res) => {
  let ubicacion = req.query.ubicacion
  vehiculo = rastrear_conductor(ubicacion)
  res.json(vehiculo)
})

/**
 *  Ruta POST para el servicio de clientes
 */
router.post('/rastreos', (req, res) => {
  console.log(req.body)
})
module.exports = router

/**
 *  Función utilizada para rastrear el vehículo
 *  más cercano a la ubicación del cliente.
 */

function rastrear_conductor(ubicacion) {
  return data["vehiculos"][0]
}