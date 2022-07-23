import React from "react";
import { useDispatch} from "react-redux";
import {Link, useParams} from "react-router-dom";
import { putCity} from '../../../redux/actions/putCity';
export const EditForm = ()=>{
const {id} =useParams()
const dispatch =useDispatch()
// const [city, setCity]= React.useState({name:'',location: ''});

// function handleChange(event) {
 
  
//     setCity( {...city, [event.target.name]: event.target.value});
// //     setErrors(validate({
// //     ...perro,
// //     [event.target.name]: event.target.value
// //  })); //esto es para los errores-->toca prestar atencion a cada examen de validacion
// // console.log(errors)   
// }
//    function handleSubmit(e) {
//     e.preventDefault();// para que era esto?
//   dispatch(putCity(id,city))
 
//   }



    return (
        <div>
      
    Algo
    <input/>
    
    <button>Go</button>



        </div>
)

}

