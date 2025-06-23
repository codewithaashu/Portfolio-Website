import { useEffect, useState } from 'react';
import { useTypewriter } from 'react-simple-typewriter';
import heroBg from '../heroBg.png';
import { gql } from 'graphql-request';
import GraphClient from '../lib/GraphClient';
import Loader from './Loader';

const Hero = () => {
  const [introduction, setIntroduction] = useState(null);

  useEffect(() => {
    const query = gql`
      {
        introductions {
          name
          socialLinks {
            title
            url
            icon {
              url
            }
          }
          heroPic {
            url
          }
          codingProfile {
            title
            url
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

  const { text } = useTypewriter({
    words: [
      'MERN Stack Developer',
      'Web Designer',
      'Programmer',
      'App Developer',
      'Full Stack Developer',
      'Java Developer',
      'Frontend Developer',
      'React Developer',
      'Backend Developer',
    ],
    loop: 0,
  });
  if (!introduction) return <Loader />;

  return (
    <>
      <div className='hero-active'>
        <div className='container pm-5'>
          <div className='row '>
            <div className='col-12 col-md-7 col-lg-7 subHero'>
              <div className='pt-5 hero-div1'>
                <p className='hero-p'>Welcome to my world</p>
                <h1 className='hero-h1'>Hi, I'm {introduction.name}</h1>
                <h3 className='hero-h3'>
                  and I'm a <span style={{ color: '#ff014f' }}>{text}</span>
                </h3>
              </div>
              <div className='row mTop'>
                <div className='col-6 col-md-6 col-lg-6'>
                  <h4 className='heroBtn-head'>Touch With Me</h4>
                  {introduction.socialLinks?.map((socialLink, index) => (
                    <button className='iconBtn' key={index}>
                      <a href={socialLink.url} target='_blank' rel='noreferrer'>
                        <img
                          src={socialLink.icon?.url}
                          alt={socialLink.title}
                        />
                      </a>
                    </button>
                  ))}
                </div>
                <div className='col-6 col-md-6 col-lg-6'>
                  <h4 className='heroBtn-head'>Coding Profile</h4>
                  {introduction.codingProfile?.map((codingProfile, index) => (
                    <button className='iconBtn' key={index}>
                      <a
                        href={codingProfile.url}
                        target='_blank'
                        rel='noreferrer'
                      >
                        <img
                          src={codingProfile.icon?.url}
                          alt={codingProfile.title}
                        />
                      </a>
                    </button>
                  ))}
                </div>
              </div>
            </div>
            <div className='col-12 col-md-5 col-lg-5 mt-5 pt-4 hero-img-main-div'>
              <div className='hero-img-div'>
                <img
                  className='hero-image-bg'
                  src={heroBg}
                  alt='Hero Background'
                  loading='lazy'
                />
                <img
                  className='hero-img'
                  src={introduction.heroPic?.url}
                  alt={introduction.name}
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Hero;
