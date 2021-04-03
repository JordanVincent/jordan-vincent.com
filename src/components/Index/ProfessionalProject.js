import React from 'react';

import './ProfessionalProject.scss';

const ProfessionalProject = ({ title, subtitle, coverSrc, coverAlt }) => {
  return (
    <div className="Index/ProfessionalProject">
      <div className="Index/ProfessionalProject__details">
        <h3 className="Index/ProfessionalProject__title">{title}</h3>
        <p className="Index/ProfessionalProject__subtitle">{subtitle}</p>
      </div>
      <img
        className="Index/ProfessionalProject__cover"
        src={coverSrc}
        alt={coverAlt}
      />
    </div>
  );
};

export default ProfessionalProject;
