import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { createSelector } from 'reselect';
import Breadcrumb from 'react-bootstrap/Breadcrumb';
import { Link } from 'react-router-dom';

// const selectSteps = createSelector(
//   state => state.steps
// );

export const Breadcrumbs = (props) => {
  const dispatch = useDispatch();
  const steps = useSelector((state) => state.steps);
  // const fsm = useSelector((state) => state.fsm);
  // const currentState = fsm.states[fsm.current];

  function input(transition) {
    // if (currentState[transition]) {
      dispatch({ type: 'FSM_SET', transition: transition });
    // }
  }

  return (
    <>
      {/* <span>{fsm.current}</span> */}
      <Breadcrumb>
        {steps.map(({ path, transition, name }, key) => {
          return (
          // return transition === fsm.current ? (
          //   <Breadcrumb.Item>{name}</Breadcrumb.Item>
          // ) : (
            <Breadcrumb.Item
              key={key}
              linkAs={Link}
              linkProps={{ to: path }}
              onClick={() => input('submit')}
            >
              {name}
            </Breadcrumb.Item>
          );
        })}
      </Breadcrumb>
    </>
  );
};
