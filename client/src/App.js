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
import Technology from './pages/Technology';
import LogisticsTransportation from './pages/Logistics-Transportation';
import FinancialServices from './pages/Financial-Services';
import RealEstate from './pages/Real-Estate';
import TravelHospitality from './pages/Travel-Hospitality';
import MediaEntertainment from'./pages/Media-Entertainment';
import SportsRecreation from './pages/Sports-Recreation';
import FoodBeverage from './pages/Food-Beverage';
import Innovations from './pages/Innovations';
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
          <Route path="/industries/technology" element={<Technology />} />
          <Route path="/industries/logistics-transportation" element={<LogisticsTransportation />} />
          <Route path="/industries/financial-services" element={<FinancialServices />} />
          <Route path="/industries/real-estate" element={<RealEstate />} />
          <Route path="/industries/travel-hospitality" element={<TravelHospitality />} />
          <Route path="/industries/media-entertainment" element={<MediaEntertainment />} />
          <Route path="/industries/sports-recreation" element={<SportsRecreation />} />
          <Route path="/industries/food-beverage" element={<FoodBeverage />} />
          <Route path="/innovations" element={<Innovations />} />
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