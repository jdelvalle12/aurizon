import React from 'react';
import { Link } from 'react-router-dom';

import '../styles/SiteMap.css';

const Sitemap = () => {
  return (
    <div className="sitemap-page">

      {/* HERO */}
      <section className="sitemap-hero">

        <h1>Website Sitemap</h1>

        <p>
          Browse every section of the Aurizon Technologies website.
        </p>

      </section>

      {/* GRID */}

      <section className="sitemap-grid">

        {/* COMPANY */}

        <div className="sitemap-card">

          <h2>Company</h2>

          <ul>

            <li><Link to="/">Home</Link></li>
            <li><Link to="/about">About</Link></li>
            <li><Link to="/innovation">Innovation</Link></li>
            <li><Link to="/careers">Careers</Link></li>
            <li><Link to="/contact">Contact</Link></li>
            <li><Link to="/about#faq">FAQ</Link></li>

          </ul>

        </div>

        {/* SOLUTIONS */}

        <div className="sitemap-card">

          <h2>Solutions</h2>

          <ul>

            <li><Link to="/solutions">Solutions Overview</Link></li>
            <li><Link to="/solutions/software-development">Software Development</Link></li>
            <li><Link to="/solutions/research-development">Research & Development</Link></li>
            <li><Link to="/solutions/it-support">IT Support</Link></li>
            <li><Link to="/solutions/cloud-infrastructure">Cloud & Infrastructure</Link></li>
            <li><Link to="/solutions/cybersecurity">Cybersecurity</Link></li>
            <li><Link to="/solutions/technology-consulting">Technology Consulting</Link></li>

          </ul>

        </div>

        {/* INDUSTRIES */}

        <div className="sitemap-card">

          <h2>Industries</h2>

          <ul>

            <li><Link to="/industries">Industries Overview</Link></li>
            <li><Link to="/industries/technology">Technology</Link></li>
            <li><Link to="/industries/financial-services">Financial Services</Link></li>
            <li><Link to="/industries/logistics-transportation">Logistics & Transportation</Link></li>
            <li><Link to="/industries/real-estate">Real Estate</Link></li>
            <li><Link to="/industries/travel-hospitality">Travel & Hospitality</Link></li>
            <li><Link to="/industries/media-entertainment">Media & Entertainment</Link></li>
            <li><Link to="/industries/sports-recreation">Sports & Recreation</Link></li>
            <li><Link to="/industries/food-beverage">Food & Beverage</Link></li>

          </ul>

        </div>

        {/* RESOURCES */}

        <div className="sitemap-card">

          <h2>Resources</h2>

          <ul>

            <li><Link to="/casestudies">Case Studies</Link></li>
            <li><Link to="/insider">Insights</Link></li>

          </ul>

        </div>

        {/* ECOSYSTEM */}

        <div className="sitemap-card">

          <h2>Ecosystem</h2>

          <ul>

            <li>
              <a
                href="https://www.mosaicdigitalcreations.com"
                target="_blank"
                rel="noopener noreferrer"
              >
                Mosaic Digital Creations
              </a>
            </li>

            <li>Marketplace (Coming Soon)</li>
            <li>Aurizon University (Coming Soon)</li>
            <li>Developer Resources (Coming Soon)</li>
            <li>Documentation (Coming Soon)</li>

          </ul>

        </div>

        {/* LEGAL */}

        <div className="sitemap-card">

          <h2>Legal</h2>

          <ul>

            <li><Link to="/footer/privacy-policy">Privacy Policy</Link></li>
            <li><Link to="/footer/terms-of-service">Terms of Service</Link></li>
            <li><Link to="/footer/sitemap">Sitemap</Link></li>

          </ul>

        </div>

      </section>

    </div>
  );
};

export default Sitemap;