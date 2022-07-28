import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { useAuth } from "../../context/context";
import { Alert } from "./Alert";
import Admin from "../../views/AdminView/index";

export function Login() {
  const [user, setUser] = useState({
    mail: "",
    password: "",
<<<<<<< HEAD
    // rol: ""
=======
    rol: "",
>>>>>>> 5a67c1c270c993553e012c9efb0cdb2a3cd1f350
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
<<<<<<< HEAD
      // if(user.rol==='admin')navigate("/admin")
      // else{navigate("/home2")};
      navigate("/home2");
=======
      user.mail === "productowner@henry.com"
        ? navigate("/admin")
        : navigate("/");
>>>>>>> 5a67c1c270c993553e012c9efb0cdb2a3cd1f350
    } catch (error) {
      setError(error.message);
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
    if (!user.mail) return setError("Write an email to reset password");
    try {
      await resetPassword(user.mail);
      setError("We sent you an email. Check your inbox");
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
<<<<<<< HEAD
        {/* <label>
          Role:
          <select id="rol" onChange={(e) => setUser({ ...user, rol: e.target.value })}>
            <option value="admin">Admin</option>
            <option value="client">Client</option>
          </select>
        </label> */}
=======

>>>>>>> 5a67c1c270c993553e012c9efb0cdb2a3cd1f350
        <div className="flex items-center justify-between">
          <button
            className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
            type="submit"
          >
            Sign In
          </button>
          <a
            className="inline-block align-baseline font-bold text-sm text-blue-500 hover:text-blue-800"
            href="#!"
            onClick={handleResetPassword}
          >
            Forgot Password?
          </a>
        </div>
      </form>
      <button
        onClick={handleGoogleSignin}
        className="bg-slate-50 hover:bg-slate-200 text-black  shadow rounded border-2 border-gray-300 py-2 px-4 w-full"
      >
        Google login
      </button>
      <p className="my-4 text-sm flex justify-between px-3">
        Don't have an account?
        <Link to="/reg" className="text-blue-700 hover:text-blue-900">
          Register
        </Link>
      </p>
    </div>
  );
}
