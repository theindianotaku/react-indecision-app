import React from 'react';
import Modal from 'react-modal';

const OptionModal = (props) => (
  <Modal
    isOpen={!!props.selectedOption}
    onRequestClose={props.handleClearSelected}
    contentLabel="Selected Option"
    closeTimeoutMS={200}
    className="modal"
  >
    <h2 className="modal__title">Do this!</h2>
    {props.selectedOption && <p className="modal__body">{props.selectedOption}</p>}
    <button className="button" onClick={props.handleClearSelected}>OK :P</button>
  </Modal>
);

export default OptionModal;
