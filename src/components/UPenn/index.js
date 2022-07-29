import React from 'react';
import { useState } from 'react';
import './index.scss';
import Loader from 'react-loaders';
import uPennData from '../../data/uPennData.json';
import Popup from '../Popup';

const UPenn = () => {
  const [currentPopup, setCurrentPopup] = useState(false);
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
                <Popup
                  key={index}
                  className="view-popup"
                  isOpen={currentPopup === index}
                  onClose={() => setCurrentPopup(null)}
                >
                  <p className="title">{folder.title}</p>
                  <h4 className="description">{folder.description}</h4>
                  <p>{folder.url}</p>
                </Popup>
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
      <Loader type="ball-scale-multiple" />
    </>
  );
};

export default UPenn;
