import React from 'react';
import { Tall } from 'components/Spacing';

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
      <Tall desktop={8} />
      <p className="Index/FeaturedProject__subtitle">{subtitle}</p>
      <Tall desktop={20} />
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
