import React, { Component } from 'react';
import moment from 'moment';
import { bool, string } from 'prop-types';

import RegisterTimer from './RegisterTimer';

export default class MinutesSince extends Component {
  static propTypes = {
    autoUpdate: bool,
    children: string.isRequired,
  }

  static defaultProps = {
    autoUpdate: true,
  }

  componentDidMount() {
    if (this.props.autoUpdate) {
      RegisterTimer.register(this, 10 * 1000);
    }
  }

  componentWillUnmount() {
    if (this.props.autoUpdate) {
      RegisterTimer.unregister(this);
    }
  }

  render() {
    const { children } = this.props;

    const now = moment();
    const startTime = moment(children);

    const duration = moment.duration(
      now.diff(startTime)
    );

    return <span>{duration.humanize()} ago</span>;
  }
}
