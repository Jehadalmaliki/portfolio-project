import React from 'react'
import cv from "../../../../assets/contact-icons/cv.svg"
import email from "../../../../assets/contact-icons/email.svg"
import github from "../../../../assets/contact-icons/github.svg"
import linkedin from "../../../../assets/contact-icons/linkedin.svg"
import twitter from "../../../../assets/contact-icons/twitter.svg"
import './styles.css';
export default function ContactTRL
() {
  return (
    <div className="icon-container1">
       <a href="https://app.enhancv.com/share/35d533d2/?utm_medium=growth&utm_campaign=share-resume&utm_source=dynamic" target="_blank" rel="noopener noreferrer">
        <img src={cv} alt="CV" className="icon-image1" />
      </a>
      <a href="mailto:engjehadali5@gmail.com" target="_blank" rel="noopener noreferrer">
        <img src={email} alt="Email" className="icon-image1" />
      </a>
      <a href="https://github.com/Jehadalmaliki" target="_blank" rel="noopener noreferrer">
        <img src={github} alt="GitHub" className="icon-image1"/>
      </a>
      <a href="https://www.linkedin.com/in/jehad-almaliki-832318183/" target="_blank" rel="noopener noreferrer">
        <img src={linkedin} alt="LinkedIn" className="icon-image1"/>
      </a>
      <a href="link_to_twitter" target="_blank" rel="noopener noreferrer">
        <img src={twitter} alt="Twitter" className="icon-image1"/>
      </a>  

    </div>
  )
}
