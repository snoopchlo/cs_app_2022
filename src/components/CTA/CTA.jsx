import React from 'react';
import { AnimationOnScroll } from 'react-animation-on-scroll';
import './CTA.css';

const CTA = () => {
  return (
    <AnimationOnScroll initiallyVisible={true} animateIn="animate__bounce">
    <div className='cta-container' data-scroll-section>
      <div className="cta">
          <div className="cta-content">
            <p>Request Early Access to Get Started</p>
            <h3>Register Today & start exploring the endless possibilities.</h3>
          </div>
          <div className="cta-btn">
            <button type="button">Get Started</button>
          </div>
      </div>
    </div>
    </AnimationOnScroll>
  )
}

export default CTA