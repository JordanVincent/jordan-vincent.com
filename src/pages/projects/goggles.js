import React from 'react';

import {
  Figure,
  Distribute,
  Bleed,
  SectionHeading,
  Paragraph,
  Article,
} from 'components/projects/utils';

import explorationVideo from 'assets/projects/goggles/goggles-exploration.mp4';
import legacyImage from 'assets/projects/goggles/goggles-legacy.png';
import proto1Image from 'assets/projects/goggles/goggles-proto1.png';
import proto2Image from 'assets/projects/goggles/goggles-proto2.png';
import proto3Image from 'assets/projects/goggles/goggles-proto3.png';
import proto4Image from 'assets/projects/goggles/goggles-proto4.png';
import proto5Image from 'assets/projects/goggles/goggles-proto5.png';
import proto6Image from 'assets/projects/goggles/goggles-proto6.png';
import prototypeVideo from 'assets/projects/goggles/goggles-prototype.mp4';
import sketchesImage from 'assets/projects/goggles/goggles-sketches.jpg';
import specimensImage from 'assets/projects/goggles/goggles-specimens.png';
import tshirtImage from 'assets/projects/goggles/goggles-tshirt.jpg';

export default function SmartBricks() {
  return (
    <Article
      title="Goggles"
      subtitle="Rethinking Graph Layouts"
      about="Goggles helps Machine Learning and Data Engineers explore Roam's complex health graph. Goggles succeeds where common force directed networks fail."
      role="I entirely designed, prototyped, and built Goggles in the span of one month."
    >
      <Paragraph>
        A month after I joined, I was asked to redesign Roam's internal tool
        called Goggles. The tool allows the team to inspect the Roam's Knowledge
        Graph &mdash; a large graph that contains all of Roam's health data.
        Nodes can be drugs, diseases, providers, etc. Edges connect nodes
        together. For instance the "Treats" edge connects a drug to a disease.
      </Paragraph>
      <Paragraph>
        The existing tool couldn't keep up as the graph got larger and denser.
        The force directed layout simulation produced many edge crossings,
        awkward label placement, inconsistent node placement, and provided no
        structure or hierarchy to guide the eye. Additionally, each simulation
        generated a different layout. It hindered the user experience to a point
        where it was not usable anymore.
      </Paragraph>

      <Figure
        src={legacyImage}
        alt="Legacy"
        caption="The original Roam Health Knowledge Graph layout."
      />

      <SectionHeading title="Framing the Problem" />

      <Paragraph>
        Part of my design process was to understand the problem as much as
        possible. This step is really important because it helps define the
        problem space and inform later decisions. When creating internal tools
        at Roam, the two most important questions to ask are:
        <ul>
          <li>What is the purpose of this tool?</li>
          <li>What does the data look like?</li>
        </ul>
      </Paragraph>

      <Paragraph>
        The first question helps get to the underlying issue. More often than
        not, stakeholders and users already have formed an idea on how to solve
        the issue. There's generally more than one solution to a problem, and
        the obvious one is not always the best one. So, I try not to listen to
        solutions and instead focus on the user's current workflow and
        pain-points.
      </Paragraph>

      <Paragraph>
        Understanding the data is a recurring theme at Roam. Roam is dealing
        with troves of data which user interactions are dependent upon. At the
        beginning of a project, I spend a non-trivial amount of time digging in
        the data to understand its shape, size, bias, and quality.
      </Paragraph>

      <Paragraph>
        Main use-cases:
        <ul>
          <li>
            Graph building: find ways to connect a namespace to the Roam layer
            (the central namespace).
          </li>
          <li>Look for inconsistencies: wrong or missing connections.</li>
          <li>Create search queries across namespaces.</li>
        </ul>
      </Paragraph>

      <Paragraph>
        Main finding on the data side:
        <ul>
          <li>
            The graph is composed of namespaces. Nodes within namespaces have
            lots of connections. There are very few connections between
            namespaces, except to the Roam layer.
          </li>
          <li>
            Namespaces have 5&ndash;20 nodes, and there are less than 100
            namespaces.
          </li>
          <li>
            The number of connections to a given node is low, generally
            1&ndash;3.
          </li>
        </ul>
      </Paragraph>

      <Paragraph>
        With that in mind, I sketched a few ideas that I prototyped.
      </Paragraph>

      <SectionHeading title="Ideation" />

      <Paragraph>
        Pen and paper is the best way to get started, generate, and refine dozen
        of possible ideas. The finding about the data, especially that the graph
        is composed of loosely connected namespaces was critical. These
        constraints help design an ideal solution that answers a specific
        problem.
      </Paragraph>
      <Paragraph>
        In this case, a generic solution would have been to implement a force
        directed layout. It's a one-size-fit-all solution that's often used to
        easily display networks. There are many libraries out there to create
        such layouts.
      </Paragraph>
      <Paragraph>
        However, I believe the role of the designer is to understand that
        specific use-cases require specific solutions.
      </Paragraph>

      <Bleed>
        <Figure
          src={sketchesImage}
          alt="Sketches"
          caption="  A few sketches I created during the ideation phase. Each new idea is
          influenced by, and influences earlier sketches!"
        />
      </Bleed>

      <SectionHeading
        title="Prototyping"
        subtitle="Where designs hit reality"
      />

      <Paragraph>
        It's one thing to produce a pretty sketch or mockup, it's another to
        implement it. For data-dependent projects like this one, prototyping is
        an indispensable step in my design process. During the prototyping
        stage, designs are refined to fit the data or tweak the user
        interaction.
      </Paragraph>

      <Figure
        src={prototypeVideo}
        isVideo
        alt="Early prototype"
        caption="Physics simulation gone wrong…"
      />

      <Paragraph>
        And this is far from being a linear process. After each unsuccessful
        attempt, I go back to the dawing board and try to come up with new
        solutions. It took 8 prototypes and countless of sketches to arrive at a
        solution that felt right and worked well with the data.
      </Paragraph>

      <Paragraph>
        Some failed experiments &mdash; like the ones below &mdash; spiked new
        ideas.
      </Paragraph>
      <Bleed>
        <Distribute>
          <Figure
            src={proto1Image}
            alt="Goggles Prototype"
            caption="Early and rough prototype; trying to group nodes by namespace."
            withMargins={false}
          />
          <Figure
            src={proto2Image}
            alt="Goggles Prototype"
            caption="Using physics simulation to group nodes by namespace and connect
            namespaces together."
            withMargins={false}
          />
          <Figure
            src={proto3Image}
            alt="Goggles Prototype"
            caption="Bringing some structure to the nodes within namespaces."
            withMargins={false}
          />
          <Figure
            src={proto4Image}
            alt="Goggles Prototype"
            caption="Alright, now let's try to group namespaces that are connected."
            withMargins={false}
          />
          <Figure
            src={proto5Image}
            alt="Goggles Prototype"
            caption="Bringing some structure to how namespaces are connected to each
            other."
            withMargins={false}
          />
          <Figure
            src={proto6Image}
            alt="Goggles Prototype"
            caption="Arranging namespaces in a linear pattern to help with
            readability."
            withMargins={false}
          />
        </Distribute>
      </Bleed>
      <Paragraph>
        With graph layouts, there's always a balance between enforcing structure
        (using predefined rules) and letting some physics or generative
        algorithm create a more organic layout. On one hand, you have 100%
        control with structured layouts. They allow you to exactly define how
        things look, improving readability, consistency, and hierarchy. But
        these layouts require a lot of scientific and engineering work. On the
        other hand, one could use some physics simulation algorithm to generate
        a satisfying layout. It's less labor intensive, but the result can be
        approximative.
      </Paragraph>
      <Paragraph>
        I went with an intermediate approach. I needed to control the position
        of the nodes within the namespaces. It's very important at the namespace
        level to show which nodes are connected to which nodes, and to do so in
        a consistent manner. Thus, I had to manually specify how to lay out
        nodes. However, the connections between namespaces are sparse and act
        more as a navigation element. Here, I was able to use physics
        simulation. It gave the visualization an organic look and it had the
        extra benefit of making animations easy to implement.
      </Paragraph>

      <SectionHeading title="Result" />

      <Paragraph>
        The mix of structured namespaces and organic physics simulation was the
        a-ha moment of this project. See for yourself:
      </Paragraph>

      <Bleed>
        <Figure
          src={explorationVideo}
          isVideo
          withBrowserFrame
          alt="Goggles"
          caption="Animations help navigate the graph."
        />
      </Bleed>

      <Paragraph>
        I decided to show a maximum of two namespaces at the same time.
        Everything else is hidden until someone expands it. This is key to
        reducing visual clutter and allowing the users to focus on the task at
        hand.
      </Paragraph>
      <Paragraph>
        It's still possible to explore the graph. Visual aids show which nodes
        can be expanded to inspect linked namespaces. This design decision was
        highly influenced by the research findings. Additionally, a "specimens"
        page lists all available namespaces to complement the original
        visualization.
      </Paragraph>
      <Bleed>
        <Figure
          src={specimensImage}
          withBrowserFrame
          alt="Goggles"
          caption="The specimens page provides an overview of all available namespaces."
        />
      </Bleed>

      <Paragraph>
        This project was incredibly challenging. It took weeks to come up with a
        concept that made sense to the users and worked with the data. But I'm
        very satisfied with the result. It looks like nothing out there!
      </Paragraph>

      <Paragraph>
        The team was impressed by the new tool and it's now used internally.
        People loved the new layout and they even asked me to create t-shirts
        for the team. That's how I define success! :)
      </Paragraph>

      <Figure
        src={tshirtImage}
        autoplay
        loop
        alt="Custom Goggles t-shirts"
        caption="Abhi loves the new t-shirts."
      />
    </Article>
  );
}
