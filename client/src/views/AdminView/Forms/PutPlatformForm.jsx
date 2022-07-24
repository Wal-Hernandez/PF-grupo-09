import React from "react";
import { useDispatch} from "react-redux";
import {Link, useParams} from "react-router-dom";
import { putPlatform} from '../../../redux/actions/putPlatform';
export const PutPlatformForm = ()=>{
const {id} =useParams()
const dispatch =useDispatch()
const [platform, setPlatform]= React.useState({terminal:'',adress:'',location:''});

function TransformData(x){
  if(isNaN(x[0])) return x;
  return x.split(',')
  
  }


function handleChange(event) {
  setPlatform( {...platform, [event.target.name]:TransformData(event.target.value)});
}
   
    function handleSubmit(e) {
    e.preventDefault();// para que era esto?
  dispatch(putPlatform(id,platform))}

    return (
        <div className="div">
      
      <form className='form'onSubmit={handleSubmit}>
    
     
     <div className="div-form">  
    <label className="label-form"> terminal:</label>
        <input type="text" name='terminal' value={platform['terminal']} 
    onChange={handleChange}/> 
    </div>
    
    
    <div className="div-form">
    <label className="label-form"> adress</label>
   <input type="text" name='adress' value={platform['adress']} 
    onChange={handleChange}/> 
    </div>
 
    <div className="div-form">
    <label className="label-form"> price:</label>
   <input type="text" name='price' value={platform['price']} 
    onChange={handleChange}/> 
    </div>

   
    <button type ="submit" className="button-form"
    > Put City</button>
    <Link to ="/admin"> Volver</Link>
        </form>
        </div>
)

}