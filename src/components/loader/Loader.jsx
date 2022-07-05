import React from 'react';

import { AnimationOnScroll } from 'react-animation-on-scroll';
import "./loader.css";
import spaceship from "../../assets/header-img/spaceship.png";

const Loader = () => {
  return (

    
    <section className="loader-section section__padding" id="loader-screen">
        <div className='loader-text-container'>
          <AnimationOnScroll animateIn="animate__fadeIn" animateOut='animate__fadeOut'>
            <span className='loader-text-container__text'>Travelling to the </span><span className='loader-text-container__text gradient__text'>Planet KPOP101</span>
          </AnimationOnScroll>

        <div className="loader-container">
            <div className="main-img active">   
                <span className="circle"></span>
                <span className="circle "></span>
                <span className="circle "></span>
                <span className="circle "></span>
                <span className="circle "></span>
                <span className="circle "></span>
                <span className="circle "></span>
                <span className="circle"></span>
            </div>
        <img src={spaceship} alt=""/>
        </div>
      </div>
    </section>



  )
}

export default Loader;