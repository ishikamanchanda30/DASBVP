import AboutUs from './Pages/AboutUs';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Contact from './Pages/Contact';
import Events from './Pages/Events';
import FlagshipEvent from './Pages/FlagshipEvent';
import Footer from './Components/Footer';
import Home from './Pages/Home';
import NavBar from './Components/NavBar';
import Portfolio from './Pages/Portfolio';
import React from 'react';
import Team from './Pages/Team';



const App: React.FC = () => {
  return (
    <Router>
      <div className="w-100%">
        <NavBar />
        <div className="container scroll-smooth">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/about-us" element={<AboutUs />} />
            <Route path="/events" element={<Events />} />
            <Route path="/flagship-event" element={<FlagshipEvent />} />
            <Route path="/team" element={<Team />} />
            <Route path="/portfolio" element={<Portfolio />} />
            <Route path="/contact" element={<Contact />} />
          </Routes>
        </div>
        <Footer />
      </div>
    </Router>
  );
};

export default App;
