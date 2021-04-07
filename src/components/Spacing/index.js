import React from 'react';

import './index.scss';

export const Row = ({ children, verticalAlign = 'normal' }) => (
  <div className="Spacing/Row" style={{ alignItems: verticalAlign }}>
    {children}
  </div>
);

export const Wide = ({ desktop, mobile, children }) => {
  return (
    <React.Fragment>
      {!!desktop && (
        <div
          className="Spacing/Wide Spacing/Wide--desktop"
          style={{ height: desktop }}
        />
      )}
      {!!mobile && (
        <div
          className="Spacing/Wide Spacing/Wide--mobile"
          style={{ height: mobile }}
        />
      )}
    </React.Fragment>
  );
};

export const Tall = ({ desktop, mobile, children }) => {
  return (
    <React.Fragment>
      {!!desktop && (
        <div
          className="Spacing/Tall Spacing/Tall--desktop"
          style={{ height: desktop }}
        />
      )}
      {!!mobile && (
        <div
          className="Spacing/Tall Spacing/Tall--mobile"
          style={{ height: mobile }}
        />
      )}
    </React.Fragment>
  );
};
