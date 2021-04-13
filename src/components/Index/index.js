import React from 'react';
import { OutboundLink } from 'gatsby-plugin-google-gtag';

import { Tall } from 'components/Spacing';
import PageMetadata from 'components/PageMetadata';

import Header from './Header';
import Footer from './Footer';
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
      <Header />
      <Container backgroundColor="#3C4E11">
        <Tall desktop={80} mobile={60} />
        <Heading variant="darkGreen">Outdoor Initiatives</Heading>
        <Tall desktop={40} mobile={40} />
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
        <Tall desktop={60} mobile={40} />
        <div className="Index__featured-projects">
          <FeaturedProject
            title="Outdoor Status"
            subtitle="The newsletter for booking hiking permits"
            coverSrc={outdoorStatus}
            href="https://outdoorstatus.com"
          />
          <Tall mobile={40} />
          <FeaturedProject
            title="Rim to Rim permits"
            subtitle="An interactive guide to the Grand Canyon most iconic trail"
            coverSrc={rimToRimPermits}
            href="https://rimtorimpermits.com"
          />
          <Tall mobile={40} />
          <FeaturedProject
            title="A night under the stars"
            subtitle="Find out when to visit all US National parks, in one visualization"
            coverSrc={nightUnderTheStars}
            withIibBadge={true}
          />
        </div>
        <Tall desktop={80} mobile={80} />
      </Container>
      <Container>
        <Tall desktop={80} mobile={40} />
        <Heading>Capturing wilderness in its best light</Heading>
        <Tall desktop={40} mobile={40} />
        <p className="Index__description">
          I trade my computer for my backpack whenever I can! I like to explore
          remote places and climb high peaks. Follow my adventures on{' '}
          <OutboundLink href="https://www.instagram.com/jordan.vinc/">
            Instagram
          </OutboundLink>
          .
        </p>
        <Tall desktop={60} mobile={40} />
        <div className="Index__instagram-photos-grid">
          {instagramPhotos.map(({ src, alt }) => (
            <InstagramPhoto src={src} alt={alt} key={src} />
          ))}
        </div>
        <Tall desktop={80} mobile={40} />
      </Container>
      <Container backgroundColor="#F8F3EC">
        <Tall desktop={80} mobile={40} />
        <Heading>Helping others acheive their dreams</Heading>
        <Tall desktop={40} mobile={40} />
        <p className="Index__description">
          Find more details on{' '}
          <OutboundLink href="https://www.linkedin.com/in/jordanvinc/">
            LinkedIn
          </OutboundLink>
          .
        </p>
        <Tall desktop={60} mobile={40} />
        <ProfessionalRole companyName="Airtable" duration="2020–present" />
        <Tall desktop={40} mobile={20} />
        <ProfessionalProject
          title="Airtable Onboarding"
          description="As part of the Activation team, I design and build onboarding experiences for new Airtable users."
          coverSrc={airtable}
          href="https://airtable.com"
        />
        <Tall desktop={80} mobile={60} />
        <ProfessionalRole companyName="Roam Analytics" duration="2017–2020" />
        <Tall desktop={40} mobile={20} />
        <ProfessionalProject
          title="Annotation Manager"
          description="I designed and built most of Roam's products, including Annotation Manager — a text annotation tool that doesn't sacrifice user experience."
          coverSrc={annotationManager}
          href="/projects/annotation-manager"
        />
        <Tall desktop={60} mobile={40} />
        <ProfessionalProject
          title="Goggles"
          description="I also designed and built internal tools. Goggles allows Data Engineers to explore Roam's extensive health knowledge graph."
          coverSrc={goggles}
          href="/projects/goggles"
        />
        <Tall desktop={80} mobile={40} />
        <ProfessionalRole companyName="Cogniac" duration="2016–2017" />
        <Tall desktop={40} mobile={20} />
        <ProfessionalProject
          title="Cogniac Web App"
          description="I designed and built Cogniac's web application. It's used by non-technical users to build and train computed vision models from scratch."
          coverSrc={cogniac}
          href="/projects/cogniac"
        />
        <Tall desktop={40} mobile={40} />
      </Container>
      <Container>
        <Tall desktop={80} mobile={40} />
        <Heading>Other projects</Heading>
        <Tall desktop={40} mobile={40} />
        <p className="Index__description">
          I've worked on dozens of side projects over the years, these ones are
          the most notable.
        </p>
        <Tall desktop={60} mobile={40} />
        <div className="Index__other-projects">
          <OtherProject
            title="A flight against time"
            subtitle="See how strange the US looks like from an airplane's perspective"
            coverSrc={flightAgainstTime}
          />
          <Tall desktop={0} mobile={40} />
          <OtherProject
            title="DinoFit"
            subtitle="Do pushups to save dinos on the brink of extinction"
            coverSrc={dinofit}
            href="/projects/dino-fit"
          />
          <Tall desktop={0} mobile={40} />
          <OtherProject
            title="Smart Bricks"
            subtitle="A place for LEGO artists to sell their creations"
            coverSrc={smartBricks}
            href="/projects/smart-bricks"
          />
        </div>
        <Tall desktop={80} mobile={40} />
      </Container>
      <Footer />
    </div>
  );
};

export default Index;
