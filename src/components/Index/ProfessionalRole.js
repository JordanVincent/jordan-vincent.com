import React from 'react';

import './ProfessionalRole.scss';

const ProfessionalRole = ({ companyName, duration }) => (
  <h4 className="Index/ProfessionalRole">
    <span className="Index/ProfessionalRole__company-name">
      {companyName}, {duration}
    </span>
  </h4>
);

export default ProfessionalRole;
