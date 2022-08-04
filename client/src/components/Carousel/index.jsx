import React, { useState } from 'react'
import { DataImage } from './DataImages';
import './carousel.css'

const Carousel = () => {


  const [current, setCurrent] = useState(0);
  const length = DataImage.length;
  const [autoPlay, setAutoPlay] = useState(true);
  let timeOut = null;



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



  return (
    <section className='slider' >

<div id="carouselExampleControls" class="carousel slide" data-bs-ride="carousel">
  <div class="carousel-inner">
  {DataImage.map((e)=>{ return ( <div class="carousel-item active">
  <img src={e.image} class="d-block w-100" alt="..."/>
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