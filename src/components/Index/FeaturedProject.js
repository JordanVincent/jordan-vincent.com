import React from 'react';

import './FeaturedProject.scss';

const FeaturedProject = ({ title, subtitle, coverSrc }) => {
  return (
    <div className="Index/FeaturedProject">
      <h3 className="Index/FeaturedProject__title">{title}</h3>
      <p className="Index/FeaturedProject__subtitle">{subtitle}</p>
      <img className="Index/FeaturedProject__image" src={coverSrc} alt="" />
    </div>
  );
};

export default FeaturedProject;
