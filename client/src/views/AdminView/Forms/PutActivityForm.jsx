import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { putActivity } from "../../../redux/actions/putActivity";
import { useForm } from "react-hook-form";
import { getCities } from "../../../redux/actions/getCities";
import { getClean } from "../../../redux/actions/getClean";
import { Imagenes } from "../../../components/Imagenes/imagenes";
import swal from "sweetalert";
export const PutActivityForm = ({ pack }) => {

  const { adminView } = useSelector((state) => state.adminReducer);
  const dispatch = useDispatch();
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();
  const [activity, setActivity] = React.useState({
    name: pack.name,
    image: pack.image,
    price: pack.price,
    cityId: pack.cityId,
  });
  const expRegUrl =
    /(https?:\/\/(?:www\.|(?!www))[a-zA-Z0-9][a-zA-Z0-9-]+[a-zA-Z0-9]\.[^\s]{2,}|www\.[a-zA-Z0-9][a-zA-Z0-9-]+[a-zA-Z0-9]\.[^\s]{2,}|https?:\/\/(?:www\.|(?!www))[a-zA-Z0-9]+\.[^\s]{2,}|www\.[a-zA-Z0-9]+\.[^\s]{2,})/;
  const expRegSoloLetras = /^[a-zA-Z ]*$/;
  function handleChange(event) {
    if (event.target.name === "comments" || event.target.name === "score") {
      setActivity({ ...activity, [event.target.name]: [event.target.value] });
      return;
    }
    setActivity({ ...activity, [event.target.name]: event.target.value });
    console.log("Cambio: ", [event.target.name], event.target.value)
  }

  function handleSubmitActivity() {
    //e.preventDefault(); 
    dispatch(putActivity(pack.id, activity));
    swal({
      title: "Actividad editada con exito",
      icon: "success",
    })
  }

  const name = register("name", {
    required: { value: true, message: "REQUERIDO" },
    pattern: { value: expRegSoloLetras, message: "SOLO LETRAS" }
  });

  /* const image = register("image", {
    pattern: {
      value: expRegUrl,
      message: "Url no valida",
    },
  }); */

  const price = register("price", {
    required: { value: true, message: "REQUERIDO" },
    min: { value: 0, message: "Precio minimo $0" },
  });

  useEffect(() => {
    dispatch(getCities())
    return () => dispatch(getClean())
  }, [dispatch])

  return (
    <div className="div">
      <form className="form" onSubmit={handleSubmit(handleSubmitActivity)}>
        <div className="div-form">
          <label className="label-form"> Nombre: </label>
          <input
            type="text"
            name="name"
            value={activity["name"]}
            placeholder="Ingrese el nombre."
            {...name}
            onChange={(e) => {
              name.onChange(e);
              handleChange(e);
            }}
          />
          {errors?.name && <span>{errors?.name?.message}</span>}
        </div>

        <div className="div-form">
          <Imagenes setUrl={(url) => setActivity({ ...activity, image: url })} />
          {/* <label className="label-form"> Imagen: </label> */}
          {/* <input
            type="text"
            name="image"
            value={activity["image"]}
            placeholder="Ingrese una imagen."
            {...image}
            onChange={(e) => {
              image.onChange(e);
              handleChange(e);
            }}
          />
          {errors?.image && <span>{errors?.image?.message}</span>} */}
        </div>
        <div>{activity.image === pack.image ? <img src={pack.image} style={{width:"55%"}}></img> : <></> }</div>
        <div className="div-form">
          <label className="label-form"> Precio: </label>
          <input
            type="number"
            name="price"
            value={activity["price"]}
            placeholder="Ingrese el precio."
            {...price}
            onChange={(e) => {
              price.onChange(e);
              handleChange(e);
            }}
          />
          {errors?.price && <span>{errors?.price?.message}</span>}
        </div>

        <div>
        <label className="label-form"> Ciudad: </label>
          <select name="cityId" defaultValue={pack.cityId} onChange={handleChange}>
            {/* <option key="keycity" value="" disabled>Ciudad</option> */}
            {adminView.map((city) => (
              <option key={city.id} value={city.id}>
                {city.name}
              </option>
            ))}
          </select>
        </div>

        <button type="submit" className="button-form">
          {" "}
          Actualizar actividad
        </button>

      </form>
    </div>
  );
};