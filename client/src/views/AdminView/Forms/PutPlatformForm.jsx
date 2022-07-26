import React from "react";
import { useDispatch} from "react-redux";
import {Link, useParams} from "react-router-dom";
import { putPlatform} from '../../../redux/actions/putPlatform';
export const PutPlatformForm = ()=>{
const {id} =useParams()
const dispatch =useDispatch()
const [platform, setPlatform]= React.useState({terminal:'',address:'',location:[]});
console.log(platform)
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
    <label className="label-form"> address</label>
   <input type="text" name='address' value={platform['address']} 
    onChange={handleChange}/> 
    </div>
 
    <div className="div-form">
    <label className="label-form"> location:</label>
   <input type="text" name='location' value={platform['location']} 
    onChange={handleChange}/> 
    </div>

   
    <button type ="submit" className="button-form"
    > Put Platform</button>
    <Link to ="/admin"> Volver</Link>
        </form>
        </div>
)

}