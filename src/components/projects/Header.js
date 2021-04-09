import React from 'react';
import { Link } from 'gatsby';
import classnames from 'classnames';

import { Tall } from 'components/Spacing';

import Bleed from './Bleed';

import './Header.scss';

export default function Header({
  title,
  subtitle,
  backgroundColor = '#F8F3EC',
  about,
  role,
}) {
  const isBackgroundDark = false;

  return (
    <header
      className={classnames('projects/Header', {
        'projects/Header--dark': isBackgroundDark,
      })}
      style={{ backgroundColor }}
    >
      <Tall desktop={140} mobile={40} />
      <Link to="/" className="projects/Header__back-link">
        Back
      </Link>

      <div className="projects/Header__container">
        <Bleed>
          <h1
            className="projects/Header__title"
            style={isBackgroundDark ? { color: backgroundColor } : {}}
          >
            <div className="projects/Header__title-inner">
              <div className="projects/Header__title-text">{title}</div>
            </div>
          </h1>

          <Tall desktop={32} mobile={32} />
          <div className="projects/Header__subtitle">{subtitle}</div>
          <Tall desktop={140} mobile={60} />

          <div className="projects/Header__context">
            <div className="projects/Header__about">
              <h2 className="projects/Header__about-title">About</h2>
              <Tall desktop={12} mobile={12} />
              <div className="projects/Header__about-text">{about}</div>
            </div>
            {role && (
              <div className="projects/Header__role">
                <h2 className="projects/Header__role-title">My Role</h2>
                <Tall desktop={12} mobile={12} />
                <div className="projects/Header__role-text">{role}</div>
              </div>
            )}
          </div>
        </Bleed>
      </div>
      <Tall desktop={80} mobile={80} />
    </header>
  );
}
