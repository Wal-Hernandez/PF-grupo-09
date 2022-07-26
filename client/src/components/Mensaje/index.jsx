// import React from 'react'
// // import { useDispatch, useSelector } from "react-redux";

// function Mensaje(){
//     return(
//     <div>

// <label className="reviewLabel">Dejanos tu consulta</label>
//           <div class="form-group">
//           <input
//             type="text"
//             // class="form-control item"
//             placeholder="Titulo"
//             /* value={input.titulo} */
//             name="titulo"
//             // onChange={handleOnChange}
//             />
//             </div>
//             <div>
//           <textarea class="form-control item"
//             placeholder="Comentario"
//             /* value={input.comentario} */
//             name="comentario"
//             // onChange={handleOnChange}
//             />
//         </div>
        
 // </div>)
// }
// export default Mensaje

import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';

function Mensaje() {
  return (
    <Form>
      <Form.Group className="mb-3" controlId="formBasicEmail">
        <Form.Label ><h3>Dejanos tu mensaje</h3></Form.Label>
        <Form.Control type="email" placeholder="Correo Electronico" />
        <Form.Text className="text-muted">
        dejanos tu correo para responderte a la brevedad
        </Form.Text>
      </Form.Group>

      <Form.Group className="mb-3" controlId="formBasicPassword">
        <div class="form-outline">
        <textarea class="form-control" id="textAreaExample1" rows="4"></textarea>
        <label class="form-label" for="textAreaExample">Mensaje</label>
        </div>
      </Form.Group>
      
      <Button variant="primary" type="submit">
        Enviar Consulta
      </Button>
    </Form>
  );
}

export default Mensaje;



