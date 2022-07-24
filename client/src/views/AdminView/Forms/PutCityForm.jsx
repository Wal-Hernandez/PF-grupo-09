import React from "react";
import { useDispatch} from "react-redux";
import {Link, useParams} from "react-router-dom";
import { putCity} from '../../../redux/actions/putCity';
export const PutCityForm = ()=>{
const {id} =useParams()
const dispatch =useDispatch()
const [city, setCity]= React.useState({name:'',location:[]});

function TransformData(x){
  if(isNaN(x[0])) return x;
  return x.split(',')
  
  }
function handleChange(event) {
 
  
    setCity( {...city, [event.target.name]:TransformData(event.target.value)});
//     setErrors(validate({
//     ...perro,
//     [event.target.name]: event.target.value
//  })); //esto es para los errores-->toca prestar atencion a cada examen de validacion
// console.log(errors)   
}
   function handleSubmit(e) {
    e.preventDefault();// para que era esto?
  dispatch(putCity(id,city))
 
  }



    return (
        <div className="div">
      
      <form className='form'onSubmit={handleSubmit}>
    
     
     <div className="div-form">  
    <label className="label-form"> Name:</label>
    {/* <input className={errors.name ? 'danger' : 'input-form'} 
    type="text" name='name' 
    value={city['name']} 
    onChange={handleChange}/>
     {errors.name && (
          <p className="danger">{errors.name}</p>
        )} */}
        <input type="text" name='name' value={city['name']} 
    onChange={handleChange}/> 
    </div>
    
    
    <div className="div-form">
    <label className="label-form"> Location:</label>
    {/* <input className={errors.temperaments? 'danger': 'input-form'} 
    type="text" name='location'
    value={city['location']} 
    onChange={handleChange}/>
    {errors.temperaments && (
          <p className="danger">{errors.temperaments}</p>
        )} */}
        <input type="text" name='location' value={city['location']} 
    onChange={handleChange}/> 
    </div>
    
    
    
    <button type ="submit" className="button-form"
    //disabled={!(!Object.entries(errors).length &&perro.name !== '' )}//Explicacion:
    //un formulario tiene 3 estados: vacio y sin errores, rellenandose con errores y 
    // relleno y sin errores. Cuando no tenga errores es la primera parte del And y
    // el otro lado es cuando un campo este lleno. Porque al llenar solo un campo, 
    // los errores estaran presentes (vacio). //Finalmente, el ! al inicio es para decir: 
    // Mientras No pase el tercer estado, desactivame esto
    
    > Put City</button>
    <Link to ="/admin"> Volver</Link>
        </form>
       
    



        </div>
)

}