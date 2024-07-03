import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Services from './components/Services';
import Footer from './components/Footer';

import Aadhar from './Websites/aadhar';
import Passport from './Websites/passport';
import PanCard from './Websites/pancard';
import DrivingLicense from './Websites/driving';
import VoterId from './Websites/voter';
import RationCard from './Websites/ration';

function App() {
  return (
    <Router>
      <Navbar />
      <Hero />
      <Routes>
        <Route path="/" element={<Services />} />
        <Route path="/aadhar" element={<Aadhar />} />
        <Route path="/passport" element={<Passport />} />
        <Route path="/pancard" element={<PanCard />} />
        <Route path="/drivinglicense" element={<DrivingLicense />} />
        <Route path="/voterid" element={<VoterId />} />
        <Route path="/rationcard" element={<RationCard />} />
      </Routes>
      <Footer />
    </Router>
  );
}

export default App;
