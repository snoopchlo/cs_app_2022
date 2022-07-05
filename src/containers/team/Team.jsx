import React from "react"
import "./team.css";



const Team = () => {
  return (
    <section className= "team-section section__padding" id="team" data-scroll-section>
    
        <h1 className="section__title">Team</h1>
        
        <div className="team-member-container">
          <div className="member member-1">
            <div className="member-img"></div>
            <div className="member-info">
              <h1 className="name">ROZI</h1>
              <h3 className="position">ROZIROZIROZIROZI</h3>
              <h4 className="about">ROZIROZIROZIROZIROZIROZIROZI</h4>

            </div>
          </div>

          <div className="member member-2">
            <div className="member-img"></div>
            <div className="member-info">
              <h1 className="name">COCO</h1>
              <h3 className="position">COCOCOCOCOCOCOCOCOCOCOCO</h3>
              <h4 className="about">COCOCOCOCOCOCOCOCOCOCOCO</h4>

            </div>
          </div>      

          <div className="member member-3">
            <div className="member-img"></div>
            <div className="member-info">
              <h1 className="name">POPO</h1>
              <h3 className="position">POPOPOPOPOPOPOPOPOPO</h3>
              <h4 className="about">POPOPOPOPOPOPOPOPOPOPOPO</h4>

            </div>
          </div> 
        </div>
            
    </section>
  )
}

export default Team