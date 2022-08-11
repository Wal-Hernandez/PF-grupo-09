import React from "react";
import { useDispatch } from "react-redux";
import { useForm } from "react-hook-form";
import { putPlatform } from "../../../redux/actions/putPlatform";
import swal from "sweetalert";
export const PutPlatformForm = ({ pack }) => {

  const dispatch = useDispatch();
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();
  const [platform, setPlatform] = React.useState({
    terminal: pack.terminal,
    address: pack.address,
    location: pack.location,
  });
  console.log(platform);
  function TransformData(x) {
    if (isNaN(x[0]) && x[0] !== "-")return x;
    return x.split(",");
  }


  function handleChange(event) {
    setPlatform({
      ...platform,
      [event.target.name]: TransformData(event.target.value),
    });
  }

  function handleSubmitPlatform() {
    //e.preventDefault();
    dispatch(putPlatform(pack.id, platform));
    swal({
      title: "Plataforma editada con exito",
      icon: "success",
    })
  }

  const terminal = register("terminal", {
    required: { value: true, message: "REQUERIDO" },
  });

  const address = register("address", {
    required: { value: true, message: "REQUERIDO" },
  });

  const location = register("location", {
    required: { value: true, message: "REQUERIDO" },
  });

  return (
    <div className="div">
      <form className="form" onSubmit={handleSubmit(handleSubmitPlatform)}>
        <div className="div-form">
          <label className="label-form"> Terminal: </label>
          <input
            type="text"
            name="terminal"
            value={platform["terminal"]}
            placeholder="Ingrese una terminal."
            {...terminal}
            onChange={(e) => {
              terminal.onChange(e);
              handleChange(e);
            }}
          />
          {errors?.terminal && <span>{errors?.terminal?.message}</span>}
        </div>

        <div className="div-form">
          <label className="label-form"> Dirección: </label>
          <input
            type="text"
            name="address"
            value={platform["address"]}
            placeholder="Ingrese una dirección."
            {...address}
            onChange={(e) => {
              address.onChange(e);
              handleChange(e);
            }}
          />
          {errors?.address && <span>{errors?.address?.message}</span>}
        </div>

        <div className="div-form">
          <label className="label-form"> Ubicación: </label>
          <input
            type="text"
            name="location"
            value={platform["location"]}
            {...location}
            onChange={(e) => {
              location.onChange(e);
              handleChange(e);
            }}
          />
          {errors?.location && <span>{errors?.location?.message}</span>}
        </div>

        <button type="submit" className="button-form">
          {" "}
          Actualizar plataforma
        </button>

      </form>
    </div>
  );
};
