import React from "react";
import { useDispatch } from "react-redux";
import { useForm } from "react-hook-form";
import { PutUser } from "../../../redux/actions/putUser";
export const PutUserForm = ({ pack }) => {
    console.log(pack)
  const dispatch = useDispatch();
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();
  const [user, setUser] = React.useState({ nombre:'' , rol: pack.rol, usuario:pack.usuarioDB});
console.log(user.rol)
  function TransformData(x) {
    if (isNaN(x[0])) return x;
    return x.split(",");
  }
  function handleChange(event) {
    setUser({
      ...user,
      [event.target.name]: TransformData(event.target.value),
    });
    
  }
  function handleSubmitCity() {
    //e.preventDefault(); // para que era esto?
    dispatch(PutUser(pack.id, user));
  }

  /* const nombre = register("nombre", {
    required: { value: true, message: "REQUERIDO" },
  }); */

  /* const rol = register("rol", {
    required: { value: true, message: "REQUERIDO" },
  }); */

  return (
    <div className="div">
      <form className="form" onSubmit={handleSubmit(handleSubmitCity)}>
        <div className="div-form">
          <label className="label-form"> Nombre: </label>
        
          <input
            type="text"
            name="name"
            value={user["nombre"]}
            placeholder={pack.nombre}
            onChange={handleChange}
          />
        </div>

        <div className="div-form">
          <label className="label-form"> Rol: </label>
            
          <select name="rol" onChange={handleChange} defaultValue="client">
            <option value="admin">Administrador</option>
            <option value="banned">Baneado</option>
            <option value="client">Cliente</option>
          </select>
        </div>

        <button
          type="submit"
          className="button-form"
        
        >
          {" "}
          Actualizar
        </button>

      </form>
    </div>
  );
};