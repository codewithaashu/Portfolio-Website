import Contact from '../Components/Contact';
import Footer from '../Components/Footer';
import Header from '../Components/Header';

const ContactPage = () => {
  document.title = 'Contact | Ashish Ranjan';
  return (
    <>
      <Header />
      <Contact />
      <Footer />
    </>
  );
};

export default ContactPage;
