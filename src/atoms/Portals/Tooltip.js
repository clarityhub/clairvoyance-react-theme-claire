import React, { Component } from 'react';
import Portal from 'preact-portal';
import withToggle from './withToggle';
import { tooltip, tooltipInner, tooltipArrow } from './Tooltip.scss';

class TooltipContainer extends Component {
  state = {
    hide: true,
    tooltipHeight: 0,
    tooltipWidth: 0,
  }

  componentDidMount() {
    this.setState({
      hide: false,
      tooltipHeight: this.container.offsetHeight,
      tooltipWidth: this.container.offsetWidth,
    });
  }

  render() {
    const { children, position } = this.props;
    const { hide, tooltipWidth, tooltipHeight } = this.state;

    return (
      <Portal into="body">
        <div
          className={tooltip}
          style={{
            opacity: hide ? 0 : 1,
            left: `${position.y + (position.width / 2.0) - (tooltipWidth / 2.0)}px`,
            top: `${position.x - (tooltipHeight)}px`,
          }}
          ref={(r) => { this.container = r; }}
        >
          <div className={tooltipArrow} />
          <div className={tooltipInner}>
            {children}
          </div>
        </div>
      </Portal>
    );
  }
}

export default withToggle(({ children, className, hide, overlay, toggledOn, show, position }) => (
  <div className={className}>
    {React.cloneElement(children, {
      onMouseEnter: show,
      onMouseLeave: hide,
      onFocus: show,
      onBlur: hide,
    })}
    { toggledOn && (
      <TooltipContainer position={position}>
        {overlay}
      </TooltipContainer>
    )}
  </div>
));
