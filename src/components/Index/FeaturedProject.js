import React from 'react';

import iibBadge from './iib-badge.png';

import './FeaturedProject.scss';

const FeaturedProject = ({
  title,
  subtitle,
  coverSrc,
  withIibBadge = false,
}) => {
  return (
    <div className="Index/FeaturedProject">
      <h3 className="Index/FeaturedProject__title">{title}</h3>
      <p className="Index/FeaturedProject__subtitle">{subtitle}</p>
      <img
        className="Index/FeaturedProject__cover"
        src={coverSrc}
        alt=""
        width={250}
        height={404}
        loading="lazy"
      />
      {withIibBadge && (
        <img
          className="Index/FeaturedProject__badge"
          src={iibBadge}
          alt=""
          loading="lazy"
        />
      )}
    </div>
  );
};

export default FeaturedProject;
