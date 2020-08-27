import React from 'react';
import './App.css';
import { useDispatch } from 'react-redux';
import { Breadcrumbs } from './components/Breadcrumbs';
import configMachine from './machines/Configurator';

function App() {
  const dispatch = useDispatch();
  return (
    <div className="App">
      <Breadcrumbs />
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
  );
}

export default App;
