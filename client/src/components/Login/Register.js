import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { useAuth } from "../../context/context";
import { Alert } from "./Alert";
import { useDispatch } from "react-redux";
import { postUser } from "../../redux/actions/postUser";
//import { loadCart } from "../../redux/actions/loadCart";

//css
import "../../views/LoginView/loginView.css";
//logo
import logo from "../../images/Buspack.png"; //imagen logo
import { sendMail } from "../../redux/actions/sendMail";
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

      let storage = JSON.parse(localStorage.getItem("myCartNotLoggedin"));
      //si el storage no tiene nada mando un arreglo vacio []
      storage = storage === null ? [] : storage;
      let userDb = { ...user, storage };
      dispatch(postUser(userDb));

      localStorage.clear("myCartNotLoggedin");
      dispatch(sendMail(userDb));
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
    <div className="container w-75 bg-white mt-2 rounded">
      <div className="row align-items-stretch">
        <div className="col fotoRegister d-none d-lg-block col-md-5 col-lg-5 col-xl-6 rounded">
          <div className="py-4"></div>
          <div className="text-center">
            <h3 className="fw-bold  text-dark">
              Estas listo para comenzar la aventura?
            </h3>
          </div>
        </div>
        <div className="col bg-white p-5 rounded-end">
          <div className="text-end ">
            <img className="rounded" src={logo} width="60" alt="logo"></img>
          </div>
          <h2 className="fw-bold text-center py-5">Bienvenido</h2>

          <div className="w-full max-w-xs m-auto text-black">
            {error && <Alert message={error} />}
            <form onSubmit={handleSubmit}>
              <div className="mb-4">
                <label
                  htmlFor="name"
                  className="form-label block text-gray-700 text-sm font-bold mb-2"
                >
                  Nombre
                </label>
                <input
                  type="text"
                  name="name"
                  id="name"
                  value={user.name}
                  onChange={(e) => setUser({ ...user, name: e.target.value })}
                  className="form-control shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                  placeholder="Nombre..."
                />
              </div>
              <div className="mb-4">
                <label
                  htmlFor="surname"
                  className="form-label block text-gray-700 text-sm font-bold mb-2"
                >
                  Apellido
                </label>
                <input
                  type="text"
                  name="surname"
                  value={user.surname}
                  onChange={(e) =>
                    setUser({ ...user, surname: e.target.value })
                  }
                  className="form-control shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                  placeholder="Apellido..."
                />
              </div>
              <div className="mb-4">
                <label
                  htmlFor="email"
                  className="form-label block text-gray-700 text-sm font-bold mb-2"
                >
                  Email
                </label>
                <input
                  type="email"
                  onChange={(e) => setUser({ ...user, mail: e.target.value })}
                  className="form-control shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                  placeholder="youremail@company.tld"
                />
              </div>
              <div className="mb-4">
                <label
                  htmlFor="password"
                  className="form-label block text-gray-700 text-sm font-bold mb-2"
                >
                  Contraseña
                </label>
                <input
                  type="password"
                  onChange={(e) =>
                    setUser({ ...user, password: e.target.value })
                  }
                  className="form-control shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                  placeholder="Contraseña..."
                />
              </div>
              <div className="mb-4 ">
                <div className="d-grid">
                  <button className="btn btn-primary hover:bg-blue-700 text-black font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline">
                    Registrarse
                  </button>
                </div>
              </div>
              {/* <label>
          Role:
          <select id="rol" onChange={(e) => setUser({ ...user, rol: e.target.value })}>
            <option value="admin">Admin</option>
            <option value="client">Client</option>
          </select>
        </label> */}
              <div className="mb-4 ">
                <p>
                  ¿ya tienes una cuenta?
                  <Link to="/login" className="">
                    <button
                      className="btn btn-warning hover:bg-blue-700 text-black font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
                      type="submit"
                    >
                      Iniciar sesión
                    </button>
                  </Link>
                </p>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
}
