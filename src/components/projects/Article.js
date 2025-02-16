import React from 'react';

import IndexFooter from 'components/Index/Footer';
import PageMetadata from 'components/PageMetadata';

import Header from './Header';

import './Article.scss';

export default function Article({ children, ...rest }) {
  return (
    <article className="projects/Article">
      <PageMetadata
        title={`${rest.title} | Jordan Vincent`}
        description={rest.about}
      />
      <Header {...rest} />
      <section className="projects/Article__inner">{children}</section>
      <IndexFooter />
    </article>
  );
}
