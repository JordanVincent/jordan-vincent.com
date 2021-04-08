import React from 'react';
import { Link } from 'gatsby';

import { Tall } from 'components/Spacing';

import './OtherProject.scss';

const OtherProject = ({ title, subtitle, coverSrc, href }) => {
  return (
    <Link className="Index/OtherProject" href={href}>
      <h3 className="Index/OtherProject__title">{title}</h3>
      <Tall desktop={8} mobile={8} />
      <p className="Index/OtherProject__subtitle">{subtitle}</p>
      <Tall desktop={20} mobile={20} />
      <img
        className="Index/OtherProject__cover"
        src={coverSrc}
        alt=""
        loading="lazy"
      />
    </Link>
  );
};

export default OtherProject;
