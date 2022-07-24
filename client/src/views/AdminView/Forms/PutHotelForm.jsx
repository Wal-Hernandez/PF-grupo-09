import React from "react";
import { useDispatch} from "react-redux";
import {Link, useParams} from "react-router-dom";
import { putHotel} from '../../../redux/actions/putHotel';
export const PutHotelForm = ()=>{
const {id} =useParams()
const dispatch =useDispatch()
const [hotel, setHotel]= React.useState({name:'',location:[]});

function TransformData(x){
if(x.split(',').length===1) return x;
return JSON.parse(x)

}
console.log(hotel)
function handleChange(event) {
    setHotel( {...hotel, [event.target.name]:TransformData(event.target.value)});}
   
    function handleSubmit(e) {
    e.preventDefault();// para que era esto?
  dispatch(putHotel(id,hotel))}

    return (
        <div className="div">
      
      <form className='form'onSubmit={handleSubmit}>
    
     
     <div className="div-form">  
    <label className="label-form"> Name:</label>
        <input type="text" name='name' value={hotel['name']} 
    onChange={handleChange}/> 
    </div>
    
    
    <div className="div-form">
    <label className="label-form"> Location1</label>
   <input type="text" name='location' value={hotel['location']} 
    onChange={handleChange}/> 
    </div>
    <div className="div-form">
    <label className="label-form"> Location2</label>
   <input type="text" name='location' value={hotel['location']} 
    onChange={handleChange}/> 
    </div>

    <div className="div-form">  
    <label className="label-form"> Name:</label>
        <input type="number" name='stars' value={hotel['stars']} 
    onChange={handleChange}/> 
    </div>
    
    <div className="div-form">
    <label className="label-form"> phone:</label>
   <input type="text" name='phone' value={hotel['phone']} 
    onChange={handleChange}/> 
    </div>

    <div className="div-form">
    <label className="label-form"> price:</label>
   <input type="text" name='price' value={hotel['price']} 
    onChange={handleChange}/> 
    </div>

    <div className="div-form">
    <label className="label-form"> urlImage:</label>
   <input type="text" name='urlImage' value={hotel['urlImage']} 
    onChange={handleChange}/> 
    </div>

    <div className="div-form">
    <label className="label-form"> cityId:</label>
   <input type="number" name='cityId' value={hotel['cityId']} 
    onChange={handleChange}/> 
    </div>
    <button type ="submit" className="button-form"
    > Put City</button>
    <Link to ="/admin"> Volver</Link>
        </form>
        </div>
)

}