import Footer from '../Components/Footer';
import Header from '../Components/Header';
import Services from '../Components/Services';

const ServicesPage = () => {
  document.title = 'Services | Ashish Ranjan';
  return (
    <>
      <Header />
      <Services />
      <Footer />
    </>
  );
};

export default ServicesPage;
