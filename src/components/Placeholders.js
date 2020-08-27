import React, { useState } from 'react';
import { useSelector } from 'react-redux';
import configMachine from '../machines/Configurator';
import { Link } from 'react-router-dom';
import catalog from '../config/catalog';

function listItems(catalog, event) {
  return catalog.map((item, key) => {
    return (
      <button
        key={key}
        onClick={() => {
          console.log(item);
          configMachine.send(event, item);
        }}
      >
        select {item.name} {item.price} €
      </button>
    );
  });
}

export const Version = (props) => {
  const selected = useSelector((state) => state.config.version);
  console.log(selected[0]?.desc);
  return (
    <>
      <Link to="/color">{listItems(catalog.versions, 'select')}</Link>
      <p>{selected[0]?.desc ?? '...'}</p>
    </>
  );
};

export const Color = (props) => {
  const selected = useSelector((state) => state.config.version);
  console.log(selected[0]?.desc);
  // const [show, toggleShow] = useState(true);
  return (
    <>
      <Link to="/color">{listItems(catalog.colors.all, 'select')}</Link>
      <p>{selected[0]?.desc ?? '...'}</p>
    </>
  );
};

export const Rims = (props) => {
  return (
    <div
      style={{ backgroundColor: '#a5d773', width: '100px', height: '100px' }}
    >
      {props.path}
    </div>
  );
};
export const Upholstery = (props) => {
  return (
    <div
      style={{ backgroundColor: '#e9d459', width: '100px', height: '100px' }}
    >
      {props.path}
    </div>
  );
};
export const Equipment = (props) => {
  return (
    <div
      style={{ backgroundColor: '#ee9e67', width: '100px', height: '100px' }}
    >
      {props.path}
    </div>
  );
};
export const Accessories = (props) => {
  return (
    <div
      style={{ backgroundColor: '#e68380', width: '100px', height: '100px' }}
    >
      {props.path}
    </div>
  );
};
export const Summary = (props) => {
  return (
    <div
      style={{ backgroundColor: '#df9ae9', width: '100px', height: '100px' }}
    >
      {props.path}
    </div>
  );
};
