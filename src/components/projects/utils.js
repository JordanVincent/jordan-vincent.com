import React from 'react';
import { Link } from 'gatsby';
import classnames from 'classnames';

import { Tall } from 'components/Spacing';

import './utils.scss';

export function Paragraph({ children }) {
  return <p className="projects/Paragraph">{children}</p>;
}

export function SectionHeading({ title, subtitle }) {
  return (
    <Bleed>
      <div className="projects/SectionHeading">
        <h2 className="projects/SectionHeading__title">
          <span className="projects/SectionHeading__title-inner">{title}</span>
        </h2>
        <p className="projects/SectionHeading__subtitle">{subtitle}</p>
      </div>
    </Bleed>
  );
}

export function Figure({ caption, ...rest }) {
  return (
    <figure className="projects/Figure">
      <img {...rest} className="projects/Figure__media" />
      {caption && (
        <figcaption className="projects/Figure__caption">{caption}</figcaption>
      )}
    </figure>
  );
}

export function Distribute({ children }) {
  return (
    <div className="projects/Distribute">
      {React.Children.map(children, (child, index) => (
        <div className="projects/Distribute__child" key={index}>
          {child}
        </div>
      ))}
    </div>
  );
}

export function Bleed({ children }) {
  return <div className="projects/Bleed">{children}</div>;
}

export function Header({ title, subtitle, backgroundColor, about, role }) {
  const isCoverDark = false;

  return (
    <div
      className={classnames('projects/Header', {
        'projects/Header--dark': isCoverDark,
      })}
      style={{ backgroundColor }}
    >
      <Tall desktop={140} mobile={40} />
      <div className="projects/Header__container">
        <h1 className="projects/Header__title">
          {title}{' '}
          <Link to="/" className="projects/Header__back-link">
            Back
          </Link>
        </h1>
        <div className="projects/Header__subtitle">{subtitle}</div>
        <Tall desktop={100} mobile={60} />
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
      </div>
      <Tall desktop={40} mobile={40} />
    </div>
  );
}
