import React from 'react';
import { Parallax } from 'react-scroll-parallax';
import { AnimationOnScroll } from 'react-animation-on-scroll';
import "./home.css";
import Spaceship from "../../components/spaceship/Spaceship.jsx"
import stars from "../../assets/images/hero/stars.svg";

// import planet from "../../assets/images/hero/main-planet.svg";
// import bgLeft from "../../assets/images/hero/mainback-left.svg";
// import bgRight from "../../assets/images/hero/mainback-right.svg";
// import bgFront from "../../assets/images/hero/mainfront.svg";

const Home = () => {
  return (
    <Parallax speed={-15}>

    <section className='home-section' id="home">
     
        <section className='hero-container' id="hero">
            <img src={stars} className="hero-stars" alt='.'/>
            {/* <img src={planet} className="hero-planet" alt='.'/> */}
            {/* <img src={bgLeft} className="hero-bg-left" alt='.'/> */}
            {/* <img src={bgRight} className="hero-bg-right" alt='.'/> */}
            {/* <img src={bgFront} className="hero-bg-front" alt='.'/> */}
        </section>
  
        <div className='hero-element'>
          <Spaceship />
        </div>
       
          {/* <div className='rocket-img'>
            <img src={rocket} alt='.' />
          </div> */}

        {/* <div className='hero-bottom'>
            <div className='hero-bottom1'>
              <AnimationOnScroll animateIn="animate__animated animate__fadeInLeft" animateOut='animate__fadeOutLeft'>
                <span className='hero-text1 from-left gradient__text'>Some Text?</span>
              </AnimationOnScroll>
              <AnimationOnScroll animateIn="animate__animated animate__fadeInRight" animateOut='animate__fadeOutRight'>  
                <span className='hero-image1 from-right'></span>
              </AnimationOnScroll>
            </div>
            <div className='hero-bottom2'>
            <AnimationOnScroll animateIn="animate__animated animate__fadeInLeft" animateOut='animate__fadeOutLeft'>  
                <span className='hero-image2 from-left'></span>
              </AnimationOnScroll>
              <AnimationOnScroll animateIn="animate__animated animate__fadeInRight" animateOut='animate__fadeOutRight'>  
                <span className='hero-text2 from-right'>Some Text!</span>
              </AnimationOnScroll>
     

          </div>
        </div> */}
        
        
  
    </section>
    </Parallax>
  )
}

export default Home;