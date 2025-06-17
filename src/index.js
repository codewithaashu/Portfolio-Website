import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import AboutPage from './Pages/AboutPage';
import ServicesPage from './Pages/ServicesPage';
import PortfolioPage from './Pages/PortfolioPage';
import ContactPage from './Pages/ContactPage';
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <BrowserRouter>
    <Routes>
      <Route path='/' element={<App />} />
      <Route path='about' element={<AboutPage />} />
      <Route path='services' element={<ServicesPage />} />
      <Route path='portfolio' element={<PortfolioPage />} />
      <Route path='contact' element={<ContactPage />} />
    </Routes>
  </BrowserRouter>
);
reportWebVitals();
