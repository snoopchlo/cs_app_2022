import React from 'react';
import { Parallax } from 'react-scroll-parallax';
import { AnimationOnScroll } from 'react-animation-on-scroll';
import "./home.css";
import Spaceship from "../../components/spaceship/Spaceship.jsx"
import stars from "../../assets/images/hero/stars.svg";

const Home = () => {
  return (
    <Parallax speed={-15}>
    <section className='home-section' id="home">
        <div className='hero-bg'>
            <img src={stars} className="hero-bg-stars1" alt='.'/>
            <img src={stars} className="hero-bg-stars2" alt='.'/>
            <img src={stars} className="hero-bg-stars3" alt='.'/>
        </div>

        <div className='hero-container'>
          <div className='top'></div>
          <div className='left'></div>
          <div className='right'></div>
          <div className="bottom"></div>
          <Spaceship className="spaceship"/>
        </div>      
        <section className='home-container'>
          <div className='home-container-top'></div>
              <div className='home-container-left'></div>
              <div className='home-container-right'></div>
              <div className='home-container-bottom'></div>
              <AnimationOnScroll animateIn="animate__fadeIn" animateOut='animate__fadeOut'>  
                <span className='hero-image first-left'></span>
              </AnimationOnScroll>
              <AnimationOnScroll animateIn="animate__fadeIn" animateOut='animate__fadeOut'>  
                <span className='first-right hero-text'>Some Text?</span>
              </AnimationOnScroll>

              <AnimationOnScroll animateIn="animate__fadeIn" animateOut='animate__fadeOut'>  
                <span className='hero-text second-left'>Some Text!</span>
              </AnimationOnScroll>
          
              <AnimationOnScroll animateIn="animate__fadeIn" animateOut='animate__fadeOut'>  
                <span className='hero-image second-right'></span>
              </AnimationOnScroll>

              <AnimationOnScroll animateIn="animate__fadeIn" animateOut='animate__fadeOut'>  
                <span className='hero-image third-left'></span>
              </AnimationOnScroll>
              <AnimationOnScroll animateIn="animate__fadeIn" animateOut='animate__fadeOut'>  
                <span className='third-right hero-text'>Some Text?</span>
              </AnimationOnScroll>
        </section>
        
        
  
    </section>
    </Parallax>
  )
}

export default Home;