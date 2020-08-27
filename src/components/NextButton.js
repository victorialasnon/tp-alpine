import React, { Component } from 'react';
import './NextButton.css';
import { Button } from 'react-bootstrap';


export const NextButton = (props) => {
  return (
    <Button size="lg" block>
      {props.text}
    </Button>
  );
};
