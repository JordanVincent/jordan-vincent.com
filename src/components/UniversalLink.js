import React from 'react';
import { Link } from 'gatsby';
import { OutboundLink } from 'gatsby-plugin-google-gtag';

const UniversalLink = (props) => {
  const isExternalUrl = /(https*:\/\/)/.test(props.href);
  const TagName = isExternalUrl ? OutboundLink : Link;
  return <TagName {...props} />;
};

export default UniversalLink;
