import React from "react";
import "./footer.css";

import { BsMouse } from "react-icons/bs";
import { AiOutlineInstagram } from "react-icons/ai";
import { AiOutlineTwitter } from "react-icons/ai";
import { BsDiscord } from "react-icons/bs";
import { BsYoutube } from "react-icons/bs";
import { BsHouse } from "react-icons/bs";
import { AiOutlineShoppingCart } from "react-icons/ai";
import { AiOutlineMail } from "react-icons/ai";




const Footer = () => {
  return (
    <div id="footer" className="footer-container">
      <h1>
      The End
      <a href="#home">
        <h2>
          <BsMouse />-scroll up-
        </h2>
      </a>
      
      </h1>
      <div className="social-links">
        <a href="https://reactjs.org/blog/2022/03/08/react-18-upgrade-guide.html#updates-to-client-rendering-apis">
          <BsHouse className="social" />
        </a>
        <a href="https://reactjs.org/blog/2022/03/08/react-18-upgrade-guide.html#updates-to-client-rendering-apis">
          <AiOutlineShoppingCart className="social" />
        </a>
        <a href="https://reactjs.org/blog/2022/03/08/react-18-upgrade-guide.html#updates-to-client-rendering-apis">
          <AiOutlineTwitter className="social" />
        </a>
        <a href="https://reactjs.org/blog/2022/03/08/react-18-upgrade-guide.html#updates-to-client-rendering-apis">
          <AiOutlineInstagram className="social" />
        </a>
        <a href="https://reactjs.org/blog/2022/03/08/react-18-upgrade-guide.html#updates-to-client-rendering-apis">
          <AiOutlineShoppingCart className="social" />
        </a>
        <a href="https://reactjs.org/blog/2022/03/08/react-18-upgrade-guide.html#updates-to-client-rendering-apis">
          <BsDiscord className="social" />
        </a>
        <a href="https://reactjs.org/blog/2022/03/08/react-18-upgrade-guide.html#updates-to-client-rendering-apis">
          <BsYoutube className="social" />
        </a>
        <a href="https://reactjs.org/blog/2022/03/08/react-18-upgrade-guide.html#updates-to-client-rendering-apis">
          <AiOutlineMail className="social" />
        </a>
      </div>
    </div>
  )
}

export default Footer