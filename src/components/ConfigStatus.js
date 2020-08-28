import React from 'react';
import { useSelector } from 'react-redux';
import './ConfigStatus.css';

export const ConfigStatus = (props) => {
  const state = useSelector((state) => state);
  const selected = state.config;

  function sumConfig(config) {
    let total = 0;
    Object.values(config).forEach((setting) => {
      for (let i = 0, length = setting.length; i < length; i++) {
        console.log(setting[i].price);
        total += setting[i].price;
      }
    });
    return total;
  }

  return (
    // <div className="configStatus d-flex bd-d-flex align-items-start flex-column bd-highlight mb-3">
    // </div>
      <div className="status">MODÈLE CONFIGURÉ : {sumConfig(selected)}€</div>
  );
};
