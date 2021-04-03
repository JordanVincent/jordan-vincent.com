import React from 'react';

import './ProfessionalProject.scss';

const ProfessionalProject = ({ title, description, coverSrc, coverAlt }) => {
  return (
    <div className="Index/ProfessionalProject">
      <img
        className="Index/ProfessionalProject__cover"
        src={coverSrc}
        alt={coverAlt}
      />
      <p className="Index/ProfessionalProject__details">
        <span className="Index/ProfessionalProject__title">{title}.</span>{' '}
        <span className="Index/ProfessionalProject__description">
          {description}
        </span>
      </p>
    </div>
  );
};

export default ProfessionalProject;
