import React, { Component } from 'react';
import classnames from 'classnames';
import TextareaAutosize from 'react-textarea-autosize';

import { textArea } from './Textarea.scss';

export default class Textarea extends Component {
  render() {
    const { className, placeholder, textareaRef, ...props } = this.props;
    return (
      <TextareaAutosize
        className={classnames(className, textArea)}
        placeholder={placeholder || 'Start typing...'}
        inputRef={(r) => textareaRef ? textareaRef(r) : null}
        {...props}
      />
    );
  }
}
