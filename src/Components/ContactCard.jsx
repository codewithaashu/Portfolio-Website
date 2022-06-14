import React from 'react'
import contactImg from '../contact-img.jpg';
import { FaFacebookF } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa";
import { FaLinkedinIn } from "react-icons/fa";
const ContactCard1 = () => {
  return (
    <>
      <div className="col-12 col-md-4 col-lg-4 contact-card-box" style={{width:"min-content"}}>
        <div>
          <img className='cont-img' src={contactImg} alt="" />
          <div className='pt-3'>
            <h3 className='card-h3' style={{ fontSize: "24px", fontWeight: "600" }}>
              Mr. Ashish Ranjan
            </h3>
            <p className='contact-p'>
              MERN Stack Developer
              <br />
              I am open to work. Connect with me via E-mail and call in to my Acccount
            </p>
            <h6 className='contact-h6'>
              Phone: +91-7371986179
              <br />
              Email : codewithaashu1@gmail.com
            </h6>
            <h4 className='contact-btn-head pt-3'>
              Touch With Me
            </h4>
            <button className='iconBtn'>
              <a href="https://www.linkedin.com/in/ashishranjan1626/" target={"_blank"}>
                <FaLinkedinIn className='icon' style={{ fontSize: "50px", width: "20px", height: "20px", lineHeight: "50px" }} />

              </a>
            </button>
            <button className='iconBtn'>
              <a href="https://www.instagram.com/codewithaashu_/" target={"_blank"}>
                <FaInstagram className='icon' style={{ fontSize: "50px", width: "20px", height: "20px", lineHeight: "50px" }} />
              </a>
            </button>
            <button className='iconBtn'>
              <a href="https://www.facebook.com/" target={"_blank"}>
                <FaFacebookF className='icon' style={{ fontSize: "50px", width: "20px", height: "20px", lineHeight: "50px" }} />
              </a>
            </button>
          </div>
        </div>
      </div>
    </>
  )
}

export default ContactCard1