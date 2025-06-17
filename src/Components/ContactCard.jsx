import contactImg from '../contact-img.jpg';
const ContactCard1 = ({ introduction }) => {
  return (
    <>
      <div
        className='col-12 col-md-4 col-lg-4 contact-card-box'
        style={{ width: 'min-content' }}
      >
        <div>
          <img className='cont-img' src={contactImg} alt='' />
          <div className='pt-3'>
            <h3
              className='card-h3'
              style={{ fontSize: '24px', fontWeight: '600' }}
            >
              Mr. {introduction?.name}
            </h3>
            <p className='contact-p'>
              {introduction?.designation?.[0]}
              <br />I am open to work. Connect with me via E-mail and call in to
              my Acccount
            </p>
            <h6 className='contact-h6'>
              Phone: +91-{introduction?.mobileNumber}
              <br />
              Email : {introduction?.emailId}
            </h6>
            <h4 className='contact-btn-head pt-3'>Touch With Me</h4>
            {introduction?.socialLinks
              ?.slice(0, 3)
              ?.map((socialLink, index) => {
                return (
                  <button className='iconBtn' key={index}>
                    <a href={socialLink?.url} target={'_blank'}>
                      <img
                        src={socialLink?.icon?.url}
                        alt={socialLink?.title}
                      />
                    </a>
                  </button>
                );
              })}
          </div>
        </div>
      </div>
    </>
  );
};

export default ContactCard1;
