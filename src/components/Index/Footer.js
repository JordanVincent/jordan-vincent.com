import React from 'react';
import { OutboundLink } from 'gatsby-plugin-google-gtag';

import { Tall } from 'components/Spacing';

import Container from './Container';

import './Footer.scss';

const Footer = () => (
  <div className="Index/Footer">
    <Container backgroundColor="#0F123C">
      <Tall desktop={40} />
      <div className="Index/Footer__inner">
        <div className="Index/Footer__links">
          <OutboundLink
            className="Index/Footer__link"
            href="mailto:jordan.vincent.x@gmail.com"
            target="_blank"
          >
            Email
          </OutboundLink>
          <OutboundLink
            className="Index/Footer__link"
            href="https://www.linkedin.com/in/jordanvinc/"
          >
            LinkedIn
          </OutboundLink>
          <OutboundLink
            className="Index/Footer__link"
            href="https://twitter.com/jordan_vinc"
          >
            Twitter
          </OutboundLink>
          <OutboundLink
            className="Index/Footer__link"
            href="https://www.instagram.com/jordan.vinc/"
          >
            Instagram
          </OutboundLink>
          <OutboundLink
            className="Index/Footer__link"
            href="https://github.com/JordanVincent"
          >
            GitHub
          </OutboundLink>
        </div>
        <div className="Index/Footer__spacer" />
        <p className="Index/Footer__text">Always be exploring.</p>
      </div>
      <Tall desktop={40} />
    </Container>
  </div>
);

export default Footer;
