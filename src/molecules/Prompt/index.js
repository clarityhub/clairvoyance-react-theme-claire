import React, { Component } from 'react';

import Button from '../../atoms/Button';
import Modal from '../../atoms/Modal';

export default class Prompt extends Component {
  state = {
    show: false,
    promptOptions: {},
    shouldCloseOnOverlayClick: false,
  }

  prompt = (promptOptions) => {
    this.setState({
      show: true,
      promptOptions,
      shouldCloseOnOverlayClick: promptOptions.shouldCloseOnOverlayClick || false,
    });
  }

  callbackWrapper = (options) => (e) => {
    const resp = options.onClick && options.onClick(e);

    if (resp && resp.then) {
      resp.then(() => {
        this.setState({
          show: false,
        });
      });
    } else {
      this.setState({
        show: false,
      });
    }
  }

  handleRequestClose = () => {
    this.setState({
      show: false,
    });
  }

  renderPrompt = () => {
    const { promptOptions, shouldCloseOnOverlayClick } = this.state;

    return (
      <Modal
        prompt
        isOpen
        shouldCloseOnOverlayClick={shouldCloseOnOverlayClick}
        onRequestClose={this.handleRequestClose}
      >
        <div>
          <p>{promptOptions ? promptOptions.text : ''}</p>

          {promptOptions && Object.keys(promptOptions.options).map((k, i) => {
            const options = promptOptions.options[k];

            return (
              <Button
                key={i}
                onClick={this.callbackWrapper(options)}
                {...(options.buttonProps || {})}
              >
                {k}
              </Button>
            );
          })}
        </div>
      </Modal>
    );
  }

  render() {
    const { show } = this.state;

    if (show) {
      return this.renderPrompt();
    }

    return null;
  }
}
