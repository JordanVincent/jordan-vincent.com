import React from 'react';

import './OtherProject.scss';

const OtherProject = ({ title, subtitle, coverSrc }) => {
  return (
    <div className="Index/OtherProject">
      <h3 className="Index/OtherProject__title">{title}</h3>
      <p className="Index/OtherProject__subtitle">{subtitle}</p>
      <img
        className="Index/OtherProject__cover"
        src={coverSrc}
        alt=""
        width={250}
        height={250}
        loading="lazy"
      />
    </div>
  );
};

export default OtherProject;
