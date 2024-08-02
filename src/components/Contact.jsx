import React from 'react'
import { FaInstagram } from "react-icons/fa";
import { CiFacebook, CiInstagram } from "react-icons/ci";
import { CiLinkedin } from "react-icons/ci";
import { FaXTwitter } from "react-icons/fa6";
import { FaGithub } from "react-icons/fa";
import { SiGmail } from "react-icons/si";

const Contact = () => {
  return (
    <>
    <div className="container contact" id="Contacts">
      <h1>CONTACT ME</h1>
      <div className="contact-icon" data-aos="zoom-in-up" data-aos-duration="1000">
        <a href='https://www.instagram.com/rr.yadu.vanshi/' target='_blank' className="items">
          < FaInstagram  className='icons'/>
        </a>
        <a href='https://www.facebook.com/profile.php?id=100009850489485' target='_blank' className="items">
          <CiFacebook className='icons'/>
        </a>
        <a href='https://www.linkedin.com/in/abhiraj-yadav-86a232215/' target='_blank' className="items">
           <CiLinkedin className='icons'/>
        </a>
        <a href='https://x.com/home?lang=en' target='_blank' className="items">
          <FaXTwitter className='icons'/>
        </a>
        <a href='https://github.com/abhiraj100' target='_blank' className="items">
          <FaGithub  className='icons'/>
        </a>
        <a href='mailto:abhiraj100right@gmail.com' target='_blank' className="items">
          <SiGmail  className='icons'/>
        </a>
      </div>
    </div>
    </>
  )
}

export default Contact;
