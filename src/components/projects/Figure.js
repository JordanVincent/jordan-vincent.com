import React from 'react';
import classnames from 'classnames';

import './Figure.scss';

export default function Figure({
  src,
  alt,
  caption,
  isVideo,
  isYoutube,
  withBrowserFrame = false,
  withMargins = true,
  withBorder = false,
}) {
  let content = <img src={src} alt={alt} className="projects/Figure__media" />;

  if (isVideo) {
    content = (
      <video className="projects/Figure__media" alt={alt} autoPlay muted loop>
        <source src={src} type="video/mp4" />
      </video>
    );
  } else if (isYoutube) {
    content = (
      <div className="projects/Figure__media projects/Figure__media--youtube">
        <iframe
          title="YouTube video player"
          src={src}
          frameborder="0"
          className="projects/Figure__media-inner"
          allowfullscreen
        />
      </div>
    );
  }

  let wrappedContent = content;

  if (withBrowserFrame) {
    wrappedContent = (
      <div className="projects/Figure__browser-frame">{content}</div>
    );
  } else if (withBorder) {
    wrappedContent = (
      <div className="projects/Figure__with-border">{content}</div>
    );
  }

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
