import About from '../Components/About';
import Footer from '../Components/Footer';
import Header from '../Components/Header';

const AboutPage = () => {
  document.title = 'About | Ashish Ranjan';
  return (
    <>
      <Header />
      <About />
      <Footer />
    </>
  );
};

export default AboutPage;
