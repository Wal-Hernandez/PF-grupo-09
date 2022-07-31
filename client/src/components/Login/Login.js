import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { useAuth } from "../../context/context";
import { Alert } from "./Alert";
import Admin from "../../views/AdminView/index";
import { useDispatch } from "react-redux";
import { loadCart } from "../../redux/actions/loadCart";
import "../../views/LoginView/loginView.css";

import logo from "../../images/Buspack.png" //imagen logo

import { app } from "../../Firebase/firebase-config";
import {  doc, getDoc,getFirestore } from "firebase/firestore";
export function Login() {
  const dispatch = useDispatch();
  const [user, setUser] = useState({
    mail: "",
    password: "",
    rol: "",
  });
  const firestore = getFirestore(app);
  const { login, loginWithGoogle, resetPassword} = useAuth();
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


    const getRol= async(uid) => {
      // obtener rol
      const docuRef = doc(firestore, `usuarios/${uid}`);
      const docuCifrada = await getDoc(docuRef);
      const infoFinal = docuCifrada.data().rol;
      return infoFinal;
    }

  const handleGoogleSignin = async () => {
    try {
      await loginWithGoogle()
      .then(a=> a.user.uid)
      .then(r=> getRol(r))
      .then(r=>{if (!r){alert("Registrate,Boloo")}
    else{ if (r==='client') navigate('/')
    else{navigate('/admin')}
  
    
    }})
      
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

   
    <div className="container w-75 bg-white mt-5 rounded">

    <div className="row align-items-stretch ">
        <div className="col fotoLogin d-none d-lg-block col-md-5 col-lg-5 col-xl-6 rounded">
          <div className="py-5"></div>
          <div className="text-center">
          <h3 className="fw-bold  text-white">Estas listo para comenzar la aventura?</h3>
          </div>
        </div>
        <div className="col bg-white p-5 rounded-end">
           <div className="text-end">
              <img className="rounded" src={logo} width="60" alt="logo"></img>
           </div>
           <h2 className="fw-bold text-center py-5">Bienvenido</h2> 
               {/*/ Login */}
               {error && <Alert message={error} />}
             <form  onSubmit={handleSubmit}>
                  
                <div className="mb-4">
                <label
                 htmlFor="mail"
                 className="form-label block text-gray-700 text-sm font-bold mb-2"
                 >
                Correo Electronico
                </label>
                <input
                  type="mail"
                  name="mail"
                  id="mail"
                  onChange={handleChange}
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
                    name="password"
                    id="password"
                    onChange={handleChange}
                    className="form-control shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                    placeholder="*************"
                  />
                </div>
                <div className="d-grid">
                  <button
                  className="btn btn-primary hover:bg-blue-700 text-black font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
                  type="submit"
                  >
                  Iniciar sesión
                  </button>
                </div>
                <div className="my-3">
                <span>
                    <a 
                      href="#!" 
                      onClick={handleResetPassword}>
                      ¿Olvidaste tu contraseña?
                    </a>
                 </span>
                 </div>
                 <div className="mb-4 ">
                  <p>
                  ¿No tienes una cuenta?
                  <Link to="/reg">
                  <button
                  className="btn btn-warning hover:bg-blue-700 text-black font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
                  type="submit"
                  >
                  Registrarte
                  </button>
                  </Link>
                  </p>
                 </div>
                 <button
        onClick={handleGoogleSignin}
        className="bg-slate-50 hover:bg-slate-200 text-black  shadow rounded border-2 border-gray-300 py-2 px-4 w-full"
      >
        Google login
      </button> 
                
             </form>
        </div>
 </div>
 </div>
  
   

  );
}
