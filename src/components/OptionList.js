import React, { Component } from 'react';
import '../OptionList.css';

export const OptionList = (props) => {
  return (
    <div
      className="buttonListOptionContainer"
      class="d-flex justify-content-start"
    >
      <button type="button" class="btn btn-outline-primary">
        <div className="buttonContent">
          <img
            src="https://cdn.group.renault.com/alp/multimedia_card/7A.jpg.ximg.small.jpg/1538034620846.jpg"
            alt="logoTest"
          />
        </div>
        <div>
          <p>Alpine Télémétrics</p>
        </div>
      </button>

      <button type="button" class="btn btn-outline-primary">
        <div className="buttonContent">
          <img
            src="https://cdn.group.renault.com/alp/multimedia_card/6Q.jpg.ximg.small.jpg/1538034621018.jpg"
            alt="logoTest"
          />
        </div>
        <div>
          <p>Système Audio Focal</p>
        </div>
        <span className="optionsPrice">300€</span>
      </button>
    </div>
  );
};
