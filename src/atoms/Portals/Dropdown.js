import React from 'react';

import withToggle from './withToggle';
import DropdownContainer from './DropdownContainer';
import { button } from './Dropdown.scss';

export default withToggle(({ children, hide, overlay, toggledOn, toggle, position }) => (
  <button className={button} onClick={toggle}>
    {children}
    { toggledOn && (
      <DropdownContainer position={position} hide={hide}>
        {overlay}
      </DropdownContainer>
    )}
  </button>
));
