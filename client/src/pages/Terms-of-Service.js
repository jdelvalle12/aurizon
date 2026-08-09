import React from 'react';

import '../styles/Terms-of-Service.css';

const TermsOfService = () => {

  const LAST_UPDATED = "August 6, 2026";

  return (
    <div className="terms-of-service-page">

      <div className="terms-of-service-header">
        <h1>Terms of Service</h1>
        <p>Last Updated: {LAST_UPDATED}</p>
      </div>

      <section className="terms-of-service-section">
        <h2>Acceptance of Terms</h2>

        <p>
          By accessing or using the Aurizon Technologies website, you
          agree to be bound by these Terms of Service. If you do not
          agree with these terms, please discontinue use of this website.
        </p>

      </section>

      <section className="terms-of-service-section">

        <h2>Website Use</h2>

        <p>
          This website is intended to provide information about
          Aurizon Technologies, our services, products, research,
          and technology initiatives.
        </p>

        <p>
          You agree to use this website only for lawful purposes and
          in a manner that does not interfere with the operation,
          security, or accessibility of the website.
        </p>

      </section>

      <section className="terms-of-service-section">

        <h2>Intellectual Property</h2>

        <p>
          Unless otherwise stated, all content available on this
          website—including text, graphics, logos, software,
          designs, branding, documentation, images, videos,
          and other materials—is the property of Aurizon
          Technologies or its licensors and is protected by
          applicable intellectual property laws.
        </p>

        <p>
          You may not reproduce, distribute, modify,
          or commercially use any content without prior
          written permission.
        </p>

      </section>

      <section className="terms-of-service-section">

        <h2>User Responsibilities</h2>

        <p>Users agree not to:</p>

        <ul>
          <li>Attempt unauthorized access to our systems.</li>
          <li>Disrupt website functionality.</li>
          <li>Upload malicious software or code.</li>
          <li>Misrepresent themselves or their organization.</li>
          <li>Violate applicable laws while using this website.</li>
        </ul>

      </section>

      <section className="terms-of-service-section">

        <h2>Third-Party Links</h2>

        <p>
          Our website may include links to third-party websites
          for convenience or informational purposes.
          Aurizon Technologies is not responsible for the content,
          security, or privacy practices of those websites.
        </p>

      </section>

      <section className="terms-of-service-section">

        <h2>Disclaimer</h2>

        <p>
          The information provided on this website is offered
          "as is" and for general informational purposes only.
          While we strive to keep information accurate and
          up to date, Aurizon Technologies makes no guarantees
          regarding completeness, accuracy, or reliability.
        </p>

      </section>

      <section className="terms-of-service-section">

        <h2>Limitation of Liability</h2>

        <p>
          To the fullest extent permitted by law,
          Aurizon Technologies shall not be liable
          for any indirect, incidental, consequential,
          or special damages arising from your use
          of this website.
        </p>

      </section>

      <section className="terms-of-service-section">

        <h2>Service Availability</h2>

        <p>
          We reserve the right to modify, suspend,
          or discontinue any part of the website
          without prior notice.
        </p>

      </section>

      <section className="terms-of-service-section">

        <h2>Changes to These Terms</h2>

        <p>
          Aurizon Technologies may update these Terms
          of Service periodically. Continued use of the
          website after changes are posted constitutes
          acceptance of those changes.
        </p>

      </section>

      <section className="terms-of-service-section">

        <h2>Governing Law</h2>

        <p>
          These Terms of Service shall be governed by
          the laws of the State of Florida, United States,
          without regard to conflict of law principles.
        </p>

      </section>

      <section className="terms-of-service-section">

        <h2>Contact Information</h2>

        <p>
          If you have questions regarding these Terms
          of Service, please contact Aurizon Technologies
          through our Contact page.
        </p>

      </section>

    </div>
  );
};

export default TermsOfService;