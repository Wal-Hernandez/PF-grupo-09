import React from "react";
import { useDispatch } from "react-redux";
import { putActivity } from "../../../redux/actions/putActivity";
import { useForm } from "react-hook-form";
export const PutActivityForm = ({ pack}) => {
  
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
    score: pack.score,
    comments: pack.comments,
    cityId: pack.cityId,
  });
  const expRegUrl =
    /(https?:\/\/(?:www\.|(?!www))[a-zA-Z0-9][a-zA-Z0-9-]+[a-zA-Z0-9]\.[^\s]{2,}|www\.[a-zA-Z0-9][a-zA-Z0-9-]+[a-zA-Z0-9]\.[^\s]{2,}|https?:\/\/(?:www\.|(?!www))[a-zA-Z0-9]+\.[^\s]{2,}|www\.[a-zA-Z0-9]+\.[^\s]{2,})/;

  function handleChange(event) {
    if (event.target.name === "comments" || event.target.name === "score") {
      setActivity({ ...activity, [event.target.name]: [event.target.value] });
      return;
    }
    setActivity({ ...activity, [event.target.name]: event.target.value });
  }

  function handleSubmitActivity() {
    //e.preventDefault(); // para que era esto?
    dispatch(putActivity(pack.id, activity));
  }

  const name = register("name", {
    required: { value: true, message: "REQUERIDO" },
  });

  const image = register("image", {
    pattern: {
      value: expRegUrl,
      message: "Url no valida",
    },
  });

  const price = register("price", {
    required: { value: true, message: "REQUERIDO" },
    min: { value: 0, message: "Precio minimo $0" },
  });

  const cityId = register("cityId", {
    required: { value: true, message: "REQUERIDO" },
  });

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
          <label className="label-form"> Imagen: </label>
          <input
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
          {errors?.image && <span>{errors?.image?.message}</span>}
        </div>

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

        <div className="div-form">
          <label className="label-form"> Id ciudad: </label>
          <input
            type="number"
            name="cityId"
            value={activity["cityId"]}
            placeholder="Ingrese el Id."
            {...cityId}
            onChange={(e) => {
              cityId.onChange(e);
              handleChange(e);
            }}
          />
          {errors?.cityId && <span>{errors?.cityId?.message}</span>}
        </div>

        <button type="submit" className="button-form">
          {" "}
          Put Activity
        </button>

      </form>
    </div>
  );
};
