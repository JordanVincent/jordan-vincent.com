import React from 'react';
import classnames from 'classnames';

import './Heading.scss';

// variant: 'light' | 'darkGreen'
const Heading = ({ children, variant = 'light' }) => (
  <h2 className={classnames('Index/Heading', `Index/Heading--${variant}`)}>
    <div className="Index/Heading__back" />
    <div className="Index/Heading__inner">{children}</div>
  </h2>
);

export default Heading;
