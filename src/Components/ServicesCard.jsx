import { RichText } from '@graphcms/rich-text-react-renderer';
const ServicesCard = (props) => {
  const { img, heading, contents } = props;
  return (
    <>
      <div className='col-12 col-md-4 col-lg-4 service-card'>
        <div className='pt-3 pb-2' style={{ textAlign: 'center' }}>
          <img src={img} alt='Web Icon' style={{ width: '50px' }} />
        </div>
        <h3 className='service-card-h1'>{heading}</h3>
        <div className='service-card-p px-2'>
          <RichText content={contents} />
        </div>
      </div>
    </>
  );
};

export default ServicesCard;
