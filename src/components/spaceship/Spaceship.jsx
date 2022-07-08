import React from 'react';

import 'animate.css';
import "./spaceship.css";
import spaceship from "../../assets/header-img/spaceship.png";

const Spaceship = () => {
  return (

    
    // <section className="spaceship-section section__padding animate__animated animate__fadeIn" id="spaceship-screen">
      <div className='spaceship-container'>
        <div className='spaceship-container__text'>
          <span className='spaceship-container__text--first'>Travelling to the</span>
          <span className='spaceship-container__text--second gradient__text'>Planet KPOP101</span>
        </div>
        <div className="spaceship-container__image">
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

    
    // </section>



  )
}

export default Spaceship;