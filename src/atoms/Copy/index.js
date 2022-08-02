import React, { Component } from 'react';
import { string } from 'prop-types';
import classnames from 'classnames';
import { CopyToClipboard } from 'react-copy-to-clipboard';
import FaCopy from 'react-icons/lib/fa/copy';

import { copy, button, completed } from './Copy.scss';

export default class Copy extends Component {
  static propTypes = {
    className: string,
    text: string,
  }
  state = {
    copied: false,
  }

  componentWillUmount() {
    clearTimeout(this.clearTimer);
  }

  handleCopied = () => {
    clearTimeout(this.clearTimer);
    this.setState({ copied: true });

    this.clearTimer = setTimeout(() => {
      this.setState({
        copied: false,
      });
    }, 3000);
  }

  render() {
    const { className, text } = this.props;
    const { copied } = this.state;
    return (
      <span className={classnames(copy, className)}>
        <CopyToClipboard text={text} onCopy={this.handleCopied}>
          <button className={button}>
            <FaCopy />
            {' '}
            <span>Copy to Clipboard</span>
          </button>
        </CopyToClipboard>

        {copied ? <span className={completed}>Copied.</span> : null}
      </span>
    );
  }
}
