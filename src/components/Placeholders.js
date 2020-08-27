import React, { useState } from 'react';
import { useSelector } from 'react-redux';
import Toast from 'react-bootstrap/Toast';
import configMachine from '../machines/Configurator';
import { Link } from 'react-router-dom';


export const Version = (props) => {
  const version = useSelector((state) => state.config.version);
  // console.log(props);
  return (
    <div
      style={{ backgroundColor: '#7ea7e5', width: '100px', height: '100px' }}
    >
      <Link to="/color">

      <button
        onClick={() => {
          configMachine.send('select', ['Pure']);
        }}
        >
        select Pure
      </button>
      <button
        onClick={() => {
          configMachine.send('select', ['Legend']);
        }}
        >
        select Legend
      </button>
      {version[0]}
        </Link>
    </div>
  );
};
export const Color = (props) => {
  const [show, toggleShow] = useState(true);
  return (
    <Toast
      show={show}
      style={{ backgroundColor: '#63d5c0', width: '100px', height: '100px' }}
      onClose={() => toggleShow(!show)}
    >
      <Toast.Header>
        <strong className="mr-auto">{props.path}</strong>
      </Toast.Header>
      <Toast.Body>
        <div
          style={{
            backgroundColor: '#63d5c0',
            width: '100px',
            height: '100px',
          }}
        ></div>
      </Toast.Body>
    </Toast>
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
