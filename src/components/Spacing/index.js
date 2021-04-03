import React from 'react';

import './index.scss';

export const Row = ({ children, verticalAlign = 'normal' }) => (
  <div className="Spacing/Row" style={{ alignItems: verticalAlign }}>
    {children}
  </div>
);

export const Wide = ({ desktop, mobile, children }) => {
  return (
    <div className="Spacing/Wide" style={desktop ? { width: desktop } : {}}>
      {children}
    </div>
  );
};

export const Tall = ({ desktop, mobile, children }) => {
  return (
    <div className="Spacing/Tall" style={desktop ? { height: desktop } : {}}>
      {children}
    </div>
  );
};
