import React from 'react';
import { Tweet } from 'react-twitter-widgets';

import {
  Figure,
  Bleed,
  SectionHeading,
  Heading,
  Paragraph,
  Article,
  Distribute,
  List,
} from 'components/projects/utils';
import { Tall } from 'components/Spacing';

import diagramImage from 'assets/projects/adminca/adminca-diagram.svg';
import whiteboardImage from 'assets/projects/adminca/adminca-whiteboard.jpg';
import graphImage from 'assets/projects/adminca/adminca-graph.svg';
import mapImage from 'assets/projects/adminca/adminca-map.png';
import emailImage from 'assets/projects/adminca/adminca-email.png';
import tipsImage from 'assets/projects/adminca/adminca-tips.png';
import videoImage from 'assets/projects/adminca/adminca-video.png';
import signupImage from 'assets/projects/adminca/adminca-signup.png';
import helpImage from 'assets/projects/adminca/adminca-help.png';
import createImage from 'assets/projects/adminca/adminca-create.png';
import smartImage from 'assets/projects/adminca/adminca-smart.svg';
import simpleImage from 'assets/projects/adminca/adminca-simple.svg';
import secureImage from 'assets/projects/adminca/adminca-secure.svg';
import finalDetailsImage from 'assets/projects/adminca/adminca-final-details.png';
import finalSettingsImage from 'assets/projects/adminca/adminca-final-settings.png';
import bookDocument from 'assets/projects/adminca/adminca-book.pdf';
import posterDocument from 'assets/projects/adminca/adminca-poster.pdf';

