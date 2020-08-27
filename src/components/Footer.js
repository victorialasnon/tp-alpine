import React from 'react';
import { NextButton } from './NextButton';
import { ConfigStatus } from './ConfigStatus';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

export const Footer = (props) => {
  return (
    <footer className="fixed-bottom">
      <Row>
        <Col md="8">
          <ConfigStatus />
        </Col>
        <Col md="4">
          <NextButton text="next" />
        </Col>
      </Row>
    </footer>
  );
};
