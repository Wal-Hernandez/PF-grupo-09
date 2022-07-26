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
    <section className='slider' style={{ height: '70vh', position: 'absolute', width: '50%' }}>

      <div className='prev' >
        <button onClick={prevSlide} class="btn btn-outline-warning"> Prev</button>
      </div>
      <div className='next' >
        <button onClick={nextSlide} class="btn btn-outline-warning"> Next</button>
      </div>
      {DataImage.map((slide, index) => {
        return (
          <div
            className={index === current ? 'slide active' : 'slide'}
            key={index} onMouseEnter={() => {
              setAutoPlay(false);
              clearTimeout(timeOut);
            }}
            onMouseLeave={() => {
              setAutoPlay(true);
            }}
          >
            {index === current && (
              <img src={slide.image} alt='' className='image imgdog' />
            )}
          </div>
        );
      })}


    </section>
  );





}

export default Carousel