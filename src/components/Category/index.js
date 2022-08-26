import React from 'react';
import './index.scss';
import { NavLink } from 'react-router-dom';
import Loader from 'react-loaders';

const Category = () => {
  return (
    <>
      <div className="container category-container category-page">
        <NavLink
          exact="true"
          className="category moesif"
          activeclassname="active"
          to="/moesif"
        >
          <span>
            <h1>MOESIF</h1> <br /> <h6>(UI/UX, Frontend, Marketing/Content)</h6>
          </span>
        </NavLink>
        <NavLink
          exact="true"
          className="category freelance"
          activeclassname="active"
          to="/freelance"
        >
          <span>
            <h1>Freelance</h1> <br /> <h6>(Graphic Design, MISC)</h6>
          </span>
        </NavLink>
        <NavLink
          exact="true"
          className="category upenn"
          activeclassname="active"
          to="/upenn"
        >
          <span>
            <h1>UPENN</h1> <br /> <h6>(Coursework)</h6>
          </span>
        </NavLink>
      </div>
      <Loader type="ball-scale-multiple" />
    </>
  );
};

export default Category;
