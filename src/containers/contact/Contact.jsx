import React from "react"
import "./contact.css"

import { AiOutlineInstagram } from "react-icons/ai";
import { AiOutlineTwitter } from "react-icons/ai";
import { AiOutlineExclamationCircle } from "react-icons/ai";

const Contact = () => {
  return (
    <div className="container contact-container section__padding" data-scroll-section>
        <h1 className="section__title">contact</h1>
        <div className="contact-links">
            <a href="https://react-bootstrap.github.io/getting-started/introduction/" className="contact instagram">
                <AiOutlineInstagram className="icon" />
                <h2>instagram <span>username</span></h2>
            </a>

            <a href="https://react-bootstrap.github.io/getting-started/introduction/" className="contact twitter">
                <AiOutlineTwitter className="icon" />
                <h2>twitter <span>username</span></h2>
            </a>

            <a href="https://react-bootstrap.github.io/getting-started/introduction/" className="contact none">
                <AiOutlineExclamationCircle className="icon" />
                <h2>none <span>Creative Ambition</span></h2>
            </a>

        </div>
    </div>
  )
}

export default Contact