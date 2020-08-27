import React, { Component } from 'react';
import './ConfigSummary.css';

export const ConfigSummary = (props) => {
  return (
    <div className="configStatus d-flex bd-d-flex align-items-end flex-column bd-highlight mb-3">
      <div className="selectionVersion">
        Version
        <p className="versionPrice">S</p>
        <p className="versionPriceValue">67 900 €</p>
        <a href="#">changer</a>
      </div>

      <div className="selectionColor">
        Couleur
        <p className="colorPrice">Blanc Glacier</p>
        <p className="colorPriceValue">0 €</p>
        <a href="#">changer</a>
      </div>

      <div className="selectionRims">
        Jantes et roues
        <p className="rimsPrice">Jantes GT Race 18&lsquo&lsquo Noir Mat.</p>
        <p className="rimsPriceValue">0 €</p>
        <a href="#">changer</a>
      </div>

      <div className="selectionSaddlery">
        Sellerie
        <p className="SaddleryPrice">Cuir / Dinamica avec surpiqûres Orange</p>
        <p className="SaddleryPriceValue">inclus</p>
        <a href="#">changer</a>
      </div>

      <div className="selectionEquipement">
        Equipements
        <p className="EquipementPrice">Aucun item sélectionné</p>
        <p className="EquipementPriceValue">0 €</p>
        <a href="#">choisir</a>
      </div>

      <div className="selectionAccessories">
        Accessoires
        <p className="AccessoriesPrice">Aucun item sélectionné</p>
        <p className="AccessoriesPriceValue">0 €</p>
        <a href="#">choisir</a>
      </div>

      <div className="selectionSeriesEquipement">
        Equipements de série
        <a href="#">afficher</a>
      </div>

      <div className="selectiontechnicalCaracteristic">
        Caractéristiques techniques
        <a href="#">afficher</a>
      </div>
    </div>
  );
};
