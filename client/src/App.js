import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Header from "./components/Header";
import Navbar from "./components/Navbar";
import Logo from "./components/Logo";
import Footer from "./components/Footer";
import Home from './pages/Home';
import About from './pages/About';
import Technologies from './pages/Technologies';
import ApiDevelopment from './pages/Api-Development';
import Marketplace from './pages/Marketplace';
import JobOpportunities from './pages/Job-Opportunities';
import Portfolio from './pages/Portfolio';
import Careers from './pages/Careers';
import Insider from './pages/Insider';
import Contact from './pages/Contact';
import SignIn from './pages/Sign-In';
import './index.css';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
// import { Navbar, Nav } from 'react-bootstrap';



function App() {


return (

  <Router>
      <div>
        <Header>
          <Logo/>
          <Navbar/>
        </Header>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/technologies" element={<Technologies />} />
          <Route path="/technologies/api-development" element={<ApiDevelopment />} />
          <Route path="/marketplace" element={<Marketplace />} />
          <Route path="/job-opportunities" element={<JobOpportunities />} />
          <Route path="/portfolio" element={<Portfolio />} />
          <Route path="/careers" element={<Careers />} />
          <Route path="/insider" element={<Insider />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/signin" element={<SignIn />} />
        </Routes>
        <Footer />
      </div>
    </Router>
  );
}

export default App;