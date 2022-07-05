import React from "react";


import Accordion from "react-bootstrap/Accordion"
import "bootstrap/dist/css/bootstrap.min.css";
import Card from "react-bootstrap/Card"
import { useAccordionButton } from "react-bootstrap/AccordionButton";


import "./FAQ.css";



function CustomToggle({ children, eventKey }) {
  
  const decoratedOnClick = useAccordionButton(eventKey, () =>
    console.log("totally custom!"),
  );

  return (
    <button
      type="button"
      onClick={decoratedOnClick}
      className="FAQ-button"
    >
      {children}
    </button>
  );
}

const btns = document.getElementsByClassName(".FAQ-button");

  // fn
  function accordion() {
    // this = the btn | icon & bg changed
    this.classList.toggle("is-open");
  
    // the acc-content
    const content = this.nextElementSibling;
  
    // IF open, close | else open
    if (content.style.maxHeight) content.style.maxHeight = null;
    else content.style.maxHeight = content.scrollHeight + "px";
  }
  
  // event
  // btns.forEach((el) => el.addEventListener("click", accordion));
  for (var i = 0; i < btns.length; i++) {
    btns[i].addEventListener("click", accordion);
  }
const FAQ = ( ) => {
  
  
  return (
    <div className="cs__FAQ container section__padding" id="FAQ" data-scroll-section>
      <h1 className="section__title">FAQ</h1>
      <div className="cs__FAQ-content">
        <Accordion defaultActiveKey="0">
          <Card className="FAQ__item-body">
            <Card.Header className="FAQ-header">
              <div>How many collection are there?</div>
              <CustomToggle eventKey="0"><div className="FAQ-button"><i className="fa-regular fa-circle-plus"></i></div></CustomToggle>
            </Card.Header>
            <Accordion.Collapse eventKey="0">
              <Card.Body className="FAQ-answer">Hello! I"m the body</Card.Body>
            </Accordion.Collapse>
          </Card>

        </Accordion>
      </div>


    </div>

   
  )
}



export default FAQ