import React from 'react';
import classnames from 'classnames';

import './Figure.scss';

export default function Figure({
  src,
  alt,
  caption,
  isVideo,
  withBrowserFrame = false,
  withMargins = true,
}) {
  const content = isVideo ? (
    <video className="projects/Figure__media" alt={alt} autoPlay muted loop>
      <source src={src} type="video/mp4" />
    </video>
  ) : (
    <img src={src} alt={alt} className="projects/Figure__media" />
  );

  const wrappedContent = withBrowserFrame ? (
    <div className="projects/Figure__browser-frame">{content}</div>
  ) : (
    content
  );

  return (
    <figure
      className={classnames('projects/Figure', {
        'projects/Figure--margins': withMargins,
      })}
    >
      {wrappedContent}
      {caption && (
        <figcaption className="projects/Figure__caption">{caption}</figcaption>
      )}
    </figure>
  );
}
