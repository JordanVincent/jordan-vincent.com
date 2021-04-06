import React from 'react';
import { OutboundLink } from 'gatsby-plugin-google-gtag';

import { Tall } from 'components/Spacing';
import PageMetadata from 'components/PageMetadata';

import Heading from './Heading';
import Container from './Container';
import OtherProject from './OtherProject';
import FeaturedProject from './FeaturedProject';
import ProfessionalProject from './ProfessionalProject';
import ProfessionalRole from './ProfessionalRole';
import InstagramPhoto from './InstagramPhoto';

import flightAgainstTime from './project-images/flight-against-time.png';
import dinofit from './project-images/dinofit.png';
import airtable from './project-images/airtable.png';
import goggles from './project-images/goggles.png';
import cogniac from './project-images/cogniac.png';
import annotationManager from './project-images/annotation-manager.png';
import outdoorStatus from './project-images/outdoor-status.png';
import nightUnderTheStars from './project-images/night-under-the-stars.png';
import rimToRimPermits from './project-images/rim-to-rim-permits.png';
import smartBricks from './project-images/smart-bricks.jpg';

import profilePicture from './profile.jpg';

import instagramPhotoA from './instagram-photos/A.jpg';
import instagramPhotoB from './instagram-photos/B.jpg';
import instagramPhotoC from './instagram-photos/C.jpg';
import instagramPhotoD from './instagram-photos/D.jpg';
import instagramPhotoE from './instagram-photos/E.jpg';
import instagramPhotoF from './instagram-photos/F.jpg';

import './index.scss';

const instagramPhotos = [
  {
    src: instagramPhotoA,
    alt: 'Lone Pine Peak',
  },
  {
    src: instagramPhotoB,
    alt: 'Tennessee Valley Beach',
  },
  {
    src: instagramPhotoC,
    alt: 'Telescope Peak',
  },
  {
    src: instagramPhotoD,
    alt: 'Thousand Island Lake',
  },
  {
    src: instagramPhotoE,
    alt: 'Mount Assiniboine',
  },
  {
    src: instagramPhotoF,
    alt: 'Mount Lyell',
  },
];

