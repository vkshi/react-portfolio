import React from 'react';
import { useState } from 'react';
import './index.scss';
import Loader from 'react-loaders';
import uPennData from '../../data/uPennData.json';
import Popup from '../Popup';

const UPenn = () => {
  const [currentPopup, setCurrentPopup] = useState(null);
  const renderPortfolio = (uPennPortfolio) => {
    return (
      <div className="images-container">
        {uPennPortfolio.map((folder, index) => {
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
      <div className="upenn-container upenn-page">
        <div>{renderPortfolio(uPennData.portfolio)}</div>
      </div>
      <Popup
        isOpen={currentPopup !== null}
        onClose={() => setCurrentPopup(null)}
      >
        <div className="contain-popup">
          <img
            src={uPennData.portfolio[currentPopup]?.display}
            className="popup-image"
            alt="portfolio images"
          />
          <div className="text-zone">
            <h1>{uPennData.portfolio[currentPopup]?.title}</h1>
            <p>{uPennData.portfolio[currentPopup]?.description}</p>
            <a
              className="flat-button"
              target="_blank"
              rel="noreferrer"
              href={uPennData.portfolio[currentPopup]?.url}
            >
              More
            </a>
          </div>
        </div>
      </Popup>
      <Loader type="ball-scale-multiple" />
    </>
  );
};

export default UPenn;
