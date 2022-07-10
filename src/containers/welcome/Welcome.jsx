import React from 'react';
import { Parallax } from 'react-scroll-parallax';
import { AnimationOnScroll } from 'react-animation-on-scroll';
import "./welcome.css";
import 'animate.css';

import palace from "../../assets/welcome-img/palace.png";
import music1 from "../../assets/welcome-img/music1.png";
import music2 from "../../assets/welcome-img/music2.png";
import music3 from "../../assets/welcome-img/music3.png";
import music4 from "../../assets/welcome-img/music4.png";
import music5 from "../../assets/welcome-img/music5.png";
import music6 from "../../assets/welcome-img/music6.png";
import music7 from "../../assets/welcome-img/music7.png";
import music8 from "../../assets/welcome-img/music8.png";


const Welcome = () => {
  return (
    <AnimationOnScroll animateIn="animate__fadeIn">
    <Parallax speed={-25}>
      <section className='welcome-section'>
          <div className='welcome-images'>
              <AnimationOnScroll initiallyVisible={true} animateIn='animate__animated animate__shakeX'>
                  <img className="palace" src={palace} alt="." />  
                  <img src={music1} alt="." className='music music1'/>
                  <img src={music2} alt="." className='music music2'/>
                  <img src={music3} alt="." className='music music3'/>
                  <img src={music4} alt="." className='music music4'/>
                  <img src={music5} alt="." className='music music5'/>
                  <img src={music6} alt="." className='music music6'/>
                  <img src={music7} alt="." className='music music7'/>
                  <img src={music8} alt="." className='music music8'/>
                </AnimationOnScroll>
          </div>
      </section>
    </Parallax>
    </AnimationOnScroll>
  )
}

export default Welcome