import React from 'react';
import { Parallax } from 'react-scroll-parallax';
import { AnimationOnScroll } from 'react-animation-on-scroll';
import "./welcome.css";
import 'animate.css';

import palace from "../../assets/welcome-img/palace.png";
import cloud1 from "../../assets/welcome-img/cloud1.png";
import cloud2 from "../../assets/welcome-img/cloud2.png";
import cloud3 from "../../assets/welcome-img/cloud3.png";
import cloud4 from "../../assets/welcome-img/cloud4.png";
import light1 from "../../assets/welcome-img/light1.png";
import light2 from "../../assets/welcome-img/light2.png";
import light3 from "../../assets/welcome-img/light3.png";
import light4 from "../../assets/welcome-img/light4.png";
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
    // <AnimationOnScroll animateIn="animate__fadeIn">
    <Parallax speed={-25}>
    <section className='welcome-section'>
        <div className='welcome-images'>
            {/* <span className='first-light'></span> */}
            {/* <span className='second-light'></span> */}
            {/* <img className="palace-back" src={palace} alt="." /> */}
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
           
         
            {/* <img className=" cloud cloud1" src={cloud1} alt="." />
            <img className=" cloud cloud2" src={cloud2} alt="." />
            <img className=" cloud cloud3" src={cloud3} alt="." />
            <img className=" cloud cloud4" src={cloud4} alt="." /> */}
            {/* <img className="light light" src={light1} alt="."/>
            <img className="light light2" src={light2} alt="."/>
            <img className="light light3" src={light3} alt="."/>
            <img className="light light4" src={light4} alt="."/> */}

        </div>
     

    </section>
    </Parallax>
    // </AnimationOnScroll>
  )
}

export default Welcome