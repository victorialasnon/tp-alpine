import React from 'react';
import './ConfigStatus.css';

export const ConfigStatus = (props) => {
  return (
    <div
      className="configStatus d-flex bd-d-flex align-items-start flex-column bd-highlight mb-3"
    >
      <p className="selectionName">Pure</p>
      <p className="selectionPrice">à partir de</p>
      <span className="selectionPriceValue">50 000€</span>
    </div>
  );
};
