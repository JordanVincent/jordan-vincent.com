import React from 'react';
import { OutboundLink } from 'gatsby-plugin-google-gtag';

import './InstagramPhoto.scss';

const InstagramPhoto = ({ src, alt }) => (
  <OutboundLink
    className="Index/InstagramPhoto"
    href="https://www.instagram.com/jordan.vinc/"
  >
    <img
      className="Index/InstagramPhoto__image"
      src={src}
      alt={alt}
      loading="lazy"
    />
  </OutboundLink>
);

export default InstagramPhoto;
