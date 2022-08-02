import React, { Component } from 'react';
import classnames from 'classnames';
import { bool, string } from 'prop-types';
import uuidv4 from 'uuid/v4';

import { inputClass, labelClass, container } from './Checkbox.scss';

export default class Checkbox extends Component {
  static propTypes = {
    defaultChecked: bool,
    label: string.isRequired,
    name: string.isRequired,
  }

  state = {
    checked: false,
  }

  constructor(props) {
    super(props);
    this.uuid = uuidv4();

    if (props.defaultChecked) {
      this.state = {
        checked: props.defaultChecked,
      };
    }
  }

  handleClick = (callback) => (e) => {
    const newChecked = e.target.checked;

    this.setState({
      checked: newChecked,
    });

    if (callback) {
      callback(e);
    }
  }

  render() {
    const { defaultSelected, label, name, onClick, className, ...rest } = this.props;
    const { checked } = this.state;

    return (
      <div className={classnames(container, className)}>
        <input
          {...rest}

          id={this.uuid}
          className={inputClass}
          name={name}
          onClick={this.handleClick(onClick)}
          checked={checked}
          ref={r => (this.input = r)}
          type="checkbox"
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
