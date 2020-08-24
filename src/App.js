import React from 'react';
import './App.css';
import { useSelector } from 'react-redux';
import routes from './routes';

import {
  Version,
  Color,
  Rims,
  Upholstery,
  Equipment,
  Accessories,
  Summary,
} from './Components/Placeholders';

import { BrowserRouter as Router, Switch, Route, Link } from 'react-router-dom';

function App() {
  const test = useSelector((state) => state.test);

  return (
    <div className="App">
      <header className="App-header">
        <p>redux test : {test}</p>
        <Router>
        {routes.map(({ path, component }, key) => {
          return (
            <Link to={path} key={key}>
              {path}
            </Link>
          );
        })}
          <Switch>
            {routes.map(({ path, component }, key) => (
              <Route exact path={path} key={key} render={component} />
            ))}
            ;
          </Switch>
        </Router>
        {/* <Version />
        <Color />
        <Rims />
        <Upholstery />
        <Equipment />
        <Accessories />
        <Summary /> */}
      </header>
    </div>
  );
}

export default App;
