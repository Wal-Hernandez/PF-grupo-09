import React, { useState, useEffect} from "react";
import { useNavigate } from "react-router-dom";
import logo from "../../images/Buspack.png"
function Login() {
    const [input, setInput] = useState({
        name:"",
        password:"",
        user:"0",
      });

    const navigate = useNavigate();
    function changeHandle(e) {
        let { name, value } = e.target;
        if (name === "user") {
            setInput((prevInput) => ({
              ...prevInput,
              [name]: value,
            }));
          
        } else setInput({ ...input, [name]: value });
      }
    
  function submitHandle() {
    if(input.user === "1"){
        navigate("/admin")
    }else{
        navigate("/")
    }
  }
  useEffect(() => {
   console.log(input)
  }, [input]); 
  return (
    <>
      <div className="container">

        <div className="row">
            <div className="col">

            </div>
            <div className="col">
               <div className="text-end">
                  <img src={logo} width="48" alt="logo"></img>
               </div>
            </div>
        </div>
      </div>
        <div>LoginView</div>
      <form>
        <div>
          <label>Name*</label>
          <div>
            <input
              type="text"
              name="name"
              onChange={changeHandle}
              maxLength="256"
            ></input>
          </div>
        </div>
        <div>
          <label>password*</label>
          <div>
            <input
              type="password"
              name="password"
              onChange={changeHandle}
            ></input>
          </div>
        </div>
        <div>
          <div>
            <label>¿Sos admin?</label>
            <div>
              <select name="user" onChange={changeHandle} >
                 <option value="0">no</option>
                <option value="1">si</option>
               
              </select>
            </div>
          </div>
          <button onClick={submitHandle}>
            <h2>Login</h2>
          </button>
        </div>
      </form>
     
      
    </>
  );
}

export default Login;
