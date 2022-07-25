import React from "react";
import { useDispatch} from "react-redux";
import {Link} from "react-router-dom";
import { postActivity} from '../../../redux/actions/postActivity';
import { postCity} from '../../../redux/actions/postCity';
import { postBus} from '../../../redux/actions/postBus';

function Ejemplo({lang}) {
  const dispatch = useDispatch();
  const [city, setCity]= React.useState({name:'',location:[]});
  const [bus, setBus]= React.useState({patent:'',seating:0});
  const [activity, setactivity]= React.useState({name:'',description:'',price:'',cityId:0});
  console.log(bus)
function TransformData(x){
  if(isNaN(x[0])) return x;
  return x.split(',')
  
  }
function handleChangeCity(event) {
 
  
    setCity( {...city, [event.target.name]:TransformData(event.target.value)});

}
   function handleSubmitCity(e) {
    e.preventDefault();// para que era esto?
  dispatch(postCity(city))
 
  }
  
  function handleChangeBus(event) {
 
  
    setBus( {...bus, [event.target.name]:event.target.value});
     
  }
  function handleSubmitBus(e) {
    e.preventDefault();
  dispatch(postBus(bus))
 
  }

  function handleChangeActivity(event) {
    setactivity( {...activity, [event.target.name]:event.target.value});
  }
     
      function handleSubmitActivity(e) {
      e.preventDefault();
    dispatch(postActivity(activity))}


  
  if(lang===''){
return(
<div>
Waiting for the Data

</div>


)


  }


  if (lang === 'Hotel') {
    return (
      <form className='form'>
    
     
     <div className="div-form">  
    <label className="label-form"> Name:</label>
        <input type="text" name='name' /> 
    </div>
    
    
    <div className="div-form">
    <label className="label-form"> Location</label>
   <input type="text" name='location' /> 
    </div>
 
    <div className="div-form">  
    <label className="label-form"> stars:</label>
        <input type="stars" name='stars'/> 
    </div>
    
    <div className="div-form">
    <label className="label-form"> phone:</label>
   <input type="text" name='phone'/> 
    </div>

    <div className="div-form">
    <label className="label-form"> price:</label>
   <input type="text" name='price' /> 
    </div>

    <div className="div-form">
    <label className="label-form"> urlImage:</label>
   <input type="text" name='urlImage' /> 
    </div>

    <div className="div-form">
    <label className="label-form"> cityId:</label>
   <input type="number" name='cityId' /> 
    </div>
    <button type ="submit" className="button-form"
    > Create Hotel</button>
    
        </form>
      )
  }
 if(lang === 'Plattform')


  return (
    <form className='form'>
    
     
    <div className="div-form">  
   <label className="label-form"> Terminal:</label>
       <input type="text" name='terminal'/> 
   </div>
   
   
   <div className="div-form">
   <label className="label-form"> Adress</label>
  <input type="text" name='adress'/> 
   </div>

   <div className="div-form">
   <label className="label-form"> Price:</label>
  <input type="text" name='price'/> 
   </div>

  
   <button type ="submit" className="button-form"
   > Create Plattform</button>
       </form>
    );
 if (lang === 'City')
 return(
  <div className="div">

<form className='form' onSubmit={handleSubmitCity}>


<div className="div-form">  
<label className="label-form"> Name:</label>
  <input type="text" name='name' value={city['name']} 
    onChange={handleChangeCity}/> 
</div>


<div className="div-form">
<label className="label-form"> Location:</label>
  <input type="text" name='location' value={city['location']} 
    onChange={handleChangeCity} /> 
</div>



<button type ="submit" className="button-form"> Create City</button>
  </form>
  </div>
)
if (lang === 'Bus')
return(
<form className='form' onSubmit={handleSubmitBus}>
    
     
<div className="div-form">  
<label className="label-form"> Patent:</label>
   <input type="text" name='patent' value={bus['patent']} 
    onChange={handleChangeBus}
/> 
</div>


<div className="div-form">
<label className="label-form"> Seating:</label>

   <input type="text" name='seating' value={bus['seating']} 
    onChange={handleChangeBus}
/> 
</div>



<button type ="submit" className="button-form"> Create Bus</button>

   </form>
)
if (lang ==='Activity')
return(
  <form className='form' onSubmit={handleSubmitActivity}>
    
     
  <div className="div-form">  
 <label className="label-form"> Name:</label>
     <input type="text" name='name' value={activity['name']} 
    onChange={handleChangeActivity}/> 
 </div>
 
 
 <div className="div-form">
 <label className="label-form"> description</label>
<input type="text" name='description' value={activity['description']} 
    onChange={handleChangeActivity}/> 
 </div>

 <div className="div-form">
 <label className="label-form"> price:</label>
<input type="text" name='price'  value={activity['price']} 
    onChange={handleChangeActivity}/> 
 </div>


 <div className="div-form">
 <label className="label-form"> cityId:</label>
<input type="number" name='cityId' /> 
 </div>
 <button type ="submit" className="button-form"  value={activity['cityId']} 
    onChange={handleChangeActivity}
 > Create Activity</button>
 
     </form> 

)


}



export const CreateForm = ()=>{
const models=['Hotel','Plattform','City','Bus','Activity','Package'];

const [lang, setLang] = React.useState('');
const[boton, setButton] =React.useState(false)
console.log(lang, boton)

function handleChange(event) {
 
  
  setLang( (event.target.value));
  setButton(models.includes(lang)?true:false)
}

    return (
        <div>
      <input value={lang}  onChange={handleChange}/>
    
    <button onClick={()=>{setButton(models.includes(lang)?true:false)}}>Go</button>
    {boton && models.includes(lang)?<Ejemplo lang={lang}/>: ''}

    <Link to ="/admin"> Volver</Link>

        </div>
)

}