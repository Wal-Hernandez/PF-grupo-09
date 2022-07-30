import React from "react";
import { useDispatch } from "react-redux";
import { Link, useParams } from "react-router-dom";
import { putBus } from "../../../redux/actions/putBus";
export const PutBusForm = ({id}) => {
 
  const dispatch = useDispatch();
  const [bus, setBus] = React.useState({ 
    name: "", 
    phone: "",
    email: "",
    score: 0,
    comments: "" 
  });

  /* function TransformData(x){
if(x.split(',').length===1) return x;
return JSON.parse(x)

} */

  function TransformData(x) {
    if (isNaN(x[0])) return x;
    return x.split(",");
  }

  function handleChange(event) {
    if (event.target.name === "comments" ) {
      setBus({ ...bus, [event.target.name]: [event.target.value] });
      return;
    }
    if(event.target.name === "score"){
      setBus({
        ...bus,
        [event.target.name]: TransformData(event.target.value),
      });
      return;
    }
    setBus({ ...bus, [event.target.name]: event.target.value });
    //     setErrors(validate({
    //     ...perro,
    //     [event.target.name]: event.target.value
    //  })); //esto es para los errores-->toca prestar atencion a cada examen de validacion
    // console.log(errors)
  }
  function handleSubmit(e) {
    e.preventDefault(); // para que era esto?
    dispatch(putBus(id, bus));
  }

  return (
    <div className="div">
      <form className="form" onSubmit={handleSubmit}>
      <div className="div-form">
          <label className="label-form"> Name:</label>
          <input
            type="text"
            name="name"
            value={bus["name"]}
            onChange={handleChange}
            />
            {/* <input className={errors.name ? 'danger' : 'input-form'} 
      type="text" name='name' 
      value={city['name']} 
      onChange={handleChange}/>
       {errors.name && (
            <p className="danger">{errors.name}</p>
          )} */}
        </div>

        <div className="div-form">
          <label className="label-form"> Phone:</label>
          {/* <input className={errors.temperaments? 'danger': 'input-form'} 
    type="text" name='location'
    value={city['location']} 
    onChange={handleChange}/>
    {errors.temperaments && (
          <p className="danger">{errors.temperaments}</p>
        )} */}
          <input
            type="text"
            name="phone"
            value={bus["phone"]}
            onChange={handleChange}
          />
        </div>
        <div className="div-form">
          <label className="label-form"> Email:</label>
          <input
            type="text"
            name="email"
            value={bus["email"]}
            onChange={handleChange}
          />
        </div>
        <div className="div-form">
          <label className="label-form"> Score:</label>
          <input
            type="number"
            name="score"
            value={bus["score"]}
            onChange={handleChange}
          />
        </div>
        <div className="div-form">
          <label className="label-form"> Comments:</label>
          <input
            type="text"
            name="comments"
            value={bus["comments"]}
            onChange={handleChange}
          />
        </div>
        <button
          type="submit"
          className="button-form"
          //disabled={!(!Object.entries(errors).length &&perro.name !== '' )}//Explicacion:
          //un formulario tiene 3 estados: vacio y sin errores, rellenandose con errores y
          // relleno y sin errores. Cuando no tenga errores es la primera parte del And y
          // el otro lado es cuando un campo este lleno. Porque al llenar solo un campo,
          // los errores estaran presentes (vacio). //Finalmente, el ! al inicio es para decir:
          // Mientras No pase el tercer estado, desactivame esto
        >
          {" "}
          Put Business
        </button>
        <Link to="/admin"> Volver</Link>
      </form>
    </div>
  );
};
