import React from 'react';
import { OutboundLink } from 'gatsby-plugin-google-gtag';

import { Tall } from 'components/Spacing';

import Heading from './Heading';
import Container from './Container';
import OtherProject from './OtherProject';
import FeaturedProject from './FeaturedProject';
import ProfessionalProject from './ProfessionalProject';
import ProfessionalRole from './ProfessionalRole';
import InstagramPhoto from './InstagramPhoto';

import airtableLogo from './company-logos/airtable.svg';
import annotationManager from './project-images/annotation-manager.png';
import outdoorStatus from './project-images/outdoor-status.png';
import smartBricks from './project-images/smart-bricks.png';
import profilePicture from './profile.jpg';
import './index.scss';

import defaultInstagramPhoto from './instagram-photos/default.jpg';

const instagramPhotos = [
  {
    src: defaultInstagramPhoto,
    alt: '',
  },
  {
    src: defaultInstagramPhoto,
    alt: '',
  },
  {
    src: defaultInstagramPhoto,
    alt: '',
  },
  {
    src: defaultInstagramPhoto,
    alt: '',
  },
  {
    src: defaultInstagramPhoto,
    alt: '',
  },
  {
    src: defaultInstagramPhoto,
    alt: '',
  },
];

const Index = () => {
  return (
    <div className="Index">
      <Container>
        <Tall desktop={80} />
        <div style={{ display: 'flex', alignItems: 'center' }}>
          <div className="Index__profile-picture-section">
            <img
              src={profilePicture}
              width={250}
              alt="Jordan in the Grand Canyon"
              className="Index__profile-picture"
            />
            <p className="Index__mission">
              On a mission to improve access to the outdoors
            </p>
          </div>
          <div>
            <h1 className="Index__name">Jordan Vincent</h1>
            <p className="Index__role">Designer / Engineer</p>
          </div>
        </div>
        <Tall desktop={120} />
      </Container>
      <Container backgroundColor="#3C4E11">
        <Tall desktop={80} />
        <Heading variant="darkGreen">Outdoor Initiatives</Heading>
        <Tall desktop={20} />
        <p style={{ color: 'white' }}>
          Follow me on{' '}
          <OutboundLink href="https://twitter.com/jordan_vinc">
            Twitter
          </OutboundLink>{' '}
          or the{' '}
          <OutboundLink href="https://outdoorstatus.com">
            Outdoor Status newsletter
          </OutboundLink>
          .
        </p>
        <Tall desktop={40} />
        <div style={{ display: 'flex', justifyContent: 'space-between' }}>
          <FeaturedProject
            title="Outdoor Status"
            subtitle="The newsletter for booking hiking permits"
            coverSrc={outdoorStatus}
          />
          <FeaturedProject
            title="Rim to Rim permits"
            subtitle="Interactive guide to the Grand Canyon most iconic trail"
            coverSrc={outdoorStatus}
          />
          <FeaturedProject
            title="A night under the stars"
            subtitle="When to visit all US National parks in one visualization"
            coverSrc={outdoorStatus}
          />
        </div>
        <Tall desktop={80} />
      </Container>
      <Container>
        <Tall desktop={80} />
        <Heading>Capturing wilderness in its best light</Heading>
        <Tall desktop={20} />
        <p>
          I trade my computer for my backpack whenever I can! I like to explore
          remote places and climb high peaks. Follow my adventures on{' '}
          <OutboundLink href="https://www.instagram.com/jordan.vinc/">
            Instagram
          </OutboundLink>
          .
        </p>
        <Tall desktop={40} />
        <div
          style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(3, 1fr)',
            gap: 25,
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
        <ProfessionalRole
          companyName="Airtable"
          companyLogoSrc={airtableLogo}
          duration="2020 — present"
        />
        <Tall desktop={40} />
        <p>Work in progress, literally</p>
        <Tall desktop={80} />
        <ProfessionalRole
          companyName="Roam Analytics"
          companyLogoSrc={airtableLogo}
          duration="2017 — 2020"
        />
        <Tall desktop={40} />
        <ProfessionalProject
          title="Annotation Manager"
          subtitle="I designed and built most of Roam's products, inclusing Annotation Manager — a text annotation tool that doesn't sacrifice user experience."
          coverSrc={annotationManager}
        />
        <Tall desktop={40} />
        <ProfessionalProject
          title="Graph Explorer"
          subtitle="I designed and built tools for Data Engineers to explore Roam's extensive health knowledge graph."
          coverSrc={annotationManager}
        />
        <Tall desktop={80} />
        <ProfessionalRole
          companyName="Cogniac"
          companyLogoSrc={airtableLogo}
          duration="2016 — 2017"
        />
        <Tall desktop={40} />
        <ProfessionalProject
          title="Cogniac Web App"
          subtitle="I designed and built Cogniac's user interface for building and training computed vision models."
          coverSrc={annotationManager}
        />
        <Tall desktop={40} />
      </Container>
      <Container>
        <Tall desktop={80} />
        <Heading>Other projects</Heading>
        <Tall desktop={20} />
        <p>
          I've worked on dozens of side projects over the years, these ones are
          the most notable.
        </p>
        <Tall desktop={40} />
        <div style={{ display: 'flex', justifyContent: 'space-between' }}>
          <OtherProject title="Outdoor Status" coverSrc={smartBricks} />
          <OtherProject title="Rim to Rim permits" coverSrc={smartBricks} />
          <OtherProject
            title="A night under the stars"
            coverSrc={smartBricks}
          />
        </div>
        <Tall desktop={80} />
      </Container>
      <Container backgroundColor="#0F123C">
        <Tall desktop={40} />
        <div style={{ display: 'flex' }}>
          <div className="Index__footer-links">
            <OutboundLink className="Index__footer-link" href="">
              Email
            </OutboundLink>
            <OutboundLink className="Index__footer-link" href="">
              LinkedIn
            </OutboundLink>
            <OutboundLink className="Index__footer-link" href="">
              Twitter
            </OutboundLink>
            <OutboundLink className="Index__footer-link" href="">
              Instagram
            </OutboundLink>
            <OutboundLink className="Index__footer-link" href="">
              GitHub
            </OutboundLink>
            <OutboundLink className="Index__footer-link" href="">
              Resume
            </OutboundLink>
          </div>
          <div style={{ flex: '1 1 0', marginRight: '25px' }} />
          <p className="Index__footer-text">Always be exploring.</p>
        </div>
        <Tall desktop={40} />
      </Container>
    </div>
  );
};

export default Index;
