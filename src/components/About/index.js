import { useEffect, useState } from "react";
import AnimatedLetters from "../AnimatedLetters";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faFigma,
  faHtml5,
  faCss3Alt,
  faJs,
  faReact,
} from "@fortawesome/free-brands-svg-icons";
import { faImage } from "@fortawesome/free-solid-svg-icons";
import Loader from "react-loaders";
import "./index.scss";

const About = () => {
  const [letterClass, setLetterClass] = useState("text-animate");

  useEffect(() => {
    setTimeout(() => {
      setLetterClass("text-animate-hover");
    }, 3000);
  }, []);

  return (
    <>
      <div className="container about-page">
      <div className="container tab"></div>
        <div className="text-zone">
          <h1>
            <AnimatedLetters
              letterClass={letterClass}
              strArray={"ABOUT ME".split("")}
              index={15}
            />
          </h1>
          <p>Hi, my name is Ki.</p>
          <p align="LEFT">I'm working on my portfolio.</p>
          <p>It's coded in React.js!</p>
        </div>

        <div className="stage-cube-cont">
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
