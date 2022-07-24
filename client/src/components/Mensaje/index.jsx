import React from 'react'
// import { useDispatch, useSelector } from "react-redux";

function Mensaje(){
    return(
    <div>

<label className="reviewLabel">Dejanos tu consulta</label>
          <div class="form-group">
          <input
            type="text"
            // class="form-control item"
            placeholder="Titulo"
            /* value={input.titulo} */
            name="titulo"
            // onChange={handleOnChange}
            />
            </div>
            <div>
          <textarea class="form-control item"
            placeholder="Comentario"
            /* value={input.comentario} */
            name="comentario"
            // onChange={handleOnChange}
            />
        </div>
        
</div>)
}

export default Mensaje