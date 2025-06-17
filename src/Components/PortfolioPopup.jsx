import close from '../close.png';
import { RichText } from '@graphcms/rich-text-react-renderer';
import moment from 'moment';
const PortfolioPopup = (props) => {
  const {
    toggle,
    img,
    subHeading,
    popHeading,
    content,
    created,
    tech,
    role,
    view,
    github,
  } = props;
  return (
    <>
      <div
        className='col-12 col-sm-4 col-md-6 col-lg-6 pop-main-div'
        style={{ minWidth: 'fit-content' }}
      >
        <div className='pop-div '>
          <div className='row beautiful-div'>
            <div className='f-end p-0 close-btn' onClick={toggle}>
              <img className='closeBtn' src={close} alt='check' />
            </div>
            <div className='col-12 col-md-6 col-lg-6 pop-img-div'>
              <img src={img} alt={popHeading} style={{ width: '100%' }} />
            </div>
            <div className='col-12 col-md-6 col-lg-6'>
              <div>
                <p className='popup-p1'>{`Featured - ${subHeading}`}</p>
                <h3 className='popup-h3 pb-3'>{popHeading}</h3>
                <div className='popup-p2'>
                  <RichText content={content} />
                </div>
                <li className='popup-li'>{`Created : ${moment(created).format(
                  'DD MMM YYYY'
                )}`}</li>
                <li className='popup-li'>{`Technologies : ${tech}`}</li>
                <li className='popup-li'>{`Role : ${role}`}</li>
                <li className='popup-li prblm-1 pt-2 linkBtn'>
                  <div className='portPop-btn'>
                    <a
                      target='_blank'
                      rel='noreferrer'
                      href={view}
                      style={{
                        color: 'inherit',
                        cursor: 'pointer',
                        textDecoration: 'none',
                      }}
                    >
                      <img
                        src={
                          'https://cdn-icons-png.flaticon.com/512/5339/5339184.png'
                        }
                        alt=''
                      />
                    </a>
                  </div>
                  <div className='portPop-btn'>
                    <a
                      target='_blank'
                      href={github}
                      rel='noreferrer'
                      style={{
                        color: 'inherit',
                        cursor: 'pointer',
                        textDecoration: 'none',
                      }}
                    >
                      <img
                        src={
                          'https://ap-south-1.graphassets.com/cmbp6ydgp1b0y07pj0e180mnk/cmc02qeb43uuw07phkot4h0z4'
                        }
                        alt=''
                      />
                    </a>
                  </div>
                </li>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default PortfolioPopup;
