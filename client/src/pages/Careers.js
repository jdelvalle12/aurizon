import React from 'react';

import CareersBackground from '../images/careers-background.jpg';
import LearningToo from '../images/learning-2.jpg';
import Learning from '../images/learning.jpg';
import Working from '../images/working.jpg';
import HavingFun from '../images/having-fun.jpg';

import BalanceIcon from '../images/work-life-balance.png';
import PersonalGrowthIcon from '../images/personal-growth.png';
import AnywhereIcon from '../images/diversity.png';
import EquityIcon from '../images/equity.png';
import ProfessionalIcon from '../images/education.png';
import HealthIcon from '../images/health.png';


import '../App.css';
import '../styles/Careers.css';

const Careers = () => {
  return (
    <div className='careers-container'>

      {/* HERO SECTION */}
      <section className='careers-hero'>
        <img
          src={CareersBackground}
          alt='Aurizon Careers Background'
          className='careers-background'
        />

        <div className='careers-overlay'></div>

        <div className='career-title'>
          <h1>Careers</h1>

          <h2>The Future Starts With You</h2>

          <p className='head-text'>
            Join a growing technology company focused on innovation,
            scalable systems, research, and future-driven solutions.
          </p>
        </div>
      </section>

      {/* WHY WORK SECTION */}
      <section className='career-section'>
        <img
          src={LearningToo}
          alt='Team collaboration session'
          className='career-image'
        />

        <div className='career-text'>
          <h2>Why Work at Aurizon?</h2>

          <p>
            At Aurizon Technologies, we are building more than a company —
            we are building an ecosystem focused on innovation, technology,
            and long-term impact.
          </p>

          <p>
            We welcome individuals from diverse backgrounds who are driven,
            curious, creative, and passionate about solving problems and
            shaping the future through technology.
          </p>
        </div>
      </section>

      {/* CULTURE SECTION */}
      <section className='career-section reverse'>
        <img
          src={Learning}
          alt='Learning and professional development'
          className='career-image'
        />

        <div className='career-text'>
          <h2>Growth & Innovation</h2>

          <p>
            Aurizon encourages continuous learning, collaboration,
            and forward-thinking ideas. We believe innovation thrives
            when people are empowered to explore new technologies,
            challenge ideas, and think beyond limitations.
          </p>

          <p>
            As the company expands into areas such as IT solutions,
            research & development, cybersecurity, infrastructure,
            and future technologies, team members will have the
            opportunity to grow alongside the company.
          </p>
        </div>
      </section>

      {/* CULTURE / PERSONALITY */}
      <section className='career-section'>
        <img
          src={HavingFun}
          alt='Positive and collaborative work environment'
          className='career-image'
        />

        <div className='career-text'>
          <h2>Culture & Environment</h2>

          <p>
            We believe great work environments are built on authenticity,
            collaboration, and respect. At Aurizon, we encourage people
            to bring their personalities, perspectives, and ideas to
            the table.
          </p>

          <p>
            Our goal is to create an environment where innovation,
            creativity, professionalism, and work-life balance can
            coexist together.
          </p>
        </div>
      </section>

      {/* WHAT WE OFFER */}
      <section className='we-offer'>

        <h2>What We Offer</h2>

        <p className='offer-intro'>
          We believe in transparency, long-term growth, and creating
          opportunities for people who want to help build the future
          of technology alongside us.
        </p>

        <div className='offer-grid'>

          <div className='offer-card'>
            <img
              className='offer-icon'
              src={BalanceIcon}
              alt='Work Life Balance'
            />

            <h3>Work-Life Balance</h3>

            <p>
              Flexible work environments that support both professional
              success and personal well-being.
            </p>
          </div>

          <div className='offer-card'>
            <img
              className='offer-icon'
              src={AnywhereIcon}
              alt='Remote Work'
            />

            <h3>Remote Flexibility</h3>

            <p>
              Work remotely while staying connected with a collaborative,
              future-focused team environment.
            </p>
          </div>

          <div className='offer-card'>
            <img
              className='offer-icon'
              src={PersonalGrowthIcon}
              alt='Personal Growth'
            />

            <h3>Personal Growth</h3>

            <p>
              Opportunities to continue learning, developing skills,
              and growing professionally alongside the company.
            </p>
          </div>

          <div className='offer-card'>
            <img
              className='offer-icon'
              src={ProfessionalIcon}
              alt='Professional Development'
            />

            <h3>Professional Development</h3>

            <p>
              Access to ongoing education, future internal training,
              and exposure to emerging technologies and systems.
            </p>
          </div>

          <div className='offer-card'>
            <img
              className='offer-icon'
              src={EquityIcon}
              alt='Future Opportunities'
            />

            <h3>Future Opportunities</h3>

            <p>
              As Aurizon grows, additional long-term benefits,
              leadership opportunities, and expansion initiatives
              will continue to evolve.
            </p>
          </div>

          <div className='offer-card'>
            <img
              className='offer-icon'
              src={HealthIcon}
              alt='Health Benefits'
            />

            <h3>Health & Wellness</h3>

            <p>
              We plan to expand future wellness and healthcare
              initiatives as the company continues growing.
            </p>
          </div>

        </div>
      </section>

      {/* HIRING PROCESS */}
      <section className='hiring-process'>

        <h2>Hiring Process</h2>

        <p className='hiring-intro'>
          We value potential, ambition, and problem-solving abilities.
          Our hiring process is designed to help us understand both
          your skills and who you are as an individual.
        </p>

        <div className='hiring-grid'>

          <div className='hiring-card'>
            <h3>1</h3>

            <h4>Application</h4>

            <p>
              Submit your application and tell us about your
              background, experience, and interests.
            </p>
          </div>

          <div className='hiring-card'>
            <h3>2</h3>

            <h4>Initial Conversation</h4>

            <p>
              A conversation focused on learning more about your
              goals, experience, and alignment with Aurizon.
            </p>
          </div>

          <div className='hiring-card'>
            <h3>3</h3>

            <h4>Evaluation</h4>

            <p>
              Depending on the role, candidates may complete
              technical, analytical, or problem-solving evaluations.
            </p>
          </div>

          <div className='hiring-card'>
            <h3>4</h3>

            <h4>Interviews</h4>

            <p>
              Meet with the team to discuss your skills,
              experiences, and future potential.
            </p>
          </div>

          <div className='hiring-card'>
            <h3>5</h3>

            <h4>Offer</h4>

            <p>
              Selected candidates will receive an official
              offer and onboarding information.
            </p>
          </div>

          <div className='hiring-card'>
            <h3>6</h3>

            <h4>Welcome to Aurizon</h4>

            <p>
              Begin your journey with Aurizon Technologies
              and help shape the future with us.
            </p>
          </div>

        </div>
      </section>

      {/* FINAL CTA */}
      <section className='career-section reverse'>

        <img
          src={Working}
          alt='Professional technology work environment'
          className='career-image'
        />

        <div className='career-text'>
          <h2>Build the Future With Us</h2>

          <p>
            Aurizon Technologies is continuing to grow and expand into
            new areas of technology, innovation, and digital solutions.
          </p>

          <p>
            If you are passionate about technology, innovation,
            and long-term growth, we encourage you to stay connected
            for future opportunities.
          </p>
        </div>
      </section>

      {/* JOB OPPORTUNITIES */}
      <section className='opportunity'>

        <h2>Job Opportunities</h2>

        <p>
          There are currently no open positions available.
        </p>

        <p>
          As Aurizon continues growing, future opportunities
          will be posted here.
        </p>

      </section>

      {/* RESUME CTA */}
      <section className='dont-see'>

        <h2>Don't See the Right Role?</h2>

        <p>
          Send your resume anyway and we will keep you in mind
          for future opportunities.
        </p>

        <a
          href='mailto:jdelvalle88@live.com'
          className='careers-button'
        >
          Send Your Resume
        </a>

      </section>

    </div>
  );
};

export default Careers;