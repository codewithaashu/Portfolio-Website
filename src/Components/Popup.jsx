import React from 'react';
import check from '../quality.png';
import close from '../close.png';
import { RichText } from '@graphcms/rich-text-react-renderer';
const Popup = (props) => {
  return (
    <>
      <div className='col-12 col-sm-4 col-md-4 col-lg-4 pop-main-div'>
        <div className='pop-div '>
          <div
            className='row skill-beautiful-div p-4'
            style={{ width: '500px' }}
          >
            <div className='f-end pt-2'>
              <img
                className='closeBtn'
                src={close}
                alt='check'
                onClick={props.toggle}
              />
            </div>
            <h3 className='pt-4 ' style={{ textAlign: 'center' }}>
              {props.title}
            </h3>
            <p className='popup-p2 p-3'>
              <RichText content={props.content} />
            </p>
            <ul>
              {props.keyPoints.map((curElem, id) => {
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
              })}
            </ul>
          </div>
        </div>
      </div>
    </>
  );
};

export default Popup;
