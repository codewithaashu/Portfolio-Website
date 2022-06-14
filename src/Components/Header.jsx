import React, { useState, useEffect } from 'react'
import { Link } from 'react-router-dom';
const Header = () => {
  const [mobile, setMobile] = useState(false);
  const scroll = () => {
    if (window.scrollY) {
      window.scroll(0, 0)
    }
  }
  return (
    <nav className="navbar navbar-expand-lg navbar-dark header-active sticky-top">
      <div className="container">
        <a className="navbar-brand mx-auto logoText" href="/">Port<span style={{ color: "rgb(229, 9, 20)" }}>Folio</span></a>
        <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation" style={{ boxShadow: "none" }} onClick={() => setMobile(!mobile)}>
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className={mobile ? 'collapse navbar-collapse show' : 'collapse navbar-collapse'} id="navbarSupportedContent">
          <ul className="navbar-nav ms-auto mb-2 mb-lg-0 ulStyle" onClick={() => setMobile(!mobile)}>
            <li className='nav-item px-4'>
              <Link className="list" aria-current="page" to="/" onClick={scroll}  >Home</Link>
            </li>
            <li className='nav-item px-4'>
              <Link className="list" aria-current="page" to="/about" onClick={scroll}>About</Link>
            </li>
            <li className='nav-item px-4'>
              <Link className="list" aria-current="page" to="/services" onClick={scroll}>Services</Link>
            </li>
            <li className='nav-item px-4'>
              <Link className="list" aria-current="page" to="/portfolio" onClick={scroll}>Portfolio</Link>
            </li>
            <li className='nav-item px-4'>
              <button className="head-btn">
                <Link className='head-link-btn ' to="/contact" onClick={scroll}>
                  Hire Me
                </Link>
              </button>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  )
}

export default Header