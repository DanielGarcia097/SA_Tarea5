/**
 *  Estándar de código utilizado: JavaScript Standard Style
 */
const express = require('express')
const router = express.Router()
var request = require("sync-request")

/**
 *  ESB:
 */

router.get('/cliente', (req, res) => {
  let id = req.query.id
  var lugar = ServicioCliente(id)


  var vehiculo = ServicioRastreo(lugar["Ubicacion"])
  var conductor = ServicioPiloto(vehiculo["Placa"], vehiculo["Ubicacion"])
  console.log(conductor)

  var data = {
    'Conductor': conductor["Nombre"],
    'Telefono Conductor': conductor["Telefono"],
    'Placa Vehiculo': conductor["Vehiculo"],
    'Ubicacion Vehiculo': vehiculo["Ubicacion"],
  }

  res.json(data)
})

function ServicioCliente(id) {
  var request = require('sync-request');
  var res = request('GET', 'http://localhost:3000/clientes/', {

    qs: {
      'id': id,
    },
  });
  var ubicacion = JSON.parse(res.getBody('utf8'));
  return ubicacion
}

function ServicioRastreo(ubicacion_cliente) {
  var request = require('sync-request');
  var res = request('GET', 'http://localhost:3020/rastreos/', {

    qs: {
      'ubicacion': ubicacion_cliente,
    },
  });
  var vehiculo = JSON.parse(res.getBody('utf8'));
  return vehiculo
}

function ServicioPiloto(placa, ubicacion) {
  var request = require('sync-request');
  var res = request('GET', 'http://localhost:3030/conductores/', {

    qs: {
      'placa': placa,
      'ubicacion': ubicacion,
    },
  });
  var conductor = JSON.parse(res.getBody('utf8'));
  return conductor
}

module.exports = router
