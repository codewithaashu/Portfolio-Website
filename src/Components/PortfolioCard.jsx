import { useState } from 'react';
import Arrow from '../right-arrow.png';
import PortfolioPopup from './PortfolioPopup';
const PortfolioCard = (props) => {
  const {
    id,
    img,
    subHeading,
    heading,
    popHeading,
    content,
    created,
    tech,
    role,
    view,
    github,
  } = props;
  const [portPop, setPortPop] = useState(false);
  const toggle = () => {
    setPortPop(!portPop);
  };
  if (portPop) {
    document.body.classList.add('active-modal');
  } else {
    document.body.classList.remove('active-modal');
  }
  return (
    <>
      <div
        className='col-12 col-sm-6 col-md-4 col-lg-4 portfolio-card-box mx-2'
        key={id}
      >
        <div>
          <img className='img' src={img} alt='' />
          <div className='card-h px-1'>
            <h6 className='card-h6 pt-3'>{subHeading}</h6>
            <h3 className='card-h3 pt-1 projectHeading'>{heading}</h3>
          </div>
        </div>
        <div className='pt-2'>
          <h6 className='port-div-arrow' onClick={toggle}>
            View More &nbsp;
            <span>
              <img
                src={Arrow}
                alt='Arrow'
                style={{ rotate: '0deg', width: '15px' }}
              />
            </span>
          </h6>
        </div>
      </div>
      {portPop && (
        <PortfolioPopup
          toggle={toggle}
          img={img}
          subHeading={subHeading}
          popHeading={popHeading}
          content={content}
          created={created}
          tech={tech}
          role={role}
          view={view}
          github={github}
        />
      )}
    </>
  );
};

export default PortfolioCard;
