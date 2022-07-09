import React from "react";
import { Parallax } from 'react-scroll-parallax';
import { AnimationOnScroll } from 'react-animation-on-scroll';
import { Feature } from "../../components/index";
import {BsMouse} from "react-icons/bs";
import "./about.css";

import buttonImage from "../../assets/buttons-img/learn-more-btn.png";

const About = () => {
  const blank = "_balnk";
  return (
    <AnimationOnScroll animateIn="animate__fadeIn">
      <Parallax speed={-25}>
        <section className="about-section" id="about">
          <h1 className="section__title " data-scroll data-scroll-speed="1">About</h1>
          <div className="about content__padding" id="about" data-scroll data-scroll-speed="2">
            <div className="about-features">
              <Feature title="Cyber Siblings" text="Our project aims for KPOP fans around the world to build networks and relationships in way of expressing our love and passion. In a desire, the title “cyber siblings” itself to become a slogan to our community, we support people to share, explore, and connect in an healthy arena." />
            </div>
            <div className="about-heading">
            
              <h1 className="gradient__text">Assume the best playground yet you’ve discovered!</h1>
              <a target={blank} className="about-heading__btn" href="https://developer.mozilla.org/en-US/docs/Web/CSS/flex" alt="need to put cs website in details"><img src={buttonImage} alt="."/></a>
           
            </div>
            <div className="about-container">
              <Feature title="Connect" text="Bring your playground to the masses! Express and share your KPOP piece with the people with common interest" />
              <Feature title="Explore" text="Be creative and have fun! Know more today than I knew yesterday" />
              <Feature title="Respect" text="Never be blind to our differences. We are here to support people with their own preference and interpretation on KPOP" />
            </div>
          </div>
        
            <a href="#footer" className="scroll-down" data-scroll data-scroll-speed="2">
                <hr />
                <div className="scroll-down___text">
                  scroll down
                </div>
                <BsMouse className="scroll" />
                <hr />
            </a>
        
          </section>
        </Parallax>
      </AnimationOnScroll>
);
}

export default About;