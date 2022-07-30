import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { useAuth } from "../../context/context";
import { Alert } from "./Alert";
import { useDispatch } from "react-redux";
import { postUser } from "../../redux/actions/postUser";
import { loadCart } from "../../redux/actions/loadCart";
export function Register() {
  const { signup } = useAuth();
  const dispatch = useDispatch();
  let regexName = /^[A-Z][a-z]{3,10}$/;

  const [user, setUser] = useState({
    name: "",
    surname: "",
    mail: "",
    rol: "client",
    password: "",
  });

  console.log(user);
  const [error, setError] = useState("");
  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();
    setError("");

    if (!user.name.length) {
      return setError("El campo nombre es obligatorio");
    }
    if (!regexName.test(user.name)) {
      return setError(
        "El nombre debe empezar con mayuscula, contener mas de 3 caractares y no se aceptan numeros"
      );
    }

    if (!user.surname.length) {
      return setError("El campo apellido es obligatorio");
    }
    if (!regexName.test(user.surname)) {
      return setError(
        "El nombre debe empezar con mayuscula contener mas de 3 caractares y no se aceptan numeros"
      );
    }
    try {
      await signup(user.mail, user.password, user.rol, user.name, user.surname);
      let userDb = { ...user };
      console.log(userDb);
       dispatch(postUser(userDb));
      navigate("/");
    } catch (error) {
      console.log(error.code);
      if (error.code === "auth/invalid-email") {
        setError("Todos los campos son obligatorios");
      }
      if (error.code === "auth/email-already-in-use") {
        setError("El email ya esta en uso");
      }
      if (error.code === "auth/weak-password") {
        setError("La contraseña debe tener al menos 6 caracteres");
      }
      if (error.code === "auth/missing-email") {
        setError("El campo mail es obligatorio");
      }
    }
  };

  return (
    <div className="w-full max-w-xs m-auto text-black">
      {error && <Alert message={error} />}

      <form
        onSubmit={handleSubmit}
        className="bg-white shadow-md rounded px-8 pt-6 pb-6 mb-4"
      >
        <div className="mb-4">
          <label
            htmlFor="name"
            className="block text-gray-700 text-sm font-bold mb-2"
          >
            Nombre
          </label>
          <input
            type="text"
            name="name"
            value={user.name}
            onChange={(e) => setUser({ ...user, name: e.target.value })}
            className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
            placeholder=""
          />
        </div>
        <div className="mb-4">
          <label
            htmlFor="surname"
            className="block text-gray-700 text-sm font-bold mb-2"
          >
            Apellido
          </label>
          <input
            type="text"
            name="surname"
            value={user.surname}
            onChange={(e) => setUser({ ...user, surname: e.target.value })}
            className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
            placeholder=""
          />
        </div>
        <div className="mb-4">
          <label
            htmlFor="email"
            className="block text-gray-700 text-sm font-bold mb-2"
          >
            Email
          </label>
          <input
            type="email"
            onChange={(e) => setUser({ ...user, mail: e.target.value })}
            className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
            placeholder="youremail@company.tld"
          />
        </div>

        <div className="mb-4">
          <label
            htmlFor="password"
            className="block text-gray-700 text-sm font-bold mb-2"
          >
            Password
          </label>
          <input
            type="password"
            onChange={(e) => setUser({ ...user, password: e.target.value })}
            className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
            placeholder="*************"
          />
        </div>
        {/* <label>
          Role:
          <select id="rol" onChange={(e) => setUser({ ...user, rol: e.target.value })}>
            <option value="admin">Admin</option>
            <option value="client">Client</option>
          </select>
        </label> */}
        <button className="bg-blue-500 hover:bg-blue-700 text-black font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline">
          Register
        </button>
      </form>
      <p className="my-4 text-sm flex justify-between px-3">
        Already have an Account?
        <Link to="/login" className="text-blue-700 hover:text-blue-900">
          Login
        </Link>
      </p>
    </div>
  );
}
