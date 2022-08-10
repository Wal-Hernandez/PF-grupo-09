import React, { useState } from 'react'
import { DataImage } from './DataImages';
import './carousel.css'
import { useSelector } from "react-redux";

const Carousel = () => {

  const { packages } = useSelector((state) => state.rootReducer);
  const [current, setCurrent] = useState(0);
  const length = DataImage.length;
  const [autoPlay, setAutoPlay] = useState(true);
  let timeOut = null;
  let array=[]

    //los paquetes ya están ordenados por fecha en packages
  for (let i=0; i<5; i++ ) {
    array.push(packages[i])
    console.log(array[i]?.city.image)
  }
console.log("array:", array)

  const nextSlide = () => {
    setCurrent(current === length - 1 ? 0 : current + 1);
  };

  const prevSlide = () => {
    setCurrent(current === 0 ? length - 1 : current - 1);
  };
  React.useEffect(() => { timeOut = autoPlay && setTimeout(() => { nextSlide(); }, 3000) })
  if (!Array.isArray(DataImage) || DataImage.length <= 0) {
    return null;
  }

console.log(DataImage)

  return (
    <section className='slider' >
 

<div id="carouselExampleControls" class="carousel slide" data-bs-ride="carousel">
  <div class="carousel-inner">
  {array.map((e)=>{ return ( <div class="carousel-item active">
  { console.log(e?.city.image)}
  {<img src={e?.city.image} class="d-block w-100" alt="..."/>}
</div>)
 })
    }
  </div>
  <button class="carousel-control-prev" type="button" data-bs-target="#carouselExampleControls" data-bs-slide="prev">
    <span class="carousel-control-prev-icon" aria-hidden="true"></span>
    <span class="visually-hidden">Previous</span>
  </button>
  <button class="carousel-control-next" type="button" data-bs-target="#carouselExampleControls" data-bs-slide="next">
    <span class="carousel-control-next-icon" aria-hidden="true"></span>
    <span class="visually-hidden">Next</span>
  </button>
</div>


    </section>
  );
}

export default Carousel