import React from 'react';

import './OtherProject.scss';

const OtherProject = ({ title, coverSrc }) => {
  return (
    <div className="Index/OtherProject">
      <img className="Index/OtherProject__cover" src={coverSrc} alt="" />
      <h3 className="Index/OtherProject__title">{title}</h3>
    </div>
  );
};

export default OtherProject;
