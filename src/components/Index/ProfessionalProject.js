import React from 'react';
import { Link } from 'gatsby';

import './ProfessionalProject.scss';

const ProfessionalProject = ({
  title,
  description,
  coverSrc,
  coverAlt,
  href,
}) => {
  return (
    <Link className="Index/ProfessionalProject" href={href}>
      <img
        className="Index/ProfessionalProject__cover"
        src={coverSrc}
        alt={coverAlt}
        loading="lazy"
      />
      <p className="Index/ProfessionalProject__details">
        <span className="Index/ProfessionalProject__title">{title}.</span>{' '}
        <span className="Index/ProfessionalProject__description">
          {description}
        </span>
      </p>
    </Link>
  );
};

export default ProfessionalProject;
