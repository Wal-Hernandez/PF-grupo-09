import React from "react";
import { useDispatch } from "react-redux";
import { useForm } from "react-hook-form";
import { PutUser } from "../../../redux/actions/putUser";
import swal from "sweetalert";

export const PutUserForm = ({ pack }) => {
  console.log(pack);
  const dispatch = useDispatch();
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();
  const [user, setUser] = React.useState({
    rol: pack.rol,
    usuario: pack.usuarioDB,
  });
  console.log(user.rol);
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
    swal({
      title: "Confirmar accion",
      text: "¿Está seguro que quiere actualizar el usuario?",
      icon: "warning",
      buttons: true,
      dangerMode: true,
    }).then((willDelete) => {
      if (willDelete) {
        dispatch(PutUser(pack.id, user));
        swal("El usuario se actualizó con éxito", {
          icon: "success",
        });
      } else {
        swal("El usuario no ha sido actualizado", {
          icon: "success",
        });
      }
    });
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
            name="nombre"
            value={pack.nombre}
            placeholder="Ingrese el nombre del usuario."
            disabled
          />
        </div>

        <div className="div-form">
          <label className="label-form"> Apellido: </label>

          <input
            type="text"
            name="apellido"
            value={pack.apellido}
            placeholder="Ingrese el apellido del usuario."
            disabled
          />
        </div>

        <div className="div-form">
          <label className="label-form"> Correo electronico: </label>

          <input
            type="text"
            name="correo"
            value={pack.correo}
            placeholder="Ingrese el mail del usuario."
            disabled
          />
        </div>

        <div className="div-form">
          <label className="label-form"> Rol: </label>

          <select name="rol" onChange={handleChange} defaultValue={pack.rol}>
            <option value="admin">Administrador</option>
            <option value="banned">Baneado</option>
            <option value="client">Cliente</option>
          </select>
        </div>

        <button type="submit" className="button-form">
          {" "}
          Actualizar usuario
        </button>
      </form>
    </div>
  );
};
