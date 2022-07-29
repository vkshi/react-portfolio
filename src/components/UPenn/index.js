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
                <h4 className="description">{folder.description}</h4>
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
        <p className="popup-title">
          {uPennData.portfolio[currentPopup]?.title}
        </p>
        <h4 className="popup-description">
          {uPennData.portfolio[currentPopup]?.description}
        </h4>
        <p className="popup-url">{uPennData.portfolio[currentPopup]?.url}</p>
      </Popup>
      <Loader type="ball-scale-multiple" />
    </>
  );
};

export default UPenn;
