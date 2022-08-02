import React, { Component } from 'react';
import { func, string } from 'prop-types';
import uuidv4 from 'uuid/v4';
import classnames from 'classnames';

import { input as inputClass, label as labelClass, fullWidthInput } from './Input.scss';

export default class Input extends Component {
  static propTypes = {
    defaultValue: string,
    label: string.isRequired,
    name: string.isRequired,
    onInput: func,
    type: string,
  }

  static defaultProps = {
    type: 'text',
  }

  state = {
    isEmpty: true,
  }

  constructor(props) {
    super(props);
    this.uuid = uuidv4();

    if (props.defaultValue) {
      this.state = {
        value: props.defaultValue,
        isEmpty: false,
      };
    }
  }

  handleInput = (callback) => (e) => {
    const newValue = e.target.value;

    this.setState({
      value: newValue,
      isEmpty: newValue === '',
    });

    if (callback) {
      callback(e);
    }
  }

  componentWillUnmount() {
    if (this.input) {
      this.input.value = '';
    }
  }

  render() {
    const { defaultValue, label, name, type, onInput, fullWidth, ...rest } = this.props;
    const { isEmpty, value } = this.state;

    const optionalAttributes = {};

    if (!isEmpty) {
      optionalAttributes['data-not-empty'] = true;
    }

    return (
      <div>
        <input
          {...rest}

          id={this.uuid}
          className={classnames(inputClass, { [fullWidthInput]: fullWidth })}
          name={name}
          onInput={this.handleInput(onInput)}
          type={type}
          value={value}
          ref={r => (this.input = r)}

          {...optionalAttributes}
        />
        <label
          className={labelClass}
          htmlFor={this.uuid}
        >
          {label}
        </label>
      </div>
    );
  }
}
