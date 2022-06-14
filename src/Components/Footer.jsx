import React from 'react'
const Footer = () => {
  return (
    <>
      <div className="container py-5" style={{ background: "rgb(10, 1, 3)", maxWidth: "100%" }}>
        <div className="row">
          <div className='col-12 col-md-6 col-lg-6 p1' style={{ display: "flex", justifyContent: "center" }}>
            <a aria-current="page" to="/" style={{ color: "white", fontWeight: "900", fontSize: "20px", fontWeight: "600", cursor: "pointer" }}>Port<span style={{ color: "rgb(229, 9, 20)" }}>Folio</span>&nbsp; <span style={{ borderRight: "2px solid rgb(107, 114, 128)" }}></span>&nbsp;<span className='p2' style={{ color: "white", fontWeight: "500", fontSize: "0.85rem" }}>Copyright © 2022 CodeWithAashu.com</span>
            </a>
          </div>
          <div className='col-12 col-md-6 col-lg-6 mt-4 p3' style={{ display: "flex", justifyContent: "center" }}>
            <a href="https://www.facebook.com/" target="_blank" rel="noreferrer" className="fa fa-facebook">&nbsp;</a>
            <a href="https://www.linkedin.com/in/ashishranjan1626" rel="noreferrer" target={"_blank"} className="fa fa-linkedin">&nbsp;</a>
            <a href="https://www.youtube.com/channel/UCDEdv1iwWUhEi-MvUsZ8y4w" target={"_blank"} rel="noreferrer" className="fa fa-youtube">&nbsp;</a>
            <a href="https://www.instagram.com/codewithaashu_/" rel="noreferrer" target={"_blank"} className="fa fa-instagram">&nbsp;</a>
          </div>
        </div>
      </div>
    </>
  )
}

export default Footer;