import React from 'react';
import './App.css';
import { useSelector } from 'react-redux';
import configMachine from './machines/Configurator';
import { Breadcrumbs } from './components/Breadcrumbs';
import {ConfigSummary} from './components/ConfigSummary';

function App() {
  const state = useSelector((state) => state);
  const selected = state.config;
  // console.log('selected config : ', selected);
  return (
    <div className="App">
      <Breadcrumbs />
      <div>
        <hr />
        <button
          onClick={() => {
            // dispatch({ type: 'CONFIG_SEND', transition: 'select' });
            configMachine.send('select');
          }}
        >
          select
        </button>
        <button
          onClick={() => {
            // dispatch({ type: 'CONFIG_SEND', transition: 'next' });
            configMachine.send('next');
          }}
        >
          next
        </button>
        <button
          onClick={() => {
            // dispatch({ type: 'CONFIG_SEND', transition: 'submit' });
            configMachine.send('submit');
          }}
        >
          submit
        </button>
        <button
          onClick={() => {
            // // dispatch({ type: 'CONFIG_SEND', transition: 'reset' });
            configMachine.send('reset');
          }}
        >
          reset
        </button>
        <button
          onClick={() => {
            // dispatch({ type: 'CONFIG_SEND', transition: 'confirm' });
            configMachine.send('confirm');
          }}
        >
          confirm
        </button>
        <button
          onClick={() => {
            // dispatch({ type: 'CONFIG_SEND', transition: 'cancel' });
            configMachine.send('cancel');
          }}
        >
          cancel
        </button>
      </div>
      <hr />
      <ConfigSummary />
    </div>
  );
}



export default App;
