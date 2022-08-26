import React from 'react';
import { useState } from 'react';
import './index.scss';
import Loader from 'react-loaders';
import moesifData from '../../data/moesifData.json';
import Popup from '../Popup';

const Moesif = () => {
  const [currentPopup, setCurrentPopup] = useState(null);
  const renderPortfolio = (moesifPortfolio) => {
    return (
      <div className="images-container">
        {moesifPortfolio.map((folder, index) => {
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
      <div className="moesif-container moesif-page">
        <div>{renderPortfolio(moesifData.portfolio)}</div>
      </div>
      <Popup
        isOpen={currentPopup !== null}
        onClose={() => setCurrentPopup(null)}
      >
        <img
          src={moesifData.portfolio[currentPopup]?.display}
          className="popup-image"
          alt="portfolio images"
        />
        <div className="text-zone">
          <a
            target="_blank"
            rel="noreferrer"
            href={moesifData.portfolio[currentPopup]?.url}
          >
            <h1>{moesifData.portfolio[currentPopup]?.title}</h1>
          </a>
          <p>{moesifData.portfolio[currentPopup]?.description}</p>
        </div>
      </Popup>
      <Loader type="ball-scale-multiple" />
    </>
  );
};

export default Moesif;
