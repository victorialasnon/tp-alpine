import React from 'react';
import { useSelector } from 'react-redux';
import { BrowserRouter as Router, Switch, Route, Link } from 'react-router-dom';
import './Breadcrumbs.css';
import Breadcrumb from 'react-bootstrap/Breadcrumb';
import routes from '../config/routes';
import configMachine from '../machines/Configurator';
import Logo from '../images/logo/logo-white.png';
// import Row from 'react-bootstrap/Row';
// import Col from 'react-bootstrap/Col';

export const Breadcrumbs = (props) => {
  const step = useSelector((state) => state.step);

  function send(event) {
    configMachine.send(event);
  }

  return (
    <Router>
      {/* {routes.map(({ path, Component }, key) => {
    return (
      <Link to={path} key={key}>
        {path}
      </Link>
    );
  })} */}
      {/* <span>{fsm.current}</span> */}
      <Breadcrumb>

      <img src={Logo}  alt="alpine logo" />

        {routes.map(({ path, event, name }, key) => {
          return (
            // return transition === fsm.current ? (
            //   <Breadcrumb.Item>{name}</Breadcrumb.Item>
            // ) : (
            <Breadcrumb.Item
              key={key}
              linkAs={Link}
              linkProps={{ to: path }}
              onClick={() => send(event)}
              active={step === event}
            >
              {name}
            </Breadcrumb.Item>
          );
        })}
      </Breadcrumb>
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
  );
};
