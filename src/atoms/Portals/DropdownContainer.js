import React, { Component } from 'react';
import { func, shape, number, node } from 'prop-types';
import Portal from 'preact-portal';

import { dropdown } from './DropdownContainer.scss';

const clickHandler = (ref, hide) => (e) => {
  // Clicked outside the target
  if (!ref.contains(e.target)) {
    hide(e);
  }

  // Clicked a button inside the target
  if (ref.contains(e.target) && e.target.nodeName === 'BUTTON') {
    hide(e);
  }
};
const attachClickHandler = (ref, hide) => {
  const listener = clickHandler(ref, hide);
  document.addEventListener('click', listener);
  return listener;
};
const removeClickHandler = (listener) => {
  document.removeEventListener('click', listener);
  return null;
};

export default class PortalContainer extends Component {
  static propTypes = {
    children: node,
    hide: func,
    position: shape({
      x: number,
      y: number,
    }),
  }

  componentDidMount() {
    this.listener = attachClickHandler(this.container, this.props.hide);
  }

  componentWillUnmount() {
    removeClickHandler(this.listener);
  }

  render() {
    const { children, position } = this.props;

    return (
      <Portal into="body">
        <div
          className={dropdown}
          style={{
            top: `${position.x + position.height}px`,
            left: `${position.y}px`,
          }}
          ref={(r) => { this.container = r; }}
        >
          {children}
        </div>
      </Portal>
    );
  }
};
