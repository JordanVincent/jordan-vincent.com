import React from 'react';

import './ProfessionalRole.scss';

const ProfessionalRole = ({ companyName, duration }) => (
  <h4 className="Index/ProfessionalRole">
    {companyName}, {duration}
  </h4>
);

export default ProfessionalRole;
