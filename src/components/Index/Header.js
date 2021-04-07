import React from 'react';
import { OutboundLink } from 'gatsby-plugin-google-gtag';

import { Tall } from 'components/Spacing';

import profilePicture from './profile.jpg';

import Container from './Container';

import './Header.scss';

const Header = () => (
  <div className="Index/Header">
    <Container>
      <Tall desktop={120} mobile={40} />
      <div className="Index/Header__inner">
        <div className="Index/Header__profile-picture-section">
          <img
            src={profilePicture}
            alt="Jordan in the Grand Canyon"
            className="Index/Header__profile-picture"
          />
          <p className="Index/Header__mission">
            On a mission to improve
            <br />
            access to the outdoors
          </p>
        </div>
        <div className="Index/Header__name-section">
          <h1 className="Index/Header__name">
            <span className="Index/Header__first-name">Jordan</span>{' '}
            <span className="Index/Header__last-name">Vincent</span>
          </h1>
          <Tall desktop={12} mobile={20} />
          <p className="Index/Header__role">Designer / Engineer</p>
        </div>
      </div>
      <Tall desktop={140} mobile={80} />
    </Container>
  </div>
);

export default Header;
