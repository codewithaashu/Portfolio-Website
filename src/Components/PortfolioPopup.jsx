import React from 'react'
import close from '../close.png';
import next from '../next.png';
const PortfolioPopup = (props) => {
  const { toggle, img, subHeading, popHeading, content, created, tech, role, view } = props;
  return (
    <>
      <div className="col-12 col-sm-4 col-md-6 col-lg-6 pop-main-div" style={{minWidth:"fit-content"}}>
        <div className="pop-div ">
          <div className="row beautiful-div" >
            <div className="f-end p-0 close-btn" onClick={toggle}>
              <img className='closeBtn' src={close} alt="check" />
            </div>
            <div className="col-12 col-md-6 col-lg-6 pop-img-div">
              <img src={img} alt="Human Image" style={{ width: "100%" }} />
            </div>
            <div className="col-12 col-md-6 col-lg-6">
              <div>
                <p className='popup-p1'>
                  {`Featured - ${subHeading}`}
                </p>
                <h3 className='popup-h3 pb-3'>
                  {popHeading}
                </h3>
                <p className='popup-p2'>
                  {content}
                </p>
                <li className='popup-li'>
                  {`Created : ${created}`}
                </li>
                <li className='popup-li'>
                  {`Technologies : ${tech}`}
                </li>
                <li className='popup-li'>
                  {`Role : ${role}`}
                </li>
                <li className='popup-li prblm-1 pt-4' style={{ display: 'flex', justifyContent: "center" }}>
                  <button className='portPop-btn'>
                    <a target="_blank" href={view} style={{ color: "inherit", cursor: "pointer", textDecoration: "none" }}>
                      Live Demo <span><img className='nextBtn' src={next} alt="" /></span>
                    </a>
                  </button>
                </li>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}

export default PortfolioPopup