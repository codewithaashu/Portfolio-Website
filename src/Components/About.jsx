import Skills from './Skills';
import { useEffect, useState } from 'react';
import { gql } from 'graphql-request';
import GraphClient from '../lib/GraphClient';
import { RichText } from '@graphcms/rich-text-react-renderer';
const About = () => {
  const [introduction, setIntroduction] = useState(null);
  useEffect(() => {
    const query = gql`
      {
        introductions {
          name
          aboutMe {
            raw
          }
          passportPhoto {
            url
          }
          shortBio {
            title
            value
            icon {
              url
            }
          }
        }
      }
    `;
    const getData = async () => {
      const { introductions } = await GraphClient(query);
      setIntroduction(introductions[0]);
    };
    if (!introduction) getData();
  }, [introduction]);
  return (
    <>
      <div className='about-main-div'>
        <div className='container'>
          <div className='row pt-5'>
            <p className='services-p' style={{ marginTop: '0px' }}>
              My Intro
            </p>
            <h1 className='portfolio-h1' style={{ paddingBottom: '30px' }}>
              About Me
            </h1>
          </div>
          <div className='row mt-4'>
            <div className='col-12 col-md-6 col-lg-6 about-img-div'>
              <img
                src={introduction?.passportPhoto?.url}
                alt={introduction?.name}
                style={{ height: '280px', borderRadius: '20px' }}
              />
            </div>
            <div className='col-12 col-md-6 col-lg-6'>
              <div className='aboutDiv pt-5'>
                {introduction?.shortBio?.map((curElem, id) => {
                  const {
                    title,
                    value,
                    icon: { url },
                  } = curElem;
                  return (
                    <div className='aboutCard' key={id}>
                      <div
                        className='pt-3 pb-3'
                        style={{ textAlign: 'center' }}
                      >
                        <img
                          src={url}
                          alt='icon'
                          style={{ width: '40px', color: '' }}
                        />
                      </div>
                      <h4 className='aboutCard-h1'>{title}</h4>
                      <p className='aboutCard-p'>{value}</p>
                    </div>
                  );
                })}
              </div>
              <div className='about-p-div'>
                <RichText content={introduction?.aboutMe?.raw} />
              </div>
            </div>
          </div>
        </div>
        <Skills />
      </div>
    </>
  );
};

export default About;
