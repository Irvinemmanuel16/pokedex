import React from 'react';
import ReactDOM from 'react-dom';
import '../styles/Modal.css';

const Modal = ({ children, close }) => {
  return ReactDOM.createPortal(
    <>
      <div className='overlay' />
      <div className='modal' >
        <button onClick={ close } className='modal-close'>
          <i className="fas fa-window-close"></i>
        </button>
        { children }
      </div>
    </>,
    document.querySelector('#portal')
  );
};

export default Modal;