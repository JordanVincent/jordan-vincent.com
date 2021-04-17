import React from 'react';
import { Link } from 'gatsby';
import { OutboundLink } from 'gatsby-plugin-google-gtag';

const UniversalLink = ({ href, ...rest }) => {
  if (!href) {
    console.warn('"href" is undefined for <UniversalLink/>');
  }

  const isExternalUrl = /(https*:\/\/)/.test(href);
  if (isExternalUrl) {
    return <OutboundLink href={href} {...rest} />;
  } else {
    return <Link to={href} {...rest} />;
  }
};

export default UniversalLink;
