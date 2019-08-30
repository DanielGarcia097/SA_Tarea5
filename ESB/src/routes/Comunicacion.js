/**
 *  Estándar de código utilizado: JavaScript Standard Style
 */
const express = require('express')
const router = express.Router()

/**
 *  ESB: Enterprise Service Bus
 * 
 *  Ruta GET donde se hace la solicitud inicial del cliente pidiendo el servicio de UBER.
 *  Se hacen las peticiones hacia los otros servicios.
 *  @id = identificador del cliente que hace la solicitud.
 *  @res.json(data) = retorna al cliente la información del servicio de Uber que será prestado.
 */

router.get('/cliente', (req, res) => {
  const id = req.query.id
  var lugar = ServicioCliente(id)

  var vehiculo = ServicioRastreo(lugar['Ubicacion'])
  var conductor = ServicioPiloto(vehiculo['Placa'], vehiculo['Ubicacion'])
  console.log(conductor)

  var data = {
    Conductor: conductor['Nombre'],
    'Telefono Conductor': conductor['Telefono'],
    'Placa Vehiculo': conductor['Vehiculo'],
    'Ubicacion Vehiculo': vehiculo['Ubicacion']
  }

  res.json(data)
})

/**
 * Función utilizada para comunicar desde el ESB hacia el servicio de clientes.
 * 
 *  @id = identificador del cliente que solicita el servicio de Uber
 *  @return ubicacion = retorna la ubicación acutal en la que se encuentra el cliente
 */

function ServicioCliente (id) {
  var request = require('sync-request')
  var res = request('GET', 'http://localhost:3000/clientes/', {

    qs: {
      id: id
    }
  })
  var ubicacion = JSON.parse(res.getBody('utf8'))
  return ubicacion
}

/**
 * Función utilizada para solicitar desde el ESB hacia el servicio de rastreo la ubicación del vehículo más cercano.
 * 
 *  @ubicacionCliente = ubicación actual del cliente que solicita el servicio de uber
 *  @return vehiculo = retorna la información en formato JSON del vehículo seleccionado en el servicio de rastreo.
 */

function ServicioRastreo (ubicacionCliente) {
  var request = require('sync-request')
  var res = request('GET', 'http://localhost:3020/rastreos/', {

    qs: {
      ubicacion: ubicacionCliente
    }
  })
  var vehiculo = JSON.parse(res.getBody('utf8'))
  return vehiculo
}

/**
 * Función utilizada para solicitar desde el ESB hacia el servicio de pilotos el conductor asignado al servicio
 * que solicitó el cliente.
 * 
 *  @placa = placa del vehículo que fue asignado en el servicio de rastreo
 *  @ubicacion = ubicación del vehículo que fue asignada en el servicio de rastreo
 *  @return conductor = retorna la información en formato JSON del piloto que fue asignado al cliente.
 */
function ServicioPiloto (placa, ubicacion) {
  var request = require('sync-request')
  var res = request('GET', 'http://localhost:3030/conductores/', {

    qs: {
      placa: placa,
      ubicacion: ubicacion
    }
  })
  var conductor = JSON.parse(res.getBody('utf8'))
  return conductor
}

module.exports = router
