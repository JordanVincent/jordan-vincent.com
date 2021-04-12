import React from 'react';

import './Bleed.scss';

export default function Bleed({ children, backgroundColor }) {
  if (backgroundColor) {
    return (
      <div
        className="projects/Bleed projects/Bleed--background"
        style={{ backgroundColor }}
      >
        <div className="projects/Bleed__inner"> {children}</div>
      </div>
    );
  }

  return <div className="projects/Bleed">{children}</div>;
}