const Index = () => {
  return (
    <div className="Index">
      <PageMetadata image={{ src: profilePicture, width: 680, height: 940 }} />
      <Container>
        <Tall desktop={120} />
        <div style={{ display: 'flex', alignItems: 'center' }}>
          <div className="Index__profile-picture-section">
            <img
              src={profilePicture}
              alt="Jordan in the Grand Canyon"
              className="Index__profile-picture"
            />
            <p className="Index__mission">
              On a mission to improve access to the outdoors
            </p>
          </div>
          <div>
            <h1 className="Index__name">Jordan Vincent</h1>
            <Tall desktop={12} />
            <p className="Index__role">Designer / Engineer</p>
          </div>
        </div>
        <Tall desktop={140} />
      </Container>
      <Container backgroundColor="#3C4E11">
        <Tall desktop={80} />
        <Heading variant="darkGreen">Outdoor Initiatives</Heading>
        <Tall desktop={40} />
        <p className="Index__description--inverted">
          Follow me on{' '}
          <OutboundLink href="https://twitter.com/jordan_vinc">
            Twitter
          </OutboundLink>{' '}
          or subscribe to the{' '}
          <OutboundLink href="https://outdoorstatus.com">
            Outdoor Status newsletter
          </OutboundLink>
          .
        </p>
        <Tall desktop={60} />
        <div style={{ display: 'flex', justifyContent: 'space-between' }}>
          <OutboundLink
            href="https://outdoorstatus.com"
            style={{ textDecoration: 'none' }}
          >
            <FeaturedProject
              title="Outdoor Status"
              subtitle="The newsletter for booking hiking permits"
              coverSrc={outdoorStatus}
            />
          </OutboundLink>
          <OutboundLink
            href="https://rimtorimpermits.com"
            style={{ textDecoration: 'none' }}
          >
            <FeaturedProject
              title="Rim to Rim permits"
              subtitle="An interactive guide to the Grand Canyon most iconic trail"
              coverSrc={rimToRimPermits}
            />
          </OutboundLink>
          <FeaturedProject
            title="A night under the stars"
            subtitle="Find out when to visit all US National parks, in one visualization"
            coverSrc={nightUnderTheStars}
            withIibBadge={true}
          />
        </div>
        <Tall desktop={80} />
      </Container>
      <Container>
        <Tall desktop={80} />
        <Heading>Capturing wilderness in its best light</Heading>
        <Tall desktop={40} />
        <p className="Index__description">
          I trade my computer for my backpack whenever I can! I like to explore
          remote places and climb high peaks. Follow my adventures on{' '}
          <OutboundLink href="https://www.instagram.com/jordan.vinc/">
            Instagram
          </OutboundLink>
          .
        </p>
        <Tall desktop={60} />
        <div
          style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(3, 1fr)',
            gap: 'var(--gutter)',
          }}
        >
          {instagramPhotos.map(({ src, alt }) => (
            <InstagramPhoto src={src} alt={alt} key={src} />
          ))}
        </div>
        <Tall desktop={80} />
      </Container>
      <Container backgroundColor="#F8F3EC">
        <Tall desktop={80} />
        <Heading>Helping others acheive their dreams</Heading>
        <Tall desktop={40} />
        <p className="Index__description">
          Find more details on{' '}
          <OutboundLink href="https://www.linkedin.com/in/jordanvinc/">
            LinkedIn
          </OutboundLink>
          .
        </p>
        <Tall desktop={60} />
        <ProfessionalRole companyName="Airtable" duration="2020–present" />
        <Tall desktop={40} />
        <ProfessionalProject
          title="Airtable Onboarding"
          description="As part of the Activation team, I design and build onboarding experiences for new Airtable users."
          coverSrc={airtable}
        />
        <Tall desktop={80} />
        <ProfessionalRole companyName="Roam Analytics" duration="2017–2020" />
        <Tall desktop={40} />
        <ProfessionalProject
          title="Annotation Manager"
          description="I designed and built most of Roam's products, including Annotation Manager — a text annotation tool that doesn't sacrifice user experience."
          coverSrc={annotationManager}
        />
        <Tall desktop={60} />
        <ProfessionalProject
          title="Goggles"
          description="I also designed and built internal tools. Goggles allows Data Engineers to explore Roam's extensive health knowledge graph."
          coverSrc={goggles}
        />
        <Tall desktop={80} />
        <ProfessionalRole companyName="Cogniac" duration="2016–2017" />
        <Tall desktop={40} />
        <ProfessionalProject
          title="Cogniac Web App"
          description="I designed and built Cogniac's web application. It's used by non-technical users to build and train computed vision models from scratch."
          coverSrc={cogniac}
        />
        <Tall desktop={40} />
      </Container>
      <Container>
        <Tall desktop={80} />
        <Heading>Other projects</Heading>
        <Tall desktop={40} />
        <p className="Index__description">
          I've worked on dozens of side projects over the years, these ones are
          the most notable.
        </p>
        <Tall desktop={60} />
        <div style={{ display: 'flex', justifyContent: 'space-between' }}>
          <OtherProject
            title="A flight against time"
            subtitle="See how strange the US looks like from an airplane's perspective"
            coverSrc={flightAgainstTime}
          />
          <OtherProject
            title="DinoFit"
            subtitle="Do pushups to save dinos on the brink of extinction"
            coverSrc={dinofit}
          />
          <OtherProject
            title="Smart Bricks"
            subtitle="A place for LEGO artists to sell their creations"
            coverSrc={smartBricks}
          />
        </div>
        <Tall desktop={80} />
      </Container>
      <Container backgroundColor="#0F123C">
        <Tall desktop={40} />
        <div style={{ display: 'flex' }}>
          <div className="Index__footer-links">
            <OutboundLink
              className="Index__footer-link"
              href="mailto:jordan.vincent.x@gmail.com"
              target="_blank"
            >
              Email
            </OutboundLink>
            <OutboundLink
              className="Index__footer-link"
              href="https://www.linkedin.com/in/jordanvinc/"
            >
              LinkedIn
            </OutboundLink>
            <OutboundLink
              className="Index__footer-link"
              href="https://twitter.com/jordan_vinc"
            >
              Twitter
            </OutboundLink>
            <OutboundLink
              className="Index__footer-link"
              href="https://www.instagram.com/jordan.vinc/"
            >
              Instagram
            </OutboundLink>
            <OutboundLink
              className="Index__footer-link"
              href="https://github.com/JordanVincent"
            >
              GitHub
            </OutboundLink>
          </div>
          <div style={{ flex: '1 1 0' }} />
          <p className="Index__footer-text">Always be exploring.</p>
        </div>
        <Tall desktop={40} />
      </Container>
    </div>
  );
};

export default Index;
