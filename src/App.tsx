import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import NavBar from './Components/NavBar';
import AboutUs from './Pages/AboutUs';
import Events from './Pages/Events';
import FlagshipEvent from './Pages/FlagshipEvent';
import Team from './Pages/Team';
import Portfolio from './Pages/Portfolio';
import Contact from './Pages/Contact';

const App: React.FC = () => {
  return (
    <Router>
      <div className="min-h-screen bg-neutral-900">
        <NavBar />
        <div className="container mx-auto pt-24">
          <Routes>
            <Route path="/" element={<AboutUs />} />
            <Route path="/about-us" element={<AboutUs />} />
            <Route path="/events" element={<Events />} />
            <Route path="/flagship-event" element={<FlagshipEvent />} />
            <Route path="/team" element={<Team />} />
            <Route path="/portfolio" element={<Portfolio />} />
            <Route path="/contact" element={<Contact />} />
          </Routes>
        </div>
      </div>
    </Router>
  );
};

export default App;
