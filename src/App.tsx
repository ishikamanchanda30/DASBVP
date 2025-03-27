import AboutUs from './Pages/AboutUs';
import { BrowserRouter as Router, Routes, Route, Outlet } from 'react-router-dom';
import Contact from './Pages/Contact';
import Cookies from './Pages/Cookies';
import Events from './Pages/Events';
import FlagshipEvent from './Pages/FlagshipEvent';
import Footer from './Components/Footer';
import Home from './Pages/Home';
import NavBar from './Components/NavBar';
import Portfolio from './Pages/Portfolio';
import React from 'react';
import Team from './Pages/Team';

// Main Layout with Footer
const MainLayout: React.FC = () => {
  return (
    <div className="w-screen">
      <NavBar />
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
          <Route path="/" element={<Home />} />
          <Route path="/about-us" element={<AboutUs />} />
          <Route path="/events" element={<Events />} />
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