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
            Hi! My name is Ki and I am a frontend developer and a designer. I
            graduated in May 2021 and have a Bachelor of Arts in Visual Studies
            from the University of Pennsylvania! Welcome to my portfolio! This
            is coded with React.js and SCSS. It's currently populated with
            coursework and projects from my first job.
          </p>
          <p>
            I am trained in graphic design, branding, and web development via
            the Adobe Suite, HTML, CSS/SCSS, Javascript, and React.js. My
            back-end skills are more limited, but I can do some object-oriented
            programming with Java and data analysis with Python/Panda. I am an
            eager student and will happily engage with other coding languages if
            given a chance to learn them.
          </p>

          <p>
            I want to grow both as a designer and a developer. Although I am
            very independent, I have yet had the chance to work as a team member
            alongside other designers and developers. I am currently seeking
            collaborative opportunities!
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
