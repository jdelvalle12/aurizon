import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Header from "./components/Header";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import Home from './pages/Home';
import About from './pages/About';
import Technologies from './pages/Technologies';
import Portfolio from './pages/Portfolio';
import Careers from './pages/Careers';
import Contact from './pages/Contact';
import './index.css';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
// import { Navbar, Nav } from 'react-bootstrap';



function App() {


return (

  <Router>
      <div>
        <Header>
          <Navbar/>
        </Header>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/technologies" element={<Technologies />} />
          <Route path="/portfolio" element={<Portfolio />} />
          <Route path="/careers" element={<Careers />} />
          <Route path="/contact" element={<Contact />} />
        </Routes>
        <Footer />
      </div>
    </Router>
  );
}

export default App;