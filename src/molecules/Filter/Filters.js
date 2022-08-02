import React, { Component } from 'react';
import { arrayOf, func, node } from 'prop-types';

import { filters } from './Filters.scss';

export default class Filters extends Component {
  static propTypes = {
    children: arrayOf(node).isRequired,
    onChange: func.isRequired,
  }

  handleClick = (filter) => (e) => {
    e && e.preventDefault();

    this.props.onChange(filter);
  }

  render() {
    const { active, children } = this.props;

    return (
      <div className={filters}>
        {
          React.Children.map(
            children,
            child => {
              return React.cloneElement(child, {
                active: child.key === active,
                onClick: this.handleClick(child.key),
              });
            }
          )
        }
      </div>
    );
  }
}
