import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Header from "./components/Header";
import Navbar from "./components/Navbar";
import Logo from "./components/Logo";
import Footer from "./components/Footer";
import ScrollToTop from './components/ScrollToTop';
import Home from './pages/Home';
import About from './pages/About';
import Solutions from './pages/Solutions';
import SoftwareDevelopment from './pages/SoftwareDevelopment';
import ItSupport from './pages/ItSupport';
import Cybersecurity from './pages/Cybersecurity';
import CloudInfrastructure from './pages/CloudInfrastructure';
import TechnologyConsulting from './pages/TechnologyConsulting';
import ResearchDevelopment from './pages/ResearchDevelopment';
import Industries from './pages/Industries';
import AurizonUniversity from './pages/Aurizon-University';
import Marketplace from './pages/Marketplace';
import CaseStudies from './pages/CaseStudies';
import Careers from './pages/Careers';
import Insights from './pages/Insights';
import Contact from './pages/Contact';
import SignIn from './pages/Sign-In';
import './index.css';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
// import { Navbar, Nav } from 'react-bootstrap';



function App() {


return (

  <Router>

    <ScrollToTop />

      <div>
        <Header>
          <Logo/>
          <Navbar/>
        </Header>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/solutions" element={<Solutions />} />
          <Route path="/solutions/software-development" element={<SoftwareDevelopment />} />
          <Route path="/solutions/it-support" element={<ItSupport />} />
          <Route path="/solutions/cybersecurity" element={<Cybersecurity />} />
          <Route path="/solutions/cloud-infrastructure" element={<CloudInfrastructure />} />
          <Route path="/solutions/technology-consulting" element={<TechnologyConsulting />} />
          <Route path="/solutions/research-development" element={<ResearchDevelopment />} />
          <Route path="/industries" element={<Industries />} />
          <Route path="/aurizon-university" element={<AurizonUniversity />} />
          <Route path="/marketplace" element={<Marketplace />} />
          <Route path="/casestudies" element={<CaseStudies />} />
          <Route path="/careers" element={<Careers />} />
          <Route path="/insights" element={<Insights />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/signin" element={<SignIn />} />
        </Routes>
        <Footer />
      </div>
    </Router>
  );
}

export default App;