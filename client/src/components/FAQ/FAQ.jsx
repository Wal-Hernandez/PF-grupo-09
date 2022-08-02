import React from "react";
import Navbar from "../Navbar";
import Footer from "../Footer";
import "./FAQ.module.css"
export default function FAQ({ userlog }) {


  return (
    <div className="FAQContainer">
      <div>
        <Navbar userlog={userlog} />
      </div>
      <div>
        <h1>Preguntas Frecuentes</h1>

        <div class="col">
          <a class="btn btn-info" data-bs-toggle="collapse" href="#multiCollapseExample1" role="button" aria-expanded="false" aria-controls="multiCollapseExample1">¿Cuánto tiempo antes debo presentarme en la Terminal si voy a viajar?</a>
          <div class="col">
            <div class="collapse" id="multiCollapseExample1">
              <div class="card card-body">
                Para viajes nacionales, es necesario presentarse con media hora de anticipación. Y para viajes a países limítrofes/internacionales con una hora de anticipación.
              </div>
            </div>
          </div>
          <a class="btn btn-info" data-bs-toggle="collapse" href="#multiCollapseExample2" role="button" aria-expanded="false" aria-controls="multiCollapseExample2">¿Qué debo presentar al conductor del bus para viajar?</a>
          <div class="col">
            <div class="collapse" id="multiCollapseExample2">
              <div class="card card-body">
                Sólo el E-ticket y el DNI.
              </div>
            </div>
          </div>
          <a class="btn btn-info" data-bs-toggle="collapse" href="#multiCollapseExample3" role="button" aria-expanded="false" aria-controls="multiCollapseExample3">¿Cuál es el equipaje permitido para viajar?</a>
          <div class="col">
            <div class="collapse" id="multiCollapseExample3">
              <div class="card card-body">
                Con el pasaje, se puede transportar un bolso de mano y un bulto que no exceda los 15 kg. Cuando el equipaje transportado supere el límite reglamentario, deberá abonar los importes correspondientes al exceso de equipaje.             </div>
            </div>
          </div>
          <a class="btn btn-info" data-bs-toggle="collapse" href="#multiCollapseExample4" role="button" aria-expanded="false" aria-controls="multiCollapseExample4">¿Dónde puedo consultar la plataforma de salida sino figura en el pasaje?</a>
          <div class="col">
            <div class="collapse" id="multiCollapseExample4">
              <div class="card card-body">
                Se recomienda consultar en la oficina de informes de la terminal de salida, dirigirse a la boletería de la empresa o llamar a nuestro Servicio de Atención al Cliente (351-654-3168).
              </div>
            </div>
          </div>
          <a class="btn btn-info" data-bs-toggle="collapse" href="#multiCollapseExample5" role="button" aria-expanded="false" aria-controls="multiCollapseExample5">¿Qué hago si pierdo mi pasaje?</a>
          <div class="col">
            <div class="collapse" id="multiCollapseExample5">
              <div class="card card-body">
                En caso de pérdida o extravío del pasaje, deberás comunicarse con la mayor anticipación posible con la empresa, boletería o agencia donde lo adquirió para seguir sus instrucciones sobre cómo actuar.
              </div>
            </div>
          </div>
          <a class="btn btn-info" data-bs-toggle="collapse" href="#multiCollapseExample6" role="button" aria-expanded="false" aria-controls="multiCollapseExample6">¿Puedo devolver mi pasaje?</a>
          <div class="col">
            <div class="collapse" id="multiCollapseExample6">
              <div class="card card-body">
                Si desiste del viaje, se le reintegrará una proporción de la tarifa:
                Desde las 24hs anteriores y hasta una hora antes de la salida del vehículo, se reintegrará el 70% del valor abonado.
                Desde antes de las 24hs anteriores a la salida del vehículo, se restituye el 80%.
              </div>
            </div>
          </div>
          <a class="btn btn-info" data-bs-toggle="collapse" href="#multiCollapseExample7" role="button" aria-expanded="false" aria-controls="multiCollapseExample7">¿Dónde debo confirmar mi pasaje abierto?</a>
          <div class="col">
            <div class="collapse" id="multiCollapseExample7">
              <div class="card card-body">
                No existen pasajes abiertos. Pongase en contacto inmediatamente con nosotros
              </div>
            </div>
          </div>
          <a class="btn btn-info" data-bs-toggle="collapse" href="#multiCollapseExample8" role="button" aria-expanded="false" aria-controls="multiCollapseExample8">¿Los menores de edad abonan pasaje?</a>
          <div class="col">
            <div class="collapse" id="multiCollapseExample8">
              <div class="card card-body">
                Los niños menores de 5 (cinco) años (comprobados mediante la presentación del DNI) no pagan pasaje. Sí deben abonar un seguro, pero no tiene derecho a ocupar butaca como tampoco a reclamar por servicio a bordo.
              </div>
            </div>
          </div>
          <a class="btn btn-info" data-bs-toggle="collapse" href="#multiCollapseExample9" role="button" aria-expanded="false" aria-controls="multiCollapseExample9">¿Puedo viajar con mascotas?</a>
          <div class="col">
            <div class="collapse" id="multiCollapseExample9">
              <div class="card card-body">
                No. Por disposiciones de higiene y seguridad se encuentra prohibido transportar animales en el bus.
              </div>
            </div>
          </div>

        </div>
      </div>
      <div className="faq-footer-container">
        <Footer />
      </div>
    </div>
  )
}