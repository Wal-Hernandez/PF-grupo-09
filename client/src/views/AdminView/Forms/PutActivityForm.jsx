import React from "react";
import { useDispatch} from "react-redux";
import {Link, useParams} from "react-router-dom";
import { putActivity} from '../../../redux/actions/putActivity';
export const PutActivityForm = ()=>{
const {id} =useParams()
const dispatch =useDispatch()
const [activity, setactivity]= React.useState({name:'',description:'',price:'',cityId:0});
function handleChange(event) {
  setactivity( {...activity, [event.target.name]:event.target.value});
}
   
    function handleSubmit(e) {
    e.preventDefault();// para que era esto?
  dispatch(putActivity(id,activity))}

    return (
        <div className="div">
      
      <form className='form'onSubmit={handleSubmit}>
    
     
     <div className="div-form">  
    <label className="label-form"> Name:</label>
        <input type="text" name='name' value={activity['name']} 
    onChange={handleChange}/> 
    </div>
    
    
    <div className="div-form">
    <label className="label-form"> description</label>
   <input type="text" name='description' value={activity['description']} 
    onChange={handleChange}/> 
    </div>
 
    <div className="div-form">
    <label className="label-form"> price:</label>
   <input type="text" name='price' value={activity['price']} 
    onChange={handleChange}/> 
    </div>

   
    <div className="div-form">
    <label className="label-form"> cityId:</label>
   <input type="number" name='cityId' value={activity['cityId']} 
    onChange={handleChange}/> 
    </div>
    <button type ="submit" className="button-form"
    > Put City</button>
    <Link to ="/admin"> Volver</Link>
        </form>
        </div>
)

}