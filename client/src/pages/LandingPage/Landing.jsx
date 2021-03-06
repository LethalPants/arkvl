import React from 'react';
import './Landing.styles.css';
import { ReactComponent as Logo } from '../../assets/logo.svg';
import { ReactComponent as PlsTrap } from '../../assets/landingpage.svg';
import { Link } from '@reach/router';
import { isMobile } from 'react-device-detect';
import { motion } from 'framer-motion';

const Landing = ({ pageVariants, pageTransition }) => (
  <motion.div
    initial="initial"
    animate="in"
    exit="out"
    variants={pageVariants}
    transition={pageTransition}
  >
    <div className="landing-page">
      <header className="landing-header">
        <nav className="landing-navbar">
          <Link to="/">
            <Logo />
          </Link>

          <div className="left">
            <Link to="/login" className="login-button">
              Login
            </Link>
          </div>
        </nav>
      </header>
      {!isMobile && <h1 className="vertical-text">arkvl.space</h1>}
      <section className="landing">
        <div className="section-third">
          <main className="show">
            <div className="title">
              <h1 className="landing-title">A place to find your escape.</h1>
              <p className="landing-min">
                Arkvl is a platform for you to find new books, based on the
                preferences of people incredibly similar to you. Enrich your
                reality. Embark on a new journey. Discover a new world. Find a
                new best friend.
              </p>
            </div>
          </main>
          <Link to="/register" className="register-button">
            Join Arkvl
          </Link>
        </div>
        <div className="section-third">
          <PlsTrap />
        </div>
      </section>
      <div className="footer">
        <h1 className="footer-message">
          Get in touch with us! Email us at{' '}
          <a href="mailto: queries@arkvl.space">queries@arkvl.space</a>
        </h1>
      </div>
    </div>
  </motion.div>
);

export default Landing;
