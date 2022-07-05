import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";




// Layered pinning - ScrollTrigger


gsap.registerPlugin(ScrollTrigger);
let panel = document.querySelectorAll(".panel");

gsap.utils.toArray(panel).forEach((panel, i) => {
  ScrollTrigger.create({
    trigger: panel,
    start: "top 80%", 
    end: "top 30%",
    scrub: 4,
    pin: true, 
    pinSpacing: false,
    markers :true, 
  });
});


ScrollTrigger.create({
  snap: 1 / 4 // snap whole page to the closest section!
});







let stars = document.querySelector(".hero-stars");
let mainPlanet = document.querySelector(".hero-planet");
let bgBackLeft = document.querySelector(".hero-bg-left");
let bgBackRight = document.querySelector(".hero-bg-right");
// let bgText = document.querySelector(".welcome-text");
// let bgBtnLeft = document.querySelector(".welcome-btn-left");
// let bgBtnRight = document.querySelector(".welcome-btn-right");
let bgFront = document.querySelector(".hero-bg-front");

window.addEventListener("scroll", function(){
  let value = window.scrollY;
  stars.style.left = value * 0 + "px";
  mainPlanet.style.top = value * 1.05 + "px";
  bgBackLeft.style.top = value * 0.5 + "px";
  bgBackRight.style.top = value * 0.5 + "px";
  bgFront.style.top = value * 0 + "px";
//   bgText.style.top = value * 1.5 + "px";
  // bgBtnLeft.style.right = value * 1.5 + "px";
  // bgBtnRight.style.marginRight = value * 1.5 + "px";

})


// $(document).mousemove(function(e) {
//     $(".team-spaceship").css({
//       left: e.pageX,
//       top: e.pageY
//     });
//   });


//https://www.superhi.com/video/smooth-movements-with-javascript



const e = document.getElementsByClassName("cursor-image");
const follow = e[0];
//getElementClassName selector -> add [0]



let mouseX = 0;
let mouseY = 0;

let followX = 0;
let followY = 0;

// let speed = 0.02;
let speed = 0.02;

function animate(){
  
  let distX = mouseX - followX;
  let distY = mouseY - followY;
  
  
  followX = followX + (distX * speed);
  followY = followY + (distY * speed);
  
  follow.style.left = followX + "px";
  follow.style.top = followY + "px";
  
  requestAnimationFrame(animate);
}
animate();

document.addEventListener("mousemove", function(event){
  // define where the mouse is
  mouseX = event.pageX;
  mouseY = event.pageY;
})


