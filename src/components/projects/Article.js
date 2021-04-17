import React from 'react';

import IndexFooter from 'components/Index/Footer';

import Header from './Header';

import './Article.scss';

export default function Article({ children, ...rest }) {
  return (
    <article className="projects/Article">
      <Header {...rest} />
      <section className="projects/Article__inner">{children}</section>
      <IndexFooter />
    </article>
  );
}
