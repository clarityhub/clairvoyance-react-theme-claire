import React, { Component } from 'react';
import { node, string } from 'prop-types';

import Modal from '../../atoms/Modal';
import Prompt from '../Prompt';

export default class ModalForm extends Component {
  static propTypes = {
    children: node.isRequired,
    overlay: node.isRequired,
    title: string.isRequired,
  }

  state = {
    isDirty: false,
    isOpen: false,
  }

  handleOpen = (e) => {
    e && e.preventDefault();

    this.setState({
      isOpen: true,
    });
  }

  handleClose = (e) => {
    e && e.preventDefault();

    if (this.state.isDirty) {
      this.prompt.prompt({
        text: 'Are you sure you want to close the form with unsaved changed?',
        options: {
          'Stay on this form': {
            buttonProps: {
              primary: true,
            },
          },
          'Lose unsaved changes': {
            onClick: (e) => {
              this.setState({
                isOpen: false,
                isDirty: false,
              });
            },
          },
        },
      });
    } else {
      this.setState({
        isDirty: false,
        isOpen: false,
      });
    }
  }

  render() {
    const { children, overlay, title, ...rest } = this.props;
    const { isOpen } = this.state;

    return (
      <span>
        {React.cloneElement(children, {
          ...rest,
          onClick: this.handleOpen,
        })}

        <Modal
          isOpen={isOpen}
          onClose={this.handleClose}
          contentLabel={title}
        >
          {React.cloneElement(overlay, {
            close: () => { this.setState({ isOpen: false, isDirty: false }); },
            onChangeDirty: isDirty => { this.setState({ isDirty }); },
          })}
        </Modal>

        <Prompt ref={r => (this.prompt = r)} />
      </span>
    );
  }
}
