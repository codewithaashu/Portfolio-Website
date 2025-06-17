import React, { useState } from 'react';
import check from '../quality.png';
import Arrow from '../right-arrow.png';
import Popup from './Popup';
const SkillsCard = (props) => {
  const [popup, setPopup] = useState(false);
  const toggle = () => {
    setPopup(!popup);
  };
  if (popup) {
    document.body.classList.add('active-modal');
  } else {
    document.body.classList.remove('active-modal');
  }
  return (
    <>
      <div className='col-12 col-sm-4 col-md-4 col-lg-4 skillDiv'>
        <h5 className='py-4' style={{ textAlign: 'center' }}>
          {props.title}
        </h5>
        <div className='row'>
          <div className='col-6 col-md-6 col-lg-6'>
            <ul>
              {props.skills.map((curElem, id) => {
                if (id <= 3) {
                  return (
                    <li className='skillsList' key={id}>
                      <span>
                        <img
                          src={check}
                          alt='check'
                          style={{ width: '20px', color: 'white' }}
                        />
                        &nbsp; &nbsp;{curElem}
                      </span>
                    </li>
                  );
                }
              })}
            </ul>
          </div>
          <div className='col-6 col-md-6 col-lg-6'>
            <ul>
              {props.skills.map((curElem, id) => {
                if (id > 3) {
                  return (
                    <li className='skillsList' key={id}>
                      <span>
                        <img
                          src={check}
                          alt='check'
                          style={{ width: '20px', color: 'white' }}
                        />
                        &nbsp; &nbsp;{curElem}
                      </span>
                    </li>
                  );
                }
              })}
            </ul>
          </div>
          <div className='pt-2'>
            <h6
              style={{
                textAlign: 'center',
                cursor: 'pointer',
                color: '#ff014f',
              }}
              onClick={() => {
                setPopup(true);
              }}
            >
              View More{' '}
              <span>
                <img
                  src={Arrow}
                  alt='Arrow'
                  style={{ rotate: '325deg', width: '15px' }}
                />
              </span>
            </h6>
          </div>
        </div>
      </div>
      {popup && (
        <Popup
          title={props.title}
          toggle={toggle}
          content={props.content}
          keyPoints={props.keyPoints}
        />
      )}
    </>
  );
};

export default SkillsCard;
