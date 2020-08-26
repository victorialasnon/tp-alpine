import React, { Component } from 'react';
import '../NextButton.css';

export const NextButton = (props) => {
  return (
    <button type="button" class="btn btn-outline-primary">
      {props.text}
    </button>
  );
};
