import React from 'react';
import { OutboundLink } from 'gatsby-plugin-google-gtag';

import { Tall } from 'components/Spacing';

import iibBadge from './iib-badge.png';

import './FeaturedProject.scss';

const FeaturedProject = ({
  title,
  subtitle,
  coverSrc,
  href,
  withIibBadge = false,
}) => {
  return (
    <OutboundLink className="Index/FeaturedProject" href={href}>
      <h3 className="Index/FeaturedProject__title">{title}</h3>
      <Tall desktop={8} mobile={8} />
      <p className="Index/FeaturedProject__subtitle">{subtitle}</p>
      <Tall desktop={20} mobile={20} />
      <div
        className="Index/FeaturedProject__cover"
        style={{ backgroundImage: `url(${coverSrc})` }}
      />
      {withIibBadge && (
        <img
          className="Index/FeaturedProject__badge"
          src={iibBadge}
          alt=""
          loading="lazy"
        />
      )}
    </OutboundLink>
  );
};

export default FeaturedProject;
