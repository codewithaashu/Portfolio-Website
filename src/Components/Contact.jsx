import React from 'react'
import ContactCard from './ContactCard';
import ContactForm from './ContactForm';
const Contact = () => {
  return (
    <>
      <div className="contact-main-div">
        <div className="container pb-5">
          <div className="row pt-5">
            <p className='services-p' style={{ marginTop: "0px" }}>
              Get in Touch
            </p>
            <h1 className='portfolio-h1' style={{ paddingBottom: "30px" }}>
              Contact Me
            </h1>
          </div>
          <div className="row mt-4 contact-main-card-box pb-5">
            <ContactCard />
            <div className="col-12 col-md-8 col-lg-8">
              <ContactForm />
            </div>
          </div>
        </div>
      </div>
    </>
  )
}

export default Contact