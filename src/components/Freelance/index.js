import React from 'react';
import { useState } from 'react';
import './index.scss';
import Loader from 'react-loaders';
import freelanceData from '../../data/freelanceData.json';
import Popup from '../Popup';

const Freelance = () => {
  const [currentPopup, setCurrentPopup] = useState(null);
  const renderPortfolio = (freelancePortfolio) => {
    return (
      <div className="images-container">
        {freelancePortfolio.map((folder, index) => {
          return (
            <div className="frame" key={index}>
              <img
                src={folder.cover}
                className="cover-image"
                alt="portfolio images"
              />
              <div className="content">
                <p className="title">{folder.title}</p>
                <h4 className="description">{folder.skills}</h4>
                <button onClick={() => setCurrentPopup(index)} className="btn">
                  VIEW
                </button>
              </div>
            </div>
          );
        })}
      </div>
    );
  };

  return (
    <>
      <div className="freelance-container freelance-page">
        <div>{renderPortfolio(freelanceData.portfolio)}</div>
      </div>
      <Popup
        isOpen={currentPopup !== null}
        onClose={() => setCurrentPopup(null)}
      >
        <img
          src={freelanceData.portfolio[currentPopup]?.display}
          className="popup-image"
          alt="portfolio images"
        />
        <div className="text-zone">
          <a
            target="_blank"
            rel="noreferrer"
            href={freelanceData.portfolio[currentPopup]?.url}
          >
            <h1>{freelanceData.portfolio[currentPopup]?.title}</h1>
          </a>
          <p>{freelanceData.portfolio[currentPopup]?.description}</p>
        </div>
      </Popup>
      <Loader type="ball-scale-multiple" />
    </>
  );
};

export default Freelance;
