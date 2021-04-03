import React from 'react';

import './Container.scss';

const Container = ({ children, backgroundColor }) => (
  <div className="Index/Container" style={{ backgroundColor }}>
    <div className="Index/Container__inner">{children}</div>
  </div>
);

export default Container;
