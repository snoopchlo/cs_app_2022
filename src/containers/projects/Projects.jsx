import React from 'react';
import "./projects.css";

import mainPanel from "../../assets/panel-images/main-panel.png"

const Projects = () => {
  return (
    <section className='projects-section section__padding' id='projects' data-scroll-section>
        <h1 className='section__title'>Projects</h1>
        <div className='projects-container'>
            <div className='project-element project-element1'>
                <img src={mainPanel} alt="." />
            </div>
            <div className='project-element project-element2'>
                <img src={mainPanel} alt="." />
            </div>
            <div className='project-element project-element3'>
                <img src={mainPanel} alt="." />
            </div>
            

        </div>
    </section>
  )
}

export default Projects