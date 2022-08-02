import React from 'react';
import Modal from 'react-modal';
import classnames from 'classnames';

import { overlay, modal, modalGuts, modalPrompt } from './Modal.scss';

export default ({ children, isOpen, onClose, prompt, ...rest }) => (
  <Modal
    isOpen={isOpen}
    onRequestClose={onClose}
    overlayClassName={overlay}
    className={classnames(
      modal,
      {
        [modalPrompt]: prompt,
      }
    )}
    style={{ overlay: {}, content: {} }}
    {...rest}
  >
    <div className={modalGuts}>
      {children}
    </div>
  </Modal>
);
