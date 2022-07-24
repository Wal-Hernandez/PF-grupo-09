import React from "react";
import { useDispatch} from "react-redux";
import {Link, useParams} from "react-router-dom";
import { putHotel} from '../../../redux/actions/putHotel';
export const PutHotelForm = ()=>{
const {id} =useParams()
const dispatch =useDispatch()
const [hotel, setHotel]= React.useState({name:'',location:[], phone:'',price:'',stars:0, pool: true,wifi: true,gym: true, urlImage: []});
console.log(hotel)
function TransformData(x){
  if(isNaN(x[0])) return x;
  return x.split(',')
  }

function handleChange(event) {
 if(event.target.name === "location"){
    setHotel( {...hotel, [event.target.name]:TransformData(event.target.value)});
  return
 }
 if(event.target.name === "urlImage"){
  setHotel( {...hotel, [event.target.name]:[(event.target.value)]});
return
}

 setHotel( {...hotel, [event.target.name]:event.target.value});}
   



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
    <label className="label-form"> Location</label>
   <input type="text" name='location' value={hotel['location']} 
    onChange={handleChange}/> 
    </div>
 
    <div className="div-form">  
    <label className="label-form"> stars:</label>
        <input type="stars" name='stars' value={hotel['stars']} 
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