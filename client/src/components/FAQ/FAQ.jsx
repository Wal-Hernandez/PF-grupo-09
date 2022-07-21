import React from "react";
import Navbar from "../Navbar";
import Footer from "../Footer";
import s from "./FAQ.module.css"
export default function FAQ(){




return(
<div>
<div>
        <Navbar />
      </div>
      <div className={s.FAQContainer}>
<h1>Preguntas Frecuentes</h1>
<details className={s.detail}>

    <summary className={s.summary}><h3>Terminal y tiempo previo</h3></summary>

  <h3 className={s.h3detail}>¿Cuánto tiempo antes debo presentarme en la Terminal si voy a viajar?</h3>
  <p className={s.pdetail}>Para viajes nacionales, es necesario presentarse con media hora de anticipación. Y para viajes a países limítrofes/internacionales con una hora de anticipación..</p>
</details>
<details className={s.detail}>
  <summary className={s.summary}><h3>Conductor y requisitos</h3></summary>
  <h3 className={s.h3detail}>¿Qué debo presentar al conductor del bus para viajar?</h3>
  <p className={s.pdetail}>Sólo el E-ticket y el DNI.</p>
</details>
<details className={s.detail}>
  <summary className={s.summary}><h3>Equipaje permitido</h3></summary>
  <h3 className={s.h3detail}>¿Cuál es el equipaje permitido para viajar?</h3>
  <p className={s.pdetail}>Con el pasaje, se puede transportar un bolso de mano y un bulto que no exceda los 15 kg. Cuando el equipaje transportado supere el límite reglamentario, deberá abonar los importes correspondientes al exceso de equipaje. </p>
</details>
<details className={s.detail}>
  <summary className={s.summary}><h3>Consulta de Plataforma</h3></summary>
  <h3 className={s.h3detail}>¿Dónde puedo consultar la plataforma de salida sino figura en el pasaje?</h3>
  <p className={s.pdetail}>Se recomienda consultar en la oficina de informes de la terminal de salida, dirigirse a la boletería de la empresa o llamar a nuestro Servicio de Atención al Cliente (351-654-3168).</p>
</details>
<details className={s.detail}>
  <summary className={s.summary}><h3>Pasajes perdidos</h3></summary>
  <h3 className={s.h3detail}>¿Qué hago si pierdo mi pasaje?</h3>
  <p className={s.pdetail}>En caso de pérdida o extravío del pasaje, deberás comunicarse con la mayor anticipación posible con la empresa, boletería o agencia donde lo adquirió para seguir sus instrucciones sobre cómo actuar.</p>
</details>
<details className={s.detail}>
  <summary className={s.summary}><h3>Devolucion del pasaje</h3></summary>
  <h3 className={s.h3detail}>¿Puedo devolver mi pasaje?</h3>
  <p className={s.pdetail}>Si desiste del viaje, se le reintegrará una proporción de la tarifa:
Desde las 24hs anteriores y hasta una hora antes de la salida del vehículo, se reintegrará el 70% del valor abonado.
Desde antes de las 24hs anteriores a la salida del vehículo, se restituye el 80%.
</p>
</details>
<details className={s.detail}>
<summary className={s.summary}><h3>Pasajes Abiertos</h3></summary>

  <h3 className={s.h3detail}>¿Dónde debo confirmar mi pasaje abierto?</h3>
  <p className={s.pdetail}>No existen pasajes abiertos. Pongase en contacto inmediatamente con nosotros</p>
  
</details>
<details className={s.detail}>
  <summary className={s.summary}><h3>Menores de Edad y Pasajes</h3></summary>
  <h3 className={s.h3detail}>¿Los menores de edad abonan pasaje?</h3>
  <p className={s.pdetail}>Los niños menores de 5 (cinco) años (comprobados mediante la presentación del DNI) no pagan pasaje. Sí deben abonar un seguro, pero no tiene derecho a ocupar butaca como tampoco a reclamar por servicio a bordo.</p>
</details>
<details className={s.detail}>
  <summary className={s.summary}><h3>Mascotas y Viajes</h3></summary>
  <h3 className={s.h3detail}>¿Puedo viajar con mascotas?</h3>
  <p className={s.pdetail}>No. Por disposiciones de higiene y seguridad se encuentra prohibido transportar animales en el bus.</p>
</details>
</div>
<div>
        <Footer />
      </div>

</div>



)




}