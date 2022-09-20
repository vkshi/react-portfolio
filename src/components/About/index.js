import { useEffect, useState } from 'react';
import AnimatedLetters from '../AnimatedLetters';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
  faFigma,
  faHtml5,
  faCss3Alt,
  faJs,
  faReact,
} from '@fortawesome/free-brands-svg-icons';
import { faImage } from '@fortawesome/free-solid-svg-icons';
import Resume from '../../assets/resume/SHI_VICKY_RESUME.pdf';
import Loader from 'react-loaders';
import './index.scss';

const About = () => {
  const [letterClass, setLetterClass] = useState('text-animate');

  useEffect(() => {
    setTimeout(() => {
      setLetterClass('text-animate-hover');
    }, 3000);
  }, []);

  return (
    <>
      <div className="container about-page">
        <div className="tab"></div>
        <div className="text-zone">
          <h1>
            <AnimatedLetters
              letterClass={letterClass}
              strArray={'ABOUT ME'.split('')}
              index={15}
            />
          </h1>
          <p>
            Hi, My name is Ki and I'm a designer who can code. I graduated in
            May 2021 and have a Bachelor of Arts in Visual Studies from the
            University of Pennsylvania. Welcome to my portfolio! This is coded
            with React.js and SCSS. It's currently populated with projects from
            my first job and my undergraduate coursework.
          </p>
          <p>
            I am trained in UI/frontend development and design via the HTML,
            CSS, and React.js with Typescript along with Figma and the Adobe
            Creative Suite. I can also do some object-oriented programming with
            Java and data analysis with Python/Panda, but I prefer the frontend.
            I am an eager student and will happily engage with other coding
            languages if given a chance to learn them.
          </p>

          <p>
            I am told that I'm friendly and easily to work with, which is great
            because I worked cross-functionally among multiple teams on a daily
            basis in my last position. Curently, I am looking for my next
            opportunity where I can continue to grow both as a designer and a
            developer.
          </p>
          <a
            href={Resume}
            className="flat-button"
            target="_blank"
            rel="noreferrer"
          >
            RESUME
          </a>
        </div>

        <div className="stage-cube-cont">
          <div className="stars"></div>
          <div className="stars2"></div>
          <div className="stars3"></div>
          <div className="cubespinner">
            <div className="face1">
              <FontAwesomeIcon icon={faReact} color="#5ED4F4" />
            </div>
            <div className="face2">
              <FontAwesomeIcon icon={faImage} color="#FFFFFF" />
            </div>
            <div className="face3">
              <FontAwesomeIcon icon={faHtml5} color="#e34f26" />
            </div>
            <div className="face4">
              <FontAwesomeIcon icon={faCss3Alt} color="#28A4D9" />
            </div>
            <div className="face5">
              <FontAwesomeIcon icon={faJs} color="#f7df1e" />
            </div>
            <div className="face6">
              <FontAwesomeIcon icon={faFigma} color="#FFFFFF" />
            </div>
          </div>
        </div>
      </div>

      <Loader type="ball-scale-multiple" />
    </>
  );
};

export default About;
