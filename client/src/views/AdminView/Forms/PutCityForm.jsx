import React from "react";
import { useDispatch } from "react-redux";
import { useForm } from "react-hook-form";
import { putCity } from "../../../redux/actions/putCity";
import swal from "sweetalert";
import { Imagenes } from "../../../components/Imagenes/imagenes";
export const PutCityForm = ({ pack }) => {
  const dispatch = useDispatch();
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();
  const expRegSoloLetras = /^[a-zA-Z ]*$/;
  const expRegLatLon = /^(\+|-)?(?:90(?:(?:\.0{1,6})?)|(?:[0-9]|[1-8][0-9])(?:(?:\.[0-9]{1,6})?))$/;
  function TransformData(x) {
    if (isNaN(x[0]) && x[0] !== "-")return x;
    return x.split(",");
  }

  const [city, setCity] = React.useState({ name: pack.name, location: pack.location, image:pack.image });
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
  console.log(city);
  const name = register("name", {
    required: { value: true, message: "REQUERIDO" },
    pattern: { value: expRegSoloLetras, message: "SOLO LETRAS" }
  });

  const location = register("location"/* , {
    required: { value: true, message: "REQUERIDO" }, }*/
  );

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
            type="text"
            name="location"
            value={city["location"]}
            defaultValue={pack.location}
            placeholder="Ingrese una ubicación."
            {...location}
            onChange={(e) => {
              location.onChange(e);
              handleChange(e);
            }}
          />
          {errors?.location && <span>{errors?.location?.message}</span>}
        </div>
        <div className="div-form">
        <Imagenes setUrl={(url) => setCity({ ...city, image: [url] })} />
          </div>
          <div>{city.image === pack.image ? <img src={pack.image} style={{width:"55%"}}></img> : <></> }</div>
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
          Actualizar ciudad
        </button>

      </form>
    </div>
  );
};
