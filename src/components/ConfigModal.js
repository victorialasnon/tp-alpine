import React from 'react';
import Modal from 'react-bootstrap/Modal';
import Button from 'react-bootstrap/Button';

export const ConfigModal = (props) => {
  return (
    <Modal
      show={props.show}
      onHide={props.onHide}
      size="lg"
      aria-labelledby="modal-title"
      centered
    >
      <Modal.Header closeButton>
        <Modal.Title id="modal-title">{props.title}</Modal.Title>
      </Modal.Header>
      <Modal.Body>{props.children}</Modal.Body>
      <Modal.Footer>
        <Button variant="secondary" onClick={props.onHide}>{props.cancel}</Button>
        <Button variant="primary" onClick={props.onOk}>{props.ok}</Button>
      </Modal.Footer>
    </Modal>
  );
};
