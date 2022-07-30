import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { useAuth } from "../../context/context";
import { Alert } from "./Alert";
import Admin from "../../views/AdminView/index";
import { useDispatch } from "react-redux";
import { loadCart } from "../../redux/actions/loadCart";

export function Login() {
  const dispatch = useDispatch();
  const [user, setUser] = useState({
    mail: "",
    password: "",
    rol: "",
  });
  const { login, loginWithGoogle, resetPassword } = useAuth();
  const [error, setError] = useState("");
  const navigate = useNavigate();
  console.log(user);
  const handleSubmit = async (e) => {
    e.preventDefault();
    setError("");
    try {
      await login(user.mail, user.password);
      if(user.mail === "productowner@henry.com")
        { navigate("/admin")}
        else{ 
          dispatch(loadCart(user.mail));
          navigate("/");  
        }
        
          
        
    } catch (error) {
      console.log(error.code);
      if (error.code === "auth/user-not-found") {
        setError("Usuario o contraseña incorrectos");
      }
      if (error.code === "auth/wrong-password") {
        setError("Contraseña incorrecta");
      }
    }
  };

  const handleChange = ({ target: { value, name } }) =>
    setUser({ ...user, [name]: value });

  const handleGoogleSignin = async () => {
    try {
      await loginWithGoogle();
      navigate("/");
    } catch (error) {
      setError(error.message);
    }
  };

  const handleResetPassword = async (e) => {
    e.preventDefault();
    if (!user.mail)
      return setError("Escribe tu mail para resetear tu contrsaeña");
    try {
      await resetPassword(user.mail);
      setError("Te enviamos un mail para recuperar tu contraseña");
    } catch (error) {
      setError(error.message);
    }
  };

  return (
    <div className="w-full max-w-xs m-auto">
      {error && <Alert message={error} />}

      <form
        onSubmit={handleSubmit}
        className="bg-white shadow-md rounded px-8 pt-6 pb-8 mb-4"
      >
        <div className="mb-4">
          <label
            htmlFor="mail"
            className="block text-gray-700 text-sm font-bold mb-2"
          >
            Email
          </label>
          <input
            type="mail"
            name="mail"
            id="mail"
            onChange={handleChange}
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
            name="password"
            id="password"
            onChange={handleChange}
            className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
            placeholder="*************"
          />
        </div>

        <div className="flex items-center justify-between">
          <button
            className="bg-blue-500 hover:bg-blue-700 text-black font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
            type="submit"
          >
            Sign In
          </button>
          <a href="#!" onClick={handleResetPassword}>
            Forgot Password?
          </a>
        </div>
      </form>
      {/* <button
        onClick={handleGoogleSignin}
        className="bg-slate-50 hover:bg-slate-200 text-black  shadow rounded border-2 border-gray-300 py-2 px-4 w-full"
      >
        Google login
      </button> */}
      <p>
        Don't have an account?
        <Link to="/reg">Register</Link>
      </p>
    </div>
  );
}
