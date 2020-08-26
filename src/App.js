import React from 'react';
import './App.css';
import { Breadcrumbs } from './components/Breadcrumbs';
import routes from './routes';
// import Container from 'react-bootstrap/Container';

import { BrowserRouter as Router, Switch, Route} from 'react-router-dom';

function App() {
  return (
      <div className="App">

          <Router>
            <Breadcrumbs/>
            {/* {routes.map(({ path, Component }, key) => {
            return (
              <Link to={path} key={key}>
                {path}
              </Link>
            );
          })} */}
            <Switch>
              {routes.map(({ path, Component }, key) => {
                return (
                  <Route
                    exact
                    path={path}
                    key={key}
                    render={(props) => {
                      // const crumbs = routes.filter(({path}) => {
                      //   console.log('path : ' + path);
                      //   console.log(props.match.path);
                      //   console.log(props);
                      //   return true;
                      // })
                      return <Component {...props} path={props.match.path} />;
                    }}
                  />
                );
              })}
            </Switch>
          </Router>
      </div>
  );
}

export default App;
