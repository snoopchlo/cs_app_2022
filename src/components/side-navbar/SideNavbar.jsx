import React from 'react';
import 'animate.css';
import {AiOutlineHome} from 'react-icons/ai'
import {TiGroupOutline} from 'react-icons/ti'
import {BsQuestionCircle} from 'react-icons/bs'
import {BsSignpost2} from 'react-icons/bs'
import {BsInfoCircle} from 'react-icons/bs'
import {BsArrowDownCircle} from 'react-icons/bs'
import './side-navbar.css';

const SideNavbar = () => {
  return (
    <div className='side-nav animate__animated animate__fadeInLeft' id="side-nav">
        <a href='#home'>
            <AiOutlineHome className='icon' />
        </a>
        <a href='#about'>
            <BsInfoCircle className='icon' />
        </a>
        <a href='#team'>
            <TiGroupOutline className='icon' />
        </a>
        <a href='#roadmap'>
            <BsSignpost2 className='icon' />
        </a>
        <a href='#FAQ'>
            <BsQuestionCircle className='icon' />
        </a>
        <a href='#footer'>
            <BsArrowDownCircle className='icon' />
        </a>

    </div>
  )
}

// let Icons = document.getElementsByClassName('.side-nav .icon');
// console.log(Icons);
// Icons.forEach((icon) => {
//     icon.addEventListener( 'click', () => {
//         changeactive();
//         icon.classList.add('active-nav');
//     } );
// });

let Icons = document.getElementsByClassName('.side-nav .icon');
for (var i = 0; i < Icons.length; i++) {
    Icons[i].addEventListener( 'click', changeactive());
}

// function changeactive() {
//     Icons.forEach(icon => {
//         icon.classList.remove('active-nav')
//     })
// }

function changeactive() {
    for (var i = 0; i < Icons.length; i++) {
        Icons[i].classList.remove('active-nav')
    };
};




export default SideNavbar;