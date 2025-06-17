import { gql } from 'graphql-request';
import { useEffect, useState } from 'react';
import GraphClient from '../lib/GraphClient';

const Footer = () => {
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
      <div
        className='container py-5'
        style={{ background: 'rgb(10, 1, 3)', maxWidth: '100%' }}
      >
        <div className='row'>
          <div style={{ display: 'flex', justifyContent: 'center' }}>
            <a
              aria-current='page'
              to='/'
              style={{
                color: 'white',
                fontWeight: '900',
                fontSize: '20px',
                fontWeight: '600',
                cursor: 'pointer',
              }}
            >
              Port<span style={{ color: 'rgb(229, 9, 20)' }}>Folio</span>&nbsp;{' '}
              <span
                style={{ borderRight: '2px solid rgb(107, 114, 128)' }}
              ></span>
              &nbsp;
              <span
                className='p2'
                style={{
                  color: 'white',
                  fontWeight: '500',
                  fontSize: '0.85rem',
                }}
              >
                Copyright © {new Date().getFullYear()} CodeWithAashu.com
              </span>
            </a>
          </div>
        </div>
      </div>
    </>
  );
};

export default Footer;
