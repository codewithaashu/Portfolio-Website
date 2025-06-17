import { gql } from 'graphql-request';
import { useState } from 'react';
import { ToastContainer, toast } from 'react-toastify';
import GraphClient from '../lib/GraphClient';
import 'react-toastify/dist/ReactToastify.css';

const ContactForm = () => {
  const [userData, setUserData] = useState({
    name: '',
    email: '',
    phone: '',
    message: '',
  });
  const [loading, setLoading] = useState(false);

  const error = (msg = 'Please, fill out the form.') =>
    toast.error(msg, {
      theme: 'colored',
      position: 'top-right',
      autoClose: 3000,
    });

  const success = () =>
    toast.success('Message successfully sent!', {
      theme: 'colored',
      position: 'top-right',
      autoClose: 3000,
    });

  const postUserData = (event) => {
    const { name, value } = event.target;
    setUserData({ ...userData, [name]: value });
  };

  const sumbitForm = async (e) => {
    e.preventDefault();
    const { name, email, phone, message } = userData;

    if (!name || !email || !phone || !message) {
      error();
      return;
    }

    setLoading(true);
    try {
      const mutation = gql`
        mutation CreateAndPublishEnquiry(
          $fullName: String!
          $emailId: String!
          $phoneNumber: String!
          $message: String!
        ) {
          createEnquiry(
            data: {
              fullName: $fullName
              emailId: $emailId
              phoneNumber: $phoneNumber
              message: $message
            }
          ) {
            id
          }
          publishManyEnquiriesConnection(to: PUBLISHED) {
            edges {
              node {
                id
              }
            }
          }
        }
      `;

      const result = await GraphClient(mutation, {
        fullName: name,
        emailId: email,
        phoneNumber: phone,
        message,
      });

      if (result?.createEnquiry?.id) {
        success();
        setUserData({ name: '', email: '', phone: '', message: '' });
      } else {
        error('Something went wrong. Please try again.');
      }
    } catch (err) {
      console.error(err);
      error('Failed to submit. Please check console.');
    } finally {
      setLoading(false);
    }
  };

  return (
    <>
      <form className='form-card-box' onSubmit={sumbitForm}>
        {['name', 'email', 'phone'].map((field, idx) => (
          <div className='form-group mt-4' key={idx}>
            <label className='labelClass label-div'>
              {field === 'name'
                ? 'Full Name'
                : field === 'email'
                ? 'Email address'
                : 'Phone Number'}
            </label>
            <input
              type={field === 'email' ? 'email' : 'text'}
              name={field}
              className='form-control input-div'
              placeholder={`Enter your ${
                field === 'name' ? 'Full Name' : field
              }`}
              value={userData[field]}
              onChange={postUserData}
            />
          </div>
        ))}
        <div className='form-group mt-4'>
          <label className='labelClass label-div'>Message</label>
          <textarea
            name='message'
            className='form-control input-div'
            placeholder='Enter your Message'
            style={{ height: '100px' }}
            value={userData.message}
            onChange={postUserData}
          />
        </div>
        <div style={{ display: 'flex', justifyContent: 'center' }}>
          <button
            type='submit'
            className='form-btn mt-4 mx-2'
            disabled={loading}
            style={{
              height: 'min-content',
              border: 'none',
              fontWeight: 600,
              fontSize: '15px',
              outline: 'none',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              gap: '0.5rem',
              padding: '0.6rem 1.2rem',
              opacity: loading ? 0.7 : 1,
              cursor: loading ? 'not-allowed' : 'pointer',
            }}
          >
            {loading ? (
              <>
                <span
                  className='spinner-border spinner-border-sm'
                  role='status'
                  aria-hidden='true'
                ></span>
                Sending...
              </>
            ) : (
              'Send Message'
            )}
          </button>
        </div>
      </form>

      <ToastContainer />
    </>
  );
};

export default ContactForm;
