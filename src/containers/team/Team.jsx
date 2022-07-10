import React from "react"
import "./team.css";
import { AnimationOnScroll } from 'react-animation-on-scroll';
import { AiOutlineInstagram } from "react-icons/ai";
import { AiOutlineTwitter } from "react-icons/ai";



const Team = () => {
  return (
    <AnimationOnScroll animateIn="animate__fadeIn">
    <section className= "team-section section__padding" id="team">
        <h1 className="section__title">Team</h1>
        <div className="team-member-container">
          <div className="member member-1">
            <div className="member-img"></div>
            <div className="member-info">
            <div className="member-info--first-row">
              <h1 className="name">ROZI</h1>
              <div className="team-contact-links">
               <a href="https://react-bootstrap.github.io/getting-started/introduction/" className="team-contact instagram">
                    <AiOutlineInstagram className="icon" />
                </a>
                <a href="https://react-bootstrap.github.io/getting-started/introduction/" className="team-contact twitter">
                    <AiOutlineTwitter className="icon" />
                </a>
                </div>
            </div>
              <h3 className="position">ROZIROZIROZIROZI</h3>
              <div className="team-about-container">
                <h4 className="about">ROZIROZIROZIROZIROZIROZIROZI<br></br>ROZIROZIROZIROZIROZIROZIROZI
                ROZIROZIROZIROZIROZIROZIROZI
                ROZIROZIROZIROZIROZIROZIROZI
                ROZIROZIROZIROZIROZIROZIROZI</h4>
              </div>

            </div>
          </div>
          <div className="member member-2">
            <div className="member-img"></div>
            <div className="member-info">
            <div className="member-info--first-row">
              <h1 className="name">COCO</h1>
              <div className="team-contact-links">
              <a href="https://react-bootstrap.github.io/getting-started/introduction/" className="team-contact instagram">
                    <AiOutlineInstagram className="icon" />
                </a>
                <a href="https://react-bootstrap.github.io/getting-started/introduction/" className="team-contact twitter">
                    <AiOutlineTwitter className="icon" />
                </a>
                </div>
            </div>  
              <h3 className="position">COCOCOCOCOCOCOCOCOCOCOCO</h3>
              <h4 className="about">COCOCOCOCOCOCOCOCOCOCOCO</h4>
            </div>
          </div>      
          <div className="member member-3">
            <div className="member-img"></div>
            <div className="member-info">
            <div className="member-info--first-row">
            <h1 className="name">POPO</h1>
            <div className="team-contact-links">
            <a href="https://react-bootstrap.github.io/getting-started/introduction/" className="team-contact instagram">
                    <AiOutlineInstagram className="icon" />
                </a>
                <a href="https://react-bootstrap.github.io/getting-started/introduction/" className="team-contact twitter">
                    <AiOutlineTwitter className="icon" />
                </a>
                </div>
            </div>
              <h3 className="position">POPOPOPOPOPOPOPOPOPO</h3>
              <h4 className="about">POPOPOPOPOPOPOPOPOPOPOPO</h4>
           </div>
          </div> 
        </div>
    </section>
    </AnimationOnScroll>
  )
}

export default Team