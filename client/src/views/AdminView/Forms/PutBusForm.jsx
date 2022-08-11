import React from "react";
import { useDispatch } from "react-redux";
import { useForm } from "react-hook-form";
import { putBus } from "../../../redux/actions/putBus";
import swal from "sweetalert";
export const PutBusForm = ({ pack }) => {

  const dispatch = useDispatch();
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();
  const [bus, setBus] = React.useState({
    name: pack.name,
    phone: pack.phone,
    email: pack.email,
    score: pack.score,
    comments: pack.comments
  });

  const expRegEmail = /^[-\w.%+]{1,64}@(?:[A-Z0-9-]{1,63}\.){1,125}[A-Z]{2,63}$/i;
  const expRegSoloLetras = /^[a-zA-Z ]*$/;
  const expRegSoloNum = /^\d*$/;
  /* function TransformData(x){
if(x.split(',').length===1) return x;
return JSON.parse(x)

} */

  function TransformData(x) {
    if (isNaN(x[0])) return x;
    return x.split(",");
  }

  function handleChange(event) {
    if (event.target.name === "comments") {
      setBus({ ...bus, [event.target.name]: [event.target.value] });
      return;
    }
    if (event.target.name === "score") {
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
  function handleSubmitBus() {
    //e.preventDefault(); // para que era esto?
    dispatch(putBus(pack.id, bus));
    swal({
      title: "Bus editado con exito",
      icon: "success",
    })
  }

  const name = register("name", {
    required: { value: true, message: "REQUERIDO" },
    pattern: { value: expRegSoloLetras, message: "SOLO LETRAS" }
  });

  const phone = register("phone", {
    pattern: { value: expRegSoloNum, message: "SOLO NUMEROS" },
  });

  const email = register("email", {
    required: { value: true, message: "REQUERIDO" },
    pattern: { value: expRegEmail, message: "Email invalido" }
  });

  return (
    <div className="div">
      <form className="form" onSubmit={handleSubmit(handleSubmitBus)}>
        <div className="div-form">
          <label className="label-form"> Nombre de la empresa: </label>

          <input
            type="text"
            name="name"
            value={bus["name"]}
            placeholder="Ingrese el nombre."
            {...name}
            onChange={(e) => {
              name.onChange(e);
              handleChange(e);
            }}
          />
          {errors?.name && <span>{errors?.name?.message}</span>}
          {/* <input className={errors.name ? 'danger' : 'input-form'} 
      type="text" name='name' 
      value={city['name']} 
      onChange={handleChange}/>
       {errors.name && (
            <p className="danger">{errors.name}</p>
          )} */}
        </div>

        <div className="div-form">
          <label className="label-form"> Telefono: </label>
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
            placeholder="Ingrese el telefono."
            {...phone}
            onChange={(e) => {
              phone.onChange(e);
              handleChange(e);
            }}
          />
          {errors?.phone && <span>{errors?.phone?.message}</span>}
        </div>

        <div className="div-form">
          <label className="label-form"> Email: </label>
          <input
            type="text"
            name="email"
            value={bus["email"]}
            placeholder="Ingrese el email."
            {...email}
            onChange={(e) => {
              email.onChange(e);
              handleChange(e);
            }}
          />
          {errors?.email && <span>{errors?.email?.message}</span>}
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
          Actualizar transportista
        </button>

      </form>
    </div>
  );
};
