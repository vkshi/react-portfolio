import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import AnimatedLetters from '../AnimatedLetters';
import './index.scss';
import KiLogoOutline from '../../assets/images/KiLogoOutline';
import Loader from 'react-loaders';
import Resume from '../../assets/resume/SHI_VICKY_RESUME.pdf';

const Home = () => {
  const [letterClass, setLetterClass] = useState('text-animate');
  const jobArray = ['designer + developer'.split('')];

  useEffect(() => {
    setTimeout(() => {
      setLetterClass('text-animate-hover');
    }, 4000);
  }, []);

  return (
    <>
      <div className="container home-page">
        <div className="container tab"></div>
        <div className="text-zone">
          <h1>
            <span className={letterClass}>H</span>
            <span className={`${letterClass} _12`}>i</span>
            <span className={`${letterClass} _13`}> </span>
            <span className={`${letterClass} _14`}>I</span>
            <span className={`${letterClass} _15`}>'m</span>
            <span className={`${letterClass} _16`}> </span>
            <span className="first-name">
              <span className={`${letterClass} _17`}>K</span>
              <span className={`${letterClass} _18`}>i</span>
            </span>
            <span className={`${letterClass} _19`}> </span>
            <span className={`${letterClass} _20`}>!</span>
            <br />
            <AnimatedLetters
              letterClass={letterClass}
              strArray={jobArray}
              index={15}
            />
          </h1>
          <h2>
            I'm an <b>UX Engineer</b> based in San Francisco, CA with experience
            in designing and deploying websites. I also work in graphic and ad
            design.
          </h2>
          <div className="button-container">
            <a
              href={Resume}
              className="flat-button"
              target="_blank"
              rel="noreferrer"
            >
              RESUME
            </a>
            <Link to="/category" className="flat-button">
              PROJECTS
            </Link>
            <Link to="/contact" className="flat-button">
              CONTACT ME
            </Link>
          </div>
        </div>
        <KiLogoOutline className="ki-logo-outline" />
      </div>
      <Loader type="ball-scale-multiple" />
    </>
  );
};

export default Home;
