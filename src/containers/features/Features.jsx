import React from "react";
import { AnimationOnScroll } from 'react-animation-on-scroll';
import "./features.css";
import {Feature} from "../../components/index";

const featuresData = [
  {
    title: "TEXT TEXT",
    text: "From they fine john he give of rich he. They age and draw mrs like. Improving end distrusts may instantly was household applauded.",
  },
  {
    title: "TEXT TEXT",
    text: "Considered sympathize ten uncommonly occasional assistance sufficient not. Letter of on become he tended active enable to.",
  },
  {
    title: "TEXT TEXT",
    text: "Led ask possible mistress relation elegance eat likewise debating. By message or am nothing amongst chiefly address.",
  },
  {
    title: "TEXT TEXT",
    text: "Really boy law county she unable her sister. Feet you off its like like six. Among sex are leave law built now. In built table in an rapid blush..",
  },
];

const Features = () => {
  return (
    <section className="features-section section__padding">
      <div className="features-container content__padding" id="features">
      <div className="features-heading">
        <AnimationOnScroll animateIn='animate__animated animate__fadeInLeft'>
        <h1 className="features-title gradient__text">The Future is Now and You Just Need to Realize It. Step into Future Today. & Make it Happen.</h1>
        <p>Request Early Access to Get Started</p>
        </AnimationOnScroll>
      </div>
      <div className="features-contents">
        <AnimationOnScroll animateIn='animate__animated animate__fadeInRight'>
        {featuresData.map((item, index) => (
          <Feature title={item.title} text={item.text} key={item.title + index} />
        ))}
        </AnimationOnScroll>
      </div>
    </div>
    
  </section>
  )
}

export default Features;