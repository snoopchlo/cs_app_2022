import React from "react";
import { Parallax } from 'react-scroll-parallax';
import { AnimationOnScroll } from 'react-animation-on-scroll';
import { Feature } from "../../components/index";
import {BsMouse} from "react-icons/bs";
import "./about.css";


const About = () => {
  const blank = "_balnk";
  return (
    <AnimationOnScroll animateIn="animate__fadeIn">
      <Parallax speed={-25}>
        <section className="about-section section__padding" id="about">
          <h1 className="section__title " data-scroll data-scroll-speed="1">About</h1>
          <div className="about content__padding" id="about" data-scroll data-scroll-speed="2">
            <div className="about-features">
              <Feature title="Cyber Siblings" text="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin vestibulum, mi non aliquet pellentesque, libero tortor vehicula ex, egestas tempor ipsum arcu sit amet augue. Praesent non maximus erat. Fusce molestie neque id tempor cursus. Etiam feugiat vulputate metus, vel consectetur erat volutpat vitae. Proin ac tincidunt mauris." />
            </div>
            <div className="about-heading">
              <h1 className="gradient__text">The possibilities are beyond your imagination</h1>
              <a target={blank} className="about-heading__btn" href="https://developer.mozilla.org/en-US/docs/Web/CSS/flex" alt="need to put cs website in details"> </a>
            </div>
            <div className="about-container">
              <Feature title="Example" text="At jointure ladyship an insisted so humanity he. Friendly bachelor entrance to on by. As put impossible own apartments b" />
              <Feature title="Knowledge" text="At jointure ladyship an insisted so humanity he. Friendly bachelor entrance to on by. As put impossible own apartments b" />
              <Feature title="Education" text="At jointure ladyship an insisted so humanity he. Friendly bachelor entrance to on by. As put impossible own apartments b" />
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