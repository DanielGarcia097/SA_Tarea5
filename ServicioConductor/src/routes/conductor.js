/**
 *  Estándar de código utilizado: JavaScript Standard Style
 */
const express = require('express')
const router = express.Router()

/**
 *  Usuario predeterminado
 */
var data = {
  pilotos: [
    {
      Id: '2',
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
  const placa = req.query.placa
  const ubicacion = req.query.ubicacion
  var piloto = localizarPiloto(placa, ubicacion)
  res.json(piloto)
})

/**
 *  Función utilizada para localicar al piloto
 *  que corresponde al vehículo ubicado.
 *  @placa = placa del vehículo que fue asignado.
 *  @ubicación = ubicación del vehículo que fue asignado.
 *  @return = retorna el piloto que corresponde al vehículo asignado.
 */

function localizarPiloto (placa, ubicacion) {
  return data['pilotos'][0]
}
module.exports = router
