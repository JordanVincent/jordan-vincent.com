import React from 'react';

import './ProfessionalRole.scss';

const ProfessionalRole = ({ companyName, companyLogoSrc, duration }) => (
  <h4 className="Index/ProfessionalRole">
    <img className="Index/ProfessionalRole__logo" src={companyLogoSrc} alt="" />
    <span className="Index/ProfessionalRole__company-name">{companyName}</span>
    <span className="Index/ProfessionalRole__duration">{duration}</span>
  </h4>
);

export default ProfessionalRole;
