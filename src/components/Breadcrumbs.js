import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { createSelector } from 'reselect';
import Breadcrumb from 'react-bootstrap/Breadcrumb';
import { Link } from 'react-router-dom';

// const selectSteps = createSelector(
//   state => state.steps
// );

export const Breadcrumbs = (props) => {
  const steps = useSelector((state) => state.steps);
  return (
    <Breadcrumb>
      {steps.map(({ path, name }, key) => {
        return (
          <Breadcrumb.Item key={key} linkAs={Link} linkProps={{ to: path }}>
            {name}
          </Breadcrumb.Item>
        );
      })}
    </Breadcrumb>
  );
};
