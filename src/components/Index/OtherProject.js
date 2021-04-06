import React from 'react';
import { Tall } from 'components/Spacing';

import './OtherProject.scss';

const OtherProject = ({ title, subtitle, coverSrc }) => {
  return (
    <div className="Index/OtherProject">
      <h3 className="Index/OtherProject__title">{title}</h3>
      <Tall desktop={8} />
      <p className="Index/OtherProject__subtitle">{subtitle}</p>
      <Tall desktop={20} />
      <img
        className="Index/OtherProject__cover"
        src={coverSrc}
        alt=""
        loading="lazy"
      />
    </div>
  );
};

export default OtherProject;
