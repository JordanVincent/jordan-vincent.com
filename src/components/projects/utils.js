import React from 'react';
import classnames from 'classnames';

import IndexFooter from 'components/Index/Footer';

import Header from './Header';
import Figure from './Figure';
import Bleed from './Bleed';

import './utils.scss';

export function Paragraph({ children }) {
  return <p className="projects/Paragraph">{children}</p>;
}

export function SectionHeading({ title, subtitle }) {
  return (
    <div className="projects/SectionHeading">
      <h2 className="projects/SectionHeading__title">{title}</h2>
      <p className="projects/SectionHeading__subtitle">{subtitle}</p>
    </div>
  );
}

export function Heading({ children }) {
  return <h3 className="projects/Heading">{children}</h3>;
}

export function Distribute({ children, childrenPerRow = 3 }) {
  return (
    <div
      className="projects/Distribute"
      style={{ gridTemplateColumns: `repeat(${childrenPerRow}, 1fr)` }}
    >
      {React.Children.map(children, (child, index) => (
        <div className="projects/Distribute__child" key={index}>
          {child}
        </div>
      ))}
    </div>
  );
}

export function Footer() {
  return <IndexFooter />;
}

export function Article({ children, ...rest }) {
  return (
    <article className="projects/Article">
      <Header {...rest} />
      <section className="projects/Article__inner">{children}</section>
      <IndexFooter />
    </article>
  );
}

export { Bleed, Figure };
