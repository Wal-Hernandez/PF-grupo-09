import React from "react";
import { useDispatch } from "react-redux";
import { useForm } from "react-hook-form";
import { putCity } from "../../../redux/actions/putCity";
import swal from "sweetalert";
export const PutCityForm = ({ pack }) => {
  const dispatch = useDispatch();
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();
  const [city, setCity] = React.useState({ name: pack.name, location: pack.location });

  function TransformData(x) {
    if (isNaN(x[0])) return x;
    return x.split(",");
  }
  function handleChange(event) {
    setCity({
      ...city,
      [event.target.name]: TransformData(event.target.value),
    });
    //     setErrors(validate({
    //     ...perro,
    //     [event.target.name]: event.target.value
    //  })); //esto es para los errores-->toca prestar atencion a cada examen de validacion
    // console.log(errors)
  }
  function handleSubmitCity() {
    //e.preventDefault(); // para que era esto?
    dispatch(putCity(pack.id, city));
    swal({
      title: "Ciudad editada con exito",
      icon: "success",
    })
  }

  const name = register("name", {
    required: { value: true, message: "REQUERIDO" },
  });

  const location = register("location", {
    required: { value: true, message: "REQUERIDO" },
  });

  return (
    <div className="div">
      <form className="form" onSubmit={handleSubmit(handleSubmitCity)}>
        <div className="div-form">
          <label className="label-form"> Nombre: </label>
          {/* <input className={errors.name ? 'danger' : 'input-form'} 
    type="text" name='name' 
    value={city['name']} 
    onChange={handleChange}/>
     {errors.name && (
          <p className="danger">{errors.name}</p>
        )} */}
          <input
            type="text"
            name="name"
            value={city["name"]}
            placeholder="Ingrese el nombre de la ciudad."
            {...name}
            onChange={(e) => {
              name.onChange(e);
              handleChange(e);
            }}
          />
          {errors?.name && <span>{errors?.name?.message}</span>}
        </div>

        <div className="div-form">
          <label className="label-form"> Ubicación: </label>
          {/* <input className={errors.temperaments? 'danger': 'input-form'} 
    type="text" name='location'
    value={city['location']} 
    onChange={handleChange}/>
    {errors.temperaments && (
          <p className="danger">{errors.temperaments}</p>
        )} */}
          <input
            type="number"
            name="location"
            value={city["location"]}
            placeholder="Ingrese una ubicación."
            {...location}
            onChange={(e) => {
              location.onChange(e);
              handleChange(e);
            }}
          />
          {errors?.location && <span>{errors?.location?.message}</span>}
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
          Put City
        </button>

      </form>
    </div>
  );
};