export default function AnnotationManager() {
  return (
    <Article
      title="Adminca"
      subtitle="A successful startup project"
      about="Adminca is an admin panel as a service that is easy to setup and use. Adminca connects to the mobile development platform Parse and saves developers time and resources setting up admin panels. It is used by hundreds of mobile app agencies every month."
      role="I co-founded Adminca with Lukas Eiermann and Frank Kaiyuan Xu. I participated in every aspect of the project from business strategy to design and development."
    >
      <Bleed>
        <Figure
          isYoutube
          src="https://www.youtube.com/embed/tGQS_LY1HOs?rel=0"
          alt="Annotation Manager"
        />
      </Bleed>
      <SectionHeading title="The Problem" subtitle="Admin Panels are Broken" />
      <Figure src={diagramImage} alt="Problem space" />
      <Paragraph>
        Every mobile or web application accumulates data in its backend
        database. Companies have to design and develop admin panels to enable
        their non-technical staff to view and manage this data. However,
        creating admin panels has always been a hassle, because:
      </Paragraph>
      <List>
        <li>
          Developers <b>waste time</b> building and maintaining a
          non-revenue-generating tool.
        </li>
        <li>
          It often <b>lowers staff efficiency</b> due to poorly designed
          interfaces.
        </li>
      </List>
      <SectionHeading title="Research" />
      <Paragraph>
        We carried out a lengthy user research study that included 14
        interviews, a competitive analysis of 13 competitors, and the review of
        27 online threads. We discerned two main user groups with very different
        goals: developers, and non-technical people.
      </Paragraph>
      <Paragraph>
        Research insights became more than mere design principles, it became our
        values! Every subsequent decision we would take would have to fall in
        the bounds of our three values that we called the <b>3S</b>:
      </Paragraph>
      <Bleed>
        <Distribute>
          <div>
            <Figure src={simpleImage} alt="Simple" />
            <Heading>Simple — Effortless setup + Intuitive interface.</Heading>
            <Paragraph>
              Save developers weeks of time, and streamline the admin panel
              setup process. Provide an intuitive interface that non-technical
              users can get their hands on without training.
            </Paragraph>
          </div>
          <div>
            <Figure src={secureImage} alt="Secure" />
            <Heading>
              Secure — Data permissions + Encrypted credentials.
            </Heading>
            <Paragraph>
              Empower developers to manage data permission to ensure data
              integrity. Use highest encryption and security measures for
              Adminca to protect customer’s data.
            </Paragraph>
          </div>
          <div>
            <Figure src={smartImage} alt="Smart" />
            <Heading>Smart — Powerful features + Smart defaults.</Heading>
            <Paragraph>
              Provide solutions for diverse data management problems with a
              comprehensive feature set. Understand what users want to achieve
              and provide them with smart defaults that make their live easier.
            </Paragraph>
          </div>
        </Distribute>
      </Bleed>
      <SectionHeading
        title="Iterative Prototyping"
        subtitle="3 rounds over 5 months"
      />
      <Paragraph>
        We followed a lean UX approach. It allowed us to deliver to the market a
        quick and dirty MVP that we iterated over. To prevent technology to slow
        us down, we sought to use modular web components that we could easily
        add, modify, or remove based on initial feedback.
      </Paragraph>
      <Bleed>
        <Figure src={whiteboardImage} alt="Ideation phase" />
      </Bleed>
      <Paragraph>
        Because our two main user groups had very different needs, we decided to
        build a two sided interface. Admins can create and customize their admin
        panel in a matter of seconds and invite contributors. Contributors only
        have access to the data management part of the interface which is
        customized by admins.
      </Paragraph>
      <Heading>Detail view</Heading>
      <Paragraph>
        The main contributor view is the record's detail view. When clicking on
        a record in the table view, a fly out detail panel appears to present
        more information <b>without losing context.</b> After a few iterations,
        we made the side panel easier to read and improved the table view to
        display more than one column at a time.
      </Paragraph>
      <Figure withBorder src={finalDetailsImage} alt="" />
      <Heading>Settings view</Heading>
      <Paragraph>
        The settings view allows admins to customize what contributors can see
        and the actions they can perform. Each panel, class, and field is
        customizable. The challenge was to make customizing multiple fields at
        the same time fast and intuitive. In the final version, we removed
        unnecessary information and added tooltips to display help messages.
      </Paragraph>
      <Figure withBorder src={finalSettingsImage} alt="" />
      <Heading>Onboarding</Heading>
      <Paragraph>
        Following our design principles, we wanted the very first experience of
        Adminca to be as smooth as possible. We designed and refined our
        onboarding flow to help developers to get started with Adminca without
        prior knowledge of admin panels. After multiple rounds of usability
        testing, users found it was very easy to get started.{' '}
        <b>
          The magic moment happens after a minute or two only, when their panel
          is up and running and they can start managing their data right away!
        </b>
      </Paragraph>
      <Tall desktop={40} mobile={40} />
      <Bleed>
        <Distribute>
          <Figure
            withMargins={false}
            withBorder
            src={signupImage}
            alt=""
            caption={
              <p>
                <b>1. Account creation.</b> We removed unnecessary fields and
                reduced the required information to the essential.
              </p>
            }
          />
          <Figure
            withMargins={false}
            withBorder
            src={emailImage}
            alt=""
            caption={
              <p>
                <b>2. Welcome email.</b> Once the account is created the user
                receives a welcome email with additional resources. There is no
                need to confirm the email.
              </p>
            }
          />
          <Figure
            withMargins={false}
            withBorder
            src={videoImage}
            alt=""
            caption={
              <p>
                <b>3. Intro video.</b> Users understood the basic concept from
                our marketing website but weren’t exactly sure how Adminca
                worked. The video explained the main concepts.
              </p>
            }
          />
          <Figure
            withMargins={false}
            withBorder
            src={createImage}
            alt=""
            caption={
              <p>
                <b>4. Panel creation.</b> Most users weren’t comfortable with
                providing their keys. We added a new tooltip that explained our
                security measures and why Adminca required it.
              </p>
            }
          />
          <Figure
            withMargins={false}
            withBorder
            src={tipsImage}
            alt=""
            caption={
              <p>
                <b>5. Onboarding tips.</b> We observed that users didn’t know
                what exactly they were supposed to do next. We added a guided
                tour to help then get started.
              </p>
            }
          />
          <Figure
            withMargins={false}
            withBorder
            src={helpImage}
            alt=""
            caption={
              <p>
                <b>6. Help section.</b> More detailed explanation about all of
                Adminca’s features are available in the help section.
              </p>
            }
          />
        </Distribute>
      </Bleed>
      <Tall desktop={80} mobile={80} />
      <Paragraph>
        There is much more to Adminca than those few screens, check out the demo
        to get a better understanding of the whole experience:
      </Paragraph>
      <Figure
        isYoutube
        src="https://www.youtube.com/embed/bBo8nM-DNzc?rel=0"
        caption="Onboarding video we created to introduce new users to Adminca."
      />
      <SectionHeading title="Outcome" subtitle="A successful launch" />
      <Paragraph>
        We launched in January 2016 and quickly saw people from all around the
        world using it! Adminca is the perfect tool for web and mobile agencies.
        It allows them to offer an admin panel to their clients without the need
        for coding. After only two months more than 500 accounts have been
        created, and around 150 people use Adminca every week to manage their
        data!
      </Paragraph>
      <Figure src={graphImage} alt="User growth over time" />
      <SectionHeading title="Feedback" subtitle="Mobile agencies love it!" />
      <Bleed>
        <Figure src={mapImage} alt="User feedback around the world" />
      </Bleed>
      <Tall desktop={80} mobile={80} />
      <Bleed>
        <Distribute>
          <Tweet tweetId="694862419382894592" />
          <Tweet tweetId="697939302991290368" />
          <Tweet tweetId="696758247106031616" />
        </Distribute>
      </Bleed>
      <Tall desktop={80} mobile={80} />
      <Paragraph>
        Download the{' '}
        <a href={bookDocument} target="_blank" rel="noreferrer">
          design process book
        </a>{' '}
        and{' '}
        <a href={posterDocument} target="_blank" rel="noreferrer">
          poster
        </a>
        .
      </Paragraph>
      <Paragraph>
        Adminca shut down after 5 years, in 2021. Adminca was still being used
        by hundreds of users but we didn't have time to maintain it anymore.
      </Paragraph>
    </Article>
  );
}
