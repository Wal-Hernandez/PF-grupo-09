import React from "react";
import { useDispatch} from "react-redux";
import {Link} from "react-router-dom";
function Ejemplo({lang}) {
  if(lang===''){
return(
<div>
Waiting for the Data

</div>


)


  }


  if (lang === 'Hotel') {
    return (
      <form>
        <input key="lastName" type="text" placeholder="Vezetéknév" name="lastName"/>
        <input key="firstName" type="text" placeholder="Keresztnév" name="firstName"/>
        <input key="middleInitial" type="text" placeholder="KB" style={{width: 30}} name="middleInitial"/> 
      </form>
      )
  }
 if(lang === 'Plattform')


  return (
      <form>
        <input key="firstName" type="text" placeholder="First Name" name="firstName"/> 
        <input key="middleInitial" type="text" placeholder="MI" style={{width: 30}} name="middleInitial"/> 
        <input key="lastName" type="text" placeholder="Last Name" name="lastName"/> 
      </form>
    );
 if (lang === 'City')
 return(
  <div className="div">

<form className='form'>


<div className="div-form">  
<label className="label-form"> Name:</label>
  <input type="text" name='name'  
/> 
</div>


<div className="div-form">
<label className="label-form"> Location:</label>
  <input type="text" name='location'  
/> 
</div>



<button type ="submit" className="button-form"> Put City</button>
<Link to ="/admin"> Volver</Link>
  </form>
 




  </div>
)
}



export const CreateForm = ()=>{
const models=['Hotel','Plattform','City'];

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