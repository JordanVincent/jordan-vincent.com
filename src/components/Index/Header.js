import React from 'react';
import { OutboundLink } from 'gatsby-plugin-google-gtag';

import { Tall } from 'components/Spacing';

import profilePicture from './profile.jpg';

import Container from './Container';

import './Header.scss';

const Header = () => (
  <div className="Index/Header">
    <Container>
      <Tall desktop={120} />
      <div className="Index/Header__inner">
        <div className="Index/Header__profile-picture-section">
          <img
            src={profilePicture}
            alt="Jordan in the Grand Canyon"
            className="Index/Header__profile-picture"
          />
          <p className="Index/Header__mission">
            On a mission to improve access to the outdoors
          </p>
        </div>
        <div>
          <h1 className="Index/Header__name">Jordan Vincent</h1>
          <Tall desktop={12} />
          <p className="Index/Header__role">Designer / Engineer</p>
        </div>
      </div>
      <Tall desktop={140} />
    </Container>
  </div>
);

export default Header;
