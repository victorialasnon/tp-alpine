import React, { Component } from 'react';
import '../ConfigStatus.css';

export const ConfigStatus = (props) => {
  return (
    <div
      className="configStatus"
      class="d-flex bd-d-flex align-items-start flex-column bd-highlight mb-3"
    >
      <p className="selectionName">Pure</p>
      <p className="selectionPrice">à partir de</p>
      <p className="selectionPriceValue">50 000€</p>
    </div>
  );
};
