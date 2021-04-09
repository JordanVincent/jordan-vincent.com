import React from 'react';
import { OutboundLink } from 'gatsby-plugin-google-gtag';

import {
  Figure,
  Bleed,
  SectionHeading,
  Paragraph,
  Article,
} from 'components/projects/utils';

import diagramImage from 'assets/projects/cogniac/cogniac-diagram.svg';
import feedbackImage from 'assets/projects/cogniac/cogniac-feedback.png';
import feedback2Image from 'assets/projects/cogniac/cogniac-feedback2.png';
import mediumImage from 'assets/projects/cogniac/cogniac-medium.png';
import mobileImage from 'assets/projects/cogniac/cogniac-mobile.png';
import pipelineElementsImage from 'assets/projects/cogniac/cogniac-pipeline-elements.png';
import pipelineImage from 'assets/projects/cogniac/cogniac-pipeline.png';
import websiteImage from 'assets/projects/cogniac/cogniac-website.png';

import './styles.scss';

export default function SmartBricks() {
  return (
    <Article
      title="Cogniac"
      subtitle="Designing intuitive computer vision interfaces"
      about="Cogniac is a platform that allows anyone to use computer vision to solve problems. Our clients include enterprises and government agencies. Cogniac is still an early stage startup with a lot to learn and build."
      role="I was Cogniac's lead Designer and Front-End Engineer. I designed and developed Cogniac's web app, marketing website, and mobile apps (design only)."
    >
      <Figure src={diagramImage} alt="The Cogniac system" />

      <Paragraph>
        Cogniac is a small startup &mdash; of only 10 employees &mdash; with a
        bold vision: be the leading platform for enterprise computer vision.
        Cogniac's machine learning technology is central to its success.
        However, machine learning still needs human input. Computer vision can
        be powerful only if it was trained correctly.
      </Paragraph>

      <SectionHeading
        title="Feedback Interfaces"
        subtitle="Teaching the computer"
      />

      <Paragraph>
        I designed interfaces that allow people to provide feedback to improve
        the performance of computer vision models. Because computer vision
        requires hundreds if not thousands of examples, I optimized the feedback
        interfaces for speed while balancing accuracy. It's now possible to
        provide up to 60 pieces of feedback per minute.
      </Paragraph>

      <Bleed>
        <Figure
          src={feedback2Image}
          alt="Feedback screen"
          caption="A feedback screen dedicated to drawing bounding boxes around objects."
          withBrowserFrame
        />
      </Bleed>

      <Paragraph>
        Cogniac has around half a dozen application types such as counting or
        locating objects, text recognition, or classifying images. The challenge
        was to build specific feedback interfaces while keeping a consistent
        experience across applications. When entering the feedback mode, users
        can expect the same controls for submitting feedback, zooming images,
        and inspecting details. Providing feedback on a new application type is
        effortless.
      </Paragraph>

      <Bleed>
        <Figure
          src={feedbackImage}
          alt="Feedback screens"
          caption="A subset of the feedback panel I created. From left to right: drawing
        bounding boxes, classification, entering text, and counting objects."
        />
      </Bleed>
      <SectionHeading title="Application Pipelines" />

      <Paragraph>
        Computer vision models are limited and real-life applications always
        require to associate multiple models together. At Cogniac we call it
        pipelines. To refine detections, images flow from one application to
        another. For instance, a first application detects animal types, and the
        following one classifies dog breeds. The biggest challenge was to design
        intuitive pipelines of applications. Read the following Medium story to
        learn more about the process:
      </Paragraph>

      <OutboundLink
        href="https://medium.com/@jordanvincent/designing-a-mental-model-for-computer-vision-applications-2f310527ad87"
        style={{
          border: '1px solid rgba(0,0,0,0.15)',
          display: 'block',
          borderRadius: 6,
        }}
      >
        <Figure
          src={mediumImage}
          alt="Link to medium article"
          withMargins={false}
        />
      </OutboundLink>

      <Paragraph>
        Here is a look at a few iterations of the pipeline. The design is still
        in flux as the technology changes and we learn more about different use
        cases.
      </Paragraph>

      <Bleed>
        <Figure
          src={pipelineElementsImage}
          alt="Pipeline evolution"
          caption="Different iterations of the application pipeline."
        />
      </Bleed>

      <Paragraph>
        The pipeline is a key element of the web interface. It acts as both
        navigation and status indicator. It is present on all pages of the
        application.
      </Paragraph>

      <Bleed>
        <Figure
          src={pipelineImage}
          alt="Cogniac dashboard"
          caption="Page showing the outpout images of an application."
          withBrowserFrame
        />
      </Bleed>
      <SectionHeading title="The Mobile App" />

      <Paragraph>
        Cogniac's mobile app allows people to provide feedback and manage
        applications on the go. My work consisted in streamlining the navigation
        to access applications in just a few taps. Applications from the same
        pipeline can be reached with a swipe.
      </Paragraph>

      <Bleed>
        <Figure src={mobileImage} alt="Mobile screens" />
      </Bleed>

      <SectionHeading title="The marketing website" />

      <Paragraph>
        The{' '}
        <OutboundLink href="https://cogniac.co">marketing website</OutboundLink>{' '}
        serves two goals: demonstrate Cogniac's capabilities, and show how
        Cogniac works.
      </Paragraph>
      <Paragraph>
        Cogniac supports a wide range of applications, from object counting to
        threat detection or industrial inspections. The top banner displays
        multiple use cases targeted at specific markets
      </Paragraph>
      <Paragraph>
        Because computer vision is such a new technology, we needed to help
        visitors understand how they can use it. The homepage features an
        interactive demo that presents Cogniac's main concepts.
      </Paragraph>

      <Bleed>
        <Figure src={websiteImage} alt="Cogniac Website" />
      </Bleed>
    </Article>
  );
}
