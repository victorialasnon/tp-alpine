import React from 'react';
import './App.css';
import {useSelector} from "react-redux";

import {
  Version,
  Color,
  Rims,
  Upholstery,
  Equipment,
  Accessories,
  Summary,
} from './Components/Placeholders';

function App() {
  const test = useSelector((state) => state.test);

  return (
    <div className="App">
      <header className="App-header">
        <p>
          redux test : {test}
        </p>

        <Version />
        <Color />
        <Rims />
        <Upholstery />
        <Equipment />
        <Accessories />
        <Summary />
      </header>
    </div>
  );
}

export default App;
