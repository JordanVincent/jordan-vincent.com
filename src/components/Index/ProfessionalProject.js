import React from 'react';

import UniversalLink from 'components/UniversalLink';

import './ProfessionalProject.scss';

const ProfessionalProject = ({
  title,
  description,
  coverSrc,
  coverAlt,
  href,
}) => {
  return (
    <UniversalLink className="Index/ProfessionalProject" href={href}>
      <img
        className="Index/ProfessionalProject__cover"
        src={coverSrc}
        alt={title}
        loading="lazy"
      />
      <p className="Index/ProfessionalProject__details">
        <span className="Index/ProfessionalProject__title">{title}.</span>{' '}
        <span className="Index/ProfessionalProject__description">
          {description}
        </span>
      </p>
    </UniversalLink>
  );
};

export default ProfessionalProject;
