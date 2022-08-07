import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useForm } from "react-hook-form";
import { putHotel } from "../../../redux/actions/putHotel";
import { getCities } from "../../../redux/actions/getCities";
import { getClean } from "../../../redux/actions/getClean";
import { Imagenes } from "../../../components/Imagenes/imagenes";
import swal from "sweetalert";

export const PutHotelForm = ({ pack }) => {
  const dispatch = useDispatch();
  const { cities } = useSelector((state) => state.adminReducer);
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();
  const [hotel, setHotel] = React.useState({
    name: pack.name,
    location: pack.location,
    stars: pack.stars,
    phone: pack.phone,
    price: pack.price,
    pool: pack.pool,
    wifi: pack.wifi,
    gym: pack.gym,
    urlImage: pack.urlImage,
    cityId: pack.cityId
  });
  console.log(pack.id);
  const expRegUrl =
    /(https?:\/\/(?:www\.|(?!www))[a-zA-Z0-9][a-zA-Z0-9-]+[a-zA-Z0-9]\.[^\s]{2,}|www\.[a-zA-Z0-9][a-zA-Z0-9-]+[a-zA-Z0-9]\.[^\s]{2,}|https?:\/\/(?:www\.|(?!www))[a-zA-Z0-9]+\.[^\s]{2,}|www\.[a-zA-Z0-9]+\.[^\s]{2,})/;
  function TransformData(x) {
    if (isNaN(x[0])) return x;
    return x.split(",");
  }

  useEffect(() => {
    dispatch(getCities())
    return () => dispatch(getClean())
  }, [dispatch])

  function handleChange(event) {
    if (event.target.name === "location") {
      setHotel({
        ...hotel,
        [event.target.name]: TransformData(event.target.value),
      });
      return;
    }

    if (
      event.target.name === "gym" ||
      event.target.name === "pool" ||
      event.target.name === "wifi"
    ) {
      if (event.target.value === "true") {
        setHotel({ ...hotel, [event.target.name]: true });
      } else {
        setHotel({ ...hotel, [event.target.name]: false });
      }
      return;
    }

    setHotel({ ...hotel, [event.target.name]: event.target.value });
    console.log(hotel);
  }

  function handleSubmitHotel(e) {
    //e.preventDefault(); // para que era esto?
    dispatch(putHotel(pack.id, hotel));
    //e.target.reset()
    swal({
      title: "Hotel editado con éxito",
      icon: "success",
    });
  }

  const name = register("name", {
    required: { value: true, message: "REQUERIDO" },
  });

  const location = register("location", {
    required: { value: true, message: "REQUERIDO" },
  });

  const stars = register("stars", {
    required: { value: true, message: "REQUERIDO" },
    min: { value: 1, message: "Minimo 1 estrella" },
    max: { value: 5, message: "Maximo 5 estrellas" },
  });

  const phone = register("phone", {
    required: { value: true, message: "REQUERIDO" },
  });

  const price = register("price", {
    required: { value: true, message: "REQUERIDO" },
  });


  return (
    <div className="div">
      <form className="form" onSubmit={handleSubmit(handleSubmitHotel)}>
        <div className="div-form">
          <label className="label-form"> Nombre: </label>
          <input
            type="text"
            name="name"
            value={hotel["name"]}
            placeholder="Ingrese el nombre del hotel."
            {...name}
            onChange={(e) => {
              name.onChange(e);
              handleChange(e);
            }}
          />
          {errors?.name && <span>{errors?.name?.message}</span>}
        </div>

        <div className="div-form">
          <label className="label-form"> Ubicacion: </label>
          <input
            type="text"
            name="location"
            value={hotel["location"]}
            placeholder="Ingrese la ubicacion del hotel (coordenadas)."
            {...location}
            onChange={(e) => {
              location.onChange(e);
              handleChange(e);
            }}
          />
          {errors?.location && <span>{errors?.location?.message}</span>}
        </div>

        <div className="div-form">
          <label className="label-form"> Estrellas: </label>
          <input
            type="number"
            name="stars"
            value={hotel["stars"]}
            placeholder="Cantidad de estrellas del hotel."
            {...stars}
            onChange={(e) => {
              stars.onChange(e);
              handleChange(e);
            }}
          />
          {errors?.stars && <span>{errors?.stars?.message}</span>}
        </div>

        <div className="div-form">
          <label className="label-form"> Telefono: </label>
          <input
            type="number"
            name="phone"
            value={hotel["phone"]}
            placeholder="Telefono del hotel."
            {...phone}
            onChange={(e) => {
              phone.onChange(e);
              handleChange(e);
            }}
          />
          {errors?.phone && <span>{errors?.phone?.message}</span>}
        </div>

        <div className="div-form">
          <label className="label-form"> Precio: </label>
          <input
            type="number"
            name="price"
            value={hotel["price"]}
            placeholder="Ingrese el precio del hotel."
            {...price}
            onChange={(e) => {
              price.onChange(e);
              handleChange(e);
            }}
          />
          {errors?.price && <span>{errors?.price?.message}</span>}
        </div>
        <div className="div-form">
          <Imagenes setUrl={(url) => setHotel({ ...hotel, urlImage: [url] })} />
          {/* <label className="label-form"> Imagen: </label>
          <input
            type="text"
            name="urlImage"
            value={hotel["urlImage"]}
            placeholder="Ingrese una URL."
            {...urlImage}
            onChange={(e) => {
              urlImage.onChange(e);
              handleChange(e);
            }}
          />
          {errors?.urlImage && <span>{errors?.urlImage?.message}</span>} */}
        </div>

        <div className="div-form">
          <label className="label-form"> Gimnasio </label>
          <select name="gym" onChange={handleChange} defaultValue="">
            <option value="">-</option>
            <option value="true">Si</option>
            <option value="false">No</option>
          </select>
        </div>

        <div className="div-form">
          <label className="label-form"> Pool </label>
          <select name="pool" onChange={handleChange} defaultValue="">
            <option value="">-</option>
            <option value="true">Si</option>
            <option value="false">No</option>
          </select>
        </div>

        <div className="div-form">
          <label className="label-form"> Wifi </label>
          <select name="wifi" onChange={handleChange} defaultValue="">
            <option value="">-</option>
            <option value="true">Si</option>
            <option value="false">No</option>
          </select>
        </div>

        <div className="div-form">
          <select name="cityId" defaultValue="" onChange={handleChange}>
            <option key="keycity" value="" disabled>Ciudad</option>
            {cities.map((city) => (
              <option key={city.id} value={city.id}>
                {city.name}
              </option>
            ))}
          </select>
        </div>

        <button type="submit" className="button-form">
          {" "}
          Put Hotel
        </button>
      </form>
    </div>
  );
};
