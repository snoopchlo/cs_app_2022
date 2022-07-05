import React from "react";
import 'animate.css';

import { useState } from "react";
import {RiMenu3Line, RiCloseLine} from "react-icons/ri";
import "./navbar.css";
import 'animate.css';

import logo from "../../assets/cs__brand-logo.svg";



const MenuLinks = () => (
  <>
      <div>
          <a href="#home">Home</a>
      </div>
      <div>
          <a href="#about">About</a>
      </div>
      <div>
          <a href="#team">Team</a>
      </div>
      <div>
          <a href="#roadmap">Roadmap</a>
      </div>
      <div>
          <a href="#FAQ">FAQ</a>
      </div>
      <div>
          <a href="#contact">Contact</a>
      </div>

  </>

)

const MenuSns = () => (    
  <>
      <div> 
          <a className="nav-link" aria-current="page" href="https://twitter.com/CyberSiblings">
              <i className="fa-brands fa-twitter"></i>
          </a>
      </div>
      <div>
          <a className="nav-link" aria-current="page" href="https://www.instagram.com/cyber_siblings/">
              <i className="fa-brands fa-instagram"></i>
          </a>
      </div>
      <div>
          <a className="nav-link" aria-current="page" href="https://www.instagram.com/cyber_siblings/">
              <i className="fa-brands fa-discord"></i>
          </a>
      </div>    
  </>
)

const Navbar = () => {

  const [toggleMenu, setToggleMenu] = useState(false);
  return (
    <section className="navbar-section animate__animated animate__fadeInDown">
        {/* <div className="navbar-color"> </div> */}
        <div className="navbar-container">
            <div className="logo-container">
                <img src={logo} alt="logo" />
            </div>
            <div className="menu-container">
                <MenuLinks />
            </div>
            {/* <div className="sns-container">
                <MenuSns />
            </div> */}
            <div className="navbar-toggle">
                {toggleMenu
                  ? <RiCloseLine color="#fff" size={40} onClick={() => setToggleMenu(false)} />
                  : <RiMenu3Line color="#fff" size={40} onClick={() => setToggleMenu(true)} />
                }
                {toggleMenu && (
                  <div className="navbar-toggle__menu slide-bottom">
                        <MenuLinks className="toggle-menu" />
                        <MenuSns className="toggle-menu" />  
                  </div>
                )}
            </div>
        </div>
    </section>
  )
}



export default Navbar;
