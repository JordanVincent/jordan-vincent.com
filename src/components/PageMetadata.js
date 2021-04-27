import React from 'react';
import { Helmet } from 'react-helmet';

const siteUrl = 'https://jordan-vincent.com';

export default function PageMetadata({
  title = 'Jordan Vincent | Designer & Engineer',
  description = 'Designer and Engineer on a mission to improve access to the outdoors',
  image = {},
}) {
  const { src: imageSrc, width: imageWith, height: imageHeight } = image;

  if (imageSrc && (!imageWith || !imageHeight)) {
    console.warn(`You must specify the image's dimensions for ${imageSrc}`);
  }

  // Social networks require images to use absolute paths
  const isAbsolutePath = /(https*:\/\/)/.test(imageSrc);
  const absoluteImageSrc = isAbsolutePath ? imageSrc : siteUrl + imageSrc;

  return (
    <Helmet>
      <html lang="en" />

      <title>{title}</title>
      <meta name="description" content={description} />

      {/* Google / Search Engine Tags */}
      <meta itemprop="name" content={title} />
      <meta itemprop="description" content={description} />
      {absoluteImageSrc && <meta itemprop="image" content={absoluteImageSrc} />}

      {/* Facebook Meta Tags */}
      <meta property="og:type" content="profile" />
      <meta property="og:url" content={siteUrl} />
      <meta property="og:title" content={title} />
      <meta property="og:description" content={description} />
      {absoluteImageSrc && (
        <meta property="og:image" content={absoluteImageSrc} />
      )}
      {imageWith && <meta property="og:image:width" content={imageWith} />}
      {imageHeight && <meta property="og:image:height" content={imageHeight} />}

      {/* Twitter Meta Tags */}
      <meta name="twitter:card" content="summary" />
      <meta name="twitter:site" content="@jordan_vinc" />
      <meta name="twitter:title" content={title} />
      <meta name="twitter:description" content={description} />
      {absoluteImageSrc && (
        <meta name="twitter:image" content={absoluteImageSrc} />
      )}
    </Helmet>
  );
}
