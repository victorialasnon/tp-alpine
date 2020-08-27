import React from 'react';
import './App.css';
// import { useSelector } from 'react-redux';
import configMachine from './machines/Configurator';
import { Breadcrumbs } from './components/Breadcrumbs';
import {ConfigSummary} from './components/ConfigSummary';

function App() {
  // const state = useSelector((state) => state);
  // const selected = state.config;
  // console.log('selected config : ', selected);
  return (
    <div className="App">
      <Breadcrumbs />
      <div>
        <hr />
        <button
          onClick={() => {
            configMachine.send('select');
          }}
        >
          select
        </button>
        <button
          onClick={() => {
            configMachine.send('next');
          }}
        >
          next
        </button>
        <button
          onClick={() => {
            configMachine.send('submit');
          }}
        >
          submit
        </button>
        <button
          onClick={() => {
            configMachine.send('reset');
          }}
        >
          reset
        </button>
        <button
          onClick={() => {
            configMachine.send('confirm');
          }}
        >
          confirm
        </button>
        <button
          onClick={() => {
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
