import React from 'react';
import CloseIcon from './CloseIcon';
import {
  fullScreen,
  closeButton,
  modal,
} from './Fullscreen.scss';

const handleClose = (history) => (e) => {
  e && e.preventDefault();

  if (!history && window.history.length === 1) {
    window.close();
  }

  history.push('/');
};

const Fullscreen = ({ children, history }) => (
  <div className={fullScreen}>
    <div className={closeButton}>
      <button onClick={handleClose(history)}>
        <CloseIcon />
      </button>
    </div>

    <div className={modal}>
      {children}
    </div>
  </div>
);

export default Fullscreen;
