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
  vehiculos: [
    {
      Id: '2',
      Placa: 'C209ZMK',
      Ubicacion: '40°25\'13"N 3°42\'21"O'
    }
  ]
}

/**
 *  Ruta GET para el servicio de rastreo
 */
router.get('/rastreos', (req, res) => {
  const ubicacion = req.query.ubicacion
  var vehiculo = rastrearConductor(ubicacion)
  res.json(vehiculo)
})

/**
 *  Función utilizada para rastrear el vehículo
 *  más cercano a la ubicación del cliente.
 *  @ubicacion = ubicacion actual del cliente.
 *  @return = retorna el vehículo que será asignado.
 */

function rastrearConductor (ubicacion) {
  return data['vehiculos'][0]
}

module.exports = router
