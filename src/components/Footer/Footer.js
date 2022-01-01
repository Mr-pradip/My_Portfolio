import React from 'react';
import './Footer.css';
import footerimg from '../Images/logo.jpeg'

function Footer() {
  return (
    <div className='footer d__flex justify__content__space__between pz-10' style={{"zIndex":"500", "backgroundColor":"#000","padding":"10px 20px"}}>
       <img className='footer__img' src={footerimg} alt=""></img>
       <span className='copyright' style={{"color":"#c6c9d8","fontSize":"14px","opacity":"0.75"}}>Copyright © 2021 programmer Pradip Kumar Pradhan. All Right Reserved</span>
     </div>
  )
}

export default Footer;
