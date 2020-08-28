import React from 'react';
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
  return <Link to="/color">{listItems(catalog.versions, 'select')}</Link>;
};

export const Color = (props) => {
  return <Link to="/rims">{listItems(catalog.colors.all, 'next')}</Link>;
};

export const Rims = (props) => {
  const version = useSelector((state) => state.config.version[0]);
  console.log('version', version);
  return (
    <Link to="/upholstery">
      {listItems(catalog.rims.all, 'next')}
      {catalog.rims[version?.name]
        ? listItems(catalog.rims[version.name], 'next')
        : null}
    </Link>
  );
};
export const Upholstery = (props) => {
  const version = useSelector((state) => state.config.version[0]);
  return (
    <Link to="/equipment">
      {listItems(catalog.upholsteries.all, 'next')}
      {catalog.upholsteries[version?.name]
        ? listItems(catalog.upholsteries[version.name], 'next')
        : null}
    </Link>
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
