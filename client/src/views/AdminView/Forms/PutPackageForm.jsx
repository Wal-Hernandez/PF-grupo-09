import React from "react";
import { useDispatch} from "react-redux";
import {Link, useParams} from "react-router-dom";
import { putPackage} from '../../../redux/actions/putPackage';
export const PutPackageForm = ()=>{
const {id} =useParams()
const dispatch =useDispatch()
const [packages, setPackages]= React.useState({start_date:'',end_date:'',name:'', 
price:1, discount:1, 
stock: 1, plattformId: 0, 
businessId: 0, cityId: 0, 
hotelId: 0, activity:[]});
console.log(packages)
function TransformData(x){
  return x.split(',')
  }


function handleChange(event) {
    if(event.target.name === 'activity'){
        setPackages( {...packages, [event.target.name]:TransformData(event.target.value)});
        return} 
    setPackages( {...packages, [event.target.name]:event.target.value});
}
   
    function handleSubmit(e) {
    e.preventDefault();// para que era esto?
  dispatch(putPackage(id,packages))}

    return (
        <div className="div">
      
      <form className='form'onSubmit={handleSubmit}>
    
     
     <div className="div-form">  
    <label className="label-form"> name:</label>
        <input type="text" name='name' value={packages['name']} 
    onChange={handleChange}/> 
    </div>
    
    
    <div className="div-form">
    <label className="label-form"> start_date</label>
   <input type="text" name='start_date' value={packages['start_date']} 
    onChange={handleChange}/> 
    </div>
 
    <div className="div-form">
    <label className="label-form"> end_date:</label>
   <input type="text" name='end_date' value={packages['end_date']} 
    onChange={handleChange}/> 
    </div>

    <div className="div-form">
    <label className="label-form"> price:</label>
   <input type="number" name='price' value={packages['price']} 
    onChange={handleChange}/> 
    </div>

    <div className="div-form">
    <label className="label-form"> discount:</label>
   <input type="number" name='discount' value={packages['discount']} 
    onChange={handleChange}/> 
    </div>


    <div className="div-form">
    <label className="label-form"> stock:</label>
   <input type="number" name='stock' value={packages['stock']} 
    onChange={handleChange}/> 
    </div>


    <div className="div-form">
    <label className="label-form"> plattformId:</label>
   <input type="number" name='plattformId' value={packages['plattformId']} 
    onChange={handleChange}/> 
    </div>


    <div className="div-form">
    <label className="label-form"> businessId:</label>
   <input type="number" name='businessId' value={packages['businessId']} 
    onChange={handleChange}/> 
    </div>


    <div className="div-form">
    <label className="label-form"> cityId:</label>
   <input type="number" name='cityId' value={packages['cityId']} 
    onChange={handleChange}/> 
    </div>


    <div className="div-form">
    <label className="label-form"> hotelId:</label>
   <input type="number" name='hotelId' value={packages['hotelId']} 
    onChange={handleChange}/> 
    </div>

    <div className="div-form">
    <label className="label-form"> activity:</label>
   <input type="text" name='activity' value={packages['activity']} 
    onChange={handleChange}/> 
    </div>

    <button type ="submit" className="button-form"
    > Put Platform</button>
    <Link to ="/admin"> Volver</Link>
        </form>
        </div>
)

}