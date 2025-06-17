import { useEffect, useState } from 'react';
import ServicesCard from './ServicesCard';
import GraphClient from '../lib/GraphClient';
import { gql } from 'graphql-request';
const Services = () => {
  const [services, setServices] = useState(null);
  useEffect(() => {
    const query = gql`
      {
        services {
          title
          icon {
            url
          }
          description {
            raw
          }
        }
      }
    `;
    const getData = async () => {
      const { services } = await GraphClient(query);
      setServices(services);
    };
    if (!services) getData();
  }, [services]);
  return (
    <>
      <div className='services-main-div'>
        <div className='container ' style={{ paddingBottom: '2rem' }}>
          <div className='row pt-5'>
            <p className='services-p' style={{ marginTop: '0px' }}>
              What I Do
            </p>
            <h1 className='portfolio-h1' style={{ paddingBottom: '30px' }}>
              Services
            </h1>
          </div>
          <div className='row mt-4 service-main-card'>
            {services?.map((curElem, id) => {
              const {
                title,
                icon: { url },
                description: { raw },
              } = curElem;
              return (
                <ServicesCard
                  key={id}
                  img={url}
                  heading={title}
                  contents={raw}
                />
              );
            })}
          </div>
        </div>
      </div>
    </>
  );
};

export default Services;
