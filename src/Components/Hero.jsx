import React, { useEffect, useState } from 'react';
import { useTypewriter } from 'react-simple-typewriter';
import { FaFacebookF } from 'react-icons/fa';
import { FaInstagram } from 'react-icons/fa';
import { FaLinkedinIn } from 'react-icons/fa';
import { FaJava } from 'react-icons/fa';
import { FaReact } from 'react-icons/fa';
import { FaNodeJs } from 'react-icons/fa';
import hero from '../heroImg.png';
import heroBg from '../heroBg.png';
import { gql } from 'graphql-request';
import GraphClient from '../lib/GraphClient';
const Hero = () => {
  const [introduction, setIntroduction] = useState(null);
  useEffect(() => {
    const query = gql`
      {
        introductions {
          aboutMe {
            raw
          }
          designation
          emailId
          name
          passportPhoto {
            url
          }
          mobileNumber
          socialLinks {
            title
            url
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
    words: introduction?.designation || [
      'MERN Stack Developer',
      'Web Designer',
      'Programmer',
    ],
    loop: 0,
  });

  return (
    <>
      <div className='hero-active'>
        <div className='container pm-5'>
          <div className='row '>
            <div className='col-12 col-md-7 col-lg-7 subHero'>
              <div className='pt-5 hero-div1'>
                <p className='hero-p'>Welcome to my world</p>
                <h1 className='hero-h1'>Hi,I'm {introduction?.name}</h1>
                <h3 className='hero-h3'>
                  and I'm a <span style={{ color: '#ff014f' }}>{text}</span>
                </h3>
              </div>
              <div className='row mTop'>
                <div className='col-6 col-md-6 col-lg-6'>
                  <h4 className='heroBtn-head'>Touch With Me</h4>
                  <button className='iconBtn'>
                    <a
                      href='https://www.linkedin.com/in/ashishranjan1626/'
                      target={'_blank'}
                    >
                      <FaLinkedinIn
                        className='icon'
                        style={{
                          fontSize: '50px',
                          width: '20px',
                          height: '20px',
                          lineHeight: '50px',
                        }}
                      />
                    </a>
                  </button>
                  <button className='iconBtn'>
                    <a
                      href='https://www.instagram.com/codewithaashu_/'
                      target={'_blank'}
                    >
                      <FaInstagram
                        className='icon'
                        style={{
                          fontSize: '50px',
                          width: '20px',
                          height: '20px',
                          lineHeight: '50px',
                        }}
                      />
                    </a>
                  </button>
                  <button className='iconBtn'>
                    <a href='https://www.facebook.com/' target={'_blank'}>
                      <FaFacebookF
                        className='icon'
                        style={{
                          fontSize: '50px',
                          width: '20px',
                          height: '20px',
                          lineHeight: '50px',
                        }}
                      />
                    </a>
                  </button>
                </div>
                <div className='col-6 col-md-6 col-lg-6'>
                  <h4 className='heroBtn-head'>Best Skill On</h4>
                  <button className='iconBtn'>
                    <FaJava
                      className='icon'
                      style={{
                        fontSize: '50px',
                        width: '20px',
                        height: '20px',
                        lineHeight: '50px',
                      }}
                    />
                  </button>
                  <button className='iconBtn'>
                    <FaReact
                      className='icon'
                      style={{
                        fontSize: '50px',
                        width: '20px',
                        height: '20px',
                        lineHeight: '50px',
                      }}
                    />
                  </button>
                  <button className='iconBtn'>
                    <FaNodeJs
                      className='icon'
                      style={{
                        fontSize: '50px',
                        width: '20px',
                        height: '20px',
                        lineHeight: '50px',
                      }}
                    />
                  </button>
                </div>
              </div>
            </div>
            <div className='col-12 col-md-5 col-lg-5 mt-5 pt-4 hero-img-main-div'>
              <div className='hero-img-div'>
                <img
                  className='hero-image-bg'
                  src={heroBg}
                  alt='Hero Image Background'
                  data-w-id='6b044c6e-7288-7b25-07f8-80f4cc345ab7'
                  loading='lazy'
                />
                <img className='hero-img' src={hero} alt='Ashish Photo' />
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Hero;
