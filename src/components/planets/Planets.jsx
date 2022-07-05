import React from "react";
import {BsMouse} from "react-icons/bs";
import "./planets.css";
import spaceship from "../../assets/header-img/spaceship.png";




const Planets = () => {


  return (


 
    <section className="destination-section section__padding" id="destination" data-scroll-section>
      
          <h1 className="destination-title section__title">Destination</h1>
          <h2 className="destination-location">Planet KPOP101 in Year</h2>



        <div className="planet-container">
            <div className="main-img active">   
                <span className="circle"></span>
                <span className="circle "></span>
                <span className="circle "></span>
                <span className="circle "></span>
                <span className="circle "></span>
                <span className="circle "></span>
                <span className="circle "></span>
                <span className="circle"></span>
            </div>
            <img src={spaceship} alt=""/>

        </div>
        <a href="#footer" className="scroll-down">
            <hr />
            <div className="scroll-down___text">
              scroll down
            </div>
            
            <BsMouse className="scroll" />
            <hr />

        </a>

    </section>
  )
}

// const toggle = document.getElementById("main-img");
// toggle.addEventListener("click", () => {
//   toggle.classList.toggle("active")
// });


export default Planets