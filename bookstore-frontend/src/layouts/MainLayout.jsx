import PropTypes from 'prop-types';
import { Outlet, useLocation } from 'react-router-dom';

import Header from '../components/Header.jsx';
import Footer from '../components/Footer.jsx';
import ServiceStatusStrip from '../components/ServiceStatusStrip.jsx';

import '../styles/layout.css';

export default function MainLayout({ children }) {
  const location = useLocation();

  return (
    <div className="app-shell">
      <Header />
      <ServiceStatusStrip key={location.pathname} />
      <main className="app-shell__content">{children ?? <Outlet />}</main>
      <Footer />
    </div>
  );
}

MainLayout.propTypes = {
  children: PropTypes.node
};
