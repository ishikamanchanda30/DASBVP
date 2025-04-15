import React, { useEffect, useState } from 'react';
import { BrowserRouter as Router, Routes, Route, Outlet } from 'react-router-dom';

import AboutUs from './Pages/AboutUs';
import Contact from './Pages/Contact';
import Cookies from './Pages/Cookies';
import EventPage from './Pages/EventPage';
import FlagshipEvent from './Pages/FlagshipEvent';
import Footer from './Components/Footer';
import Home from './Pages/Home';
import NavBar from './Components/NavBar';
import NavbarMobile from './Components/NavbarMobile';
import Portfolio from './Pages/Portfolio';
import Team from './Pages/Team';

// Main Layout with Footer
const MainLayout: React.FC = () => {
  const [isMobile, setIsMobile] = useState(window.innerWidth <= 720);

  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth <= 720);
    };

    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  return (
    <div className="w-screen">
      {isMobile ? <NavbarMobile /> : <NavBar />}
      <div className="container scroll-smooth w-screen">
        <Outlet />
      </div>
      <Footer />
    </div>
  );
};

// Layout without Footer (for Cookies page)
const NoFooterLayout: React.FC = () => {
  return (
    <div className="w-screen">
      <NavBar />
      <div className="container scroll-smooth w-screen">
        <Outlet />
      </div>
    </div>
  );
};

const App: React.FC = () => {
  return (
    <Router>
      <Routes>
        <Route element={<MainLayout />}>
          <Route path="/" element={<AboutUs />} />
          <Route path="/about-us" element={<AboutUs />} />
          <Route path="/events" element={<EventPage />} />
          <Route path="/flagship-event" element={<FlagshipEvent />} />
          <Route path="/team" element={<Team />} />
          <Route path="/portfolio" element={<Portfolio />} />
          <Route path="/contact" element={<Contact />} />
        </Route>

        <Route element={<NoFooterLayout />}>
          <Route path="/cookies" element={<Cookies />} />
        </Route>
      </Routes>
    </Router>
  );
};

export default App;
