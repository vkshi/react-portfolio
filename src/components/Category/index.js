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
          className="category upenn"
          activeclassname="active"
          to="/upenn"
        >
          UPENN
        </NavLink>
        <NavLink
          exact="true"
          className="category moesif"
          activeclassname="active"
          to="/moesif"
        >
          MOESIF
        </NavLink>
        <NavLink
          exact="true"
          className="category freelance"
          activeclassname="active"
          to="/freelance"
        >
          FREELANCE
        </NavLink>
      </div>
      <Loader type="ball-scale-multiple" />
    </>
  );
};

export default Category;
