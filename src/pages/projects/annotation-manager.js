import React from 'react';
import { OutboundLink } from 'gatsby-plugin-google-gtag';

import {
  Figure,
  Bleed,
  SectionHeading,
  Paragraph,
  Article,
  Distribute,
} from 'components/projects/utils';

import annotationsVideo from 'assets/projects/annotation-manager/annotation-manager-annotations.mp4';
import deckImage from 'assets/projects/annotation-manager/annotation-manager-deck.png';
import ideation1Image from 'assets/projects/annotation-manager/annotation-manager-ideation1.png';
import ideation2Image from 'assets/projects/annotation-manager/annotation-manager-ideation2.png';
import ideation3Image from 'assets/projects/annotation-manager/annotation-manager-ideation3.png';
import ideation4Image from 'assets/projects/annotation-manager/annotation-manager-ideation4.png';
import ideation5Image from 'assets/projects/annotation-manager/annotation-manager-ideation5.png';
import ideation6Image from 'assets/projects/annotation-manager/annotation-manager-ideation6.png';
import overviewImage from 'assets/projects/annotation-manager/annotation-manager-overview.png';
import platformImage from 'assets/projects/annotation-manager/annotation-manager-platform.png';
import specImage from 'assets/projects/annotation-manager/annotation-manager-spec.png';

import './styles.scss';

export default function AnnotationManager() {
  return (
    <Article
      title="Annotation Manager"
      subtitle="Building a machine learning platform"
      about="The Annotation Manager is a text labeling tool at the core of Roam Analytic's natural language processing platform for healthcare. It is used internally for creating high-quality training datasets for machine learning models."
      role="I was the Lead Designer and primary Frontend Developer at Roam Analytics. It wouldn't have been possible without the help of Nick Brown, Daniel Telatnik, Scott Wey, Evan Lin, and many other Roamers."
      backgroundColor="#1A4160"
      isBackgroundDark
    >
      <Bleed>
        <Figure src={overviewImage} alt="Annotation Manager" withBrowserFrame />
      </Bleed>
      {/* <div class="hero-image">
        <div class="browser-frame">
          <img
            src="/assets/images/projects/annotation-manager-overview.png"
            alt="Annotation Manager"
          />
        </div>
        <div class="backdrop" style="background: #1A4160"></div>
      </div> */}

      <Paragraph>
        Mid-2018, Roam Analytics recentered its efforts to focus on what it does
        best: extracting data from unstructured healthcare notes. Healthcare
        organizations accumulate vast amounts of clinical notes, but most of
        that information sits in locked databases. Clinical notes contain
        valuable information about the patient lifestyle, mental state, and risk
        factors, etc. More importantly, it can be extracted and analyzed across
        an entire population. Understanding these trends moves us toward a
        future where healthcare is more accessible and affordable.
      </Paragraph>

      <Paragraph>
        Natural language processing (NLP) models require thousands of examples
        to train. At Roam, it used to take highly paid engineers weeks to
        develop models, because we didn't have standard tools. We also rely
        heavily on a team of nurses to create training datasets by annotating
        text. As a company, it made sense to invest in developing better tools
        to streamline that workflow.
      </Paragraph>

      <Paragraph>
        Working with the leadership team, I presented in a company-wide vision
        for what we called "the Roam platform". The Roam platform is an
        integrated tool for exploring language data, annotating text, training
        NLP models, and deploying them. To build that vision, I leveraged my
        experience at{' '}
        <OutboundLink href="/projects/cogniac">Cogniac</OutboundLink>. At
        Cogniac, we had successfully built such a platform, which allowed a
        single person to create a computer vision model in a matter of hours. I
        thought it would be easy.
      </Paragraph>

      <SectionHeading title="Moving (too) fast" />

      <Paragraph>
        I didn’t waste time. As the only Designer and Frontend Engineer, I took
        it upon myself to move fast and deliver the first version of that
        vision.
      </Paragraph>

      <Paragraph>
        I assumed that creating training data for NLP tasks would be similar to
        creating training data for computer vision. I was wrong. While it takes
        someone a fraction of a second to make sense of an image, it takes more
        thought to understand the meaning of a sentence. Language is much more
        subjective.
      </Paragraph>

      <Paragraph>
        One of the biggest interaction design challenges was to create a text
        labeling interface. I had three constraints: 1) to support overlapping
        text annotations, 2) to allow connections between annotations (called
        relations), and 3) to keep the text legible.
      </Paragraph>

      <Paragraph>
        There are a few text-labeling tools out there, but they all sacrifice
        text legibility. This was unacceptable for me. Test labeling is already
        a daunting task for users. Tools should help, not hinder comprehension.
        Optimizing for two constraints is easy; optimizing for all three
        constraints at the same time is borderline impossible.
      </Paragraph>

      <Paragraph>It took a few dozens of iterations.</Paragraph>

      <Bleed>
        <Distribute childrenPerRow={2}>
          <Figure
            src={ideation1Image}
            alt="Annotation overlaps ideas"
            withMargins={false}
            caption={
              <>
                <p>
                  First, I tried out different ways to display overlapping
                  annotations. Looking at existing projects, I noticed that
                  annotations rarely overlap more than twice.
                </p>
                <p>
                  Increasing the line-height provides enough space for stacking
                  up annotations and it improves readability.
                </p>
              </>
            }
          />
          <Figure
            src={ideation2Image}
            alt="Hand-drawn relations"
            withMargins={false}
            caption={
              <>
                <p>
                  By far the biggest roadblock was displaying relations. I
                  experimented on paper first. People have been annotating text
                  for centuries, there might be something to learn from it.
                </p>
                <p>
                  I learned that creating annotations and reading someone else's
                  annotations very different tasks. I decided to favor
                  readability.
                </p>
              </>
            }
          />
          <Figure
            src={ideation3Image}
            alt="Displaying relations around text"
            withMargins={false}
            caption={
              <>
                <p>
                  I tried to display relations in the margins or the rivers.
                </p>
                <p>
                  But it was too distracting and too hard to understand;
                  requiring users to follow the lines with their finger.
                </p>
              </>
            }
          />
          <Figure
            src={ideation4Image}
            alt="Vertical reading layout"
            withMargins={false}
            caption={
              <>
                <p>
                  To circumvent the previous issue, I experimented with
                  horizontal and vertical layouts.
                </p>
                <p>
                  I tested for reading speed and comprehension, which turned out
                  to be poor.
                </p>
              </>
            }
          />
          <Figure
            src={ideation5Image}
            alt="Annotation groups and graph"
            withMargins={false}
            caption={
              <>
                <p>
                  I noticed that most relations originated from the same source.
                  What if we moved away from the strict layout imposed by the
                  text and represented the annotations as a graph?
                </p>
                <p>
                  It reduced clutter, but users had to constantly move their
                  eyes between the text and the graph.
                </p>
              </>
            }
          />
          <Figure
            src={ideation6Image}
            alt="3D relations"
            withMargins={false}
            caption={
              <>
                <p>
                  Thinking outside of the box, literally. Using the third
                  dimension was interesting but too distracting.
                </p>
                <p>
                  I also tried to display the relations on mouseover. But now,
                  users had to move their cursor around to ensure they didn't
                  miss any hidden relations.
                </p>
              </>
            }
          />
        </Distribute>
      </Bleed>

      <Paragraph>
        After a few days of tinkering, I decided to ask for help. After exposing
        the problem to a handful of co-workers, I ran a workshop to generate new
        ideas. The workshop was a success in two ways: we found a solution, and
        the team felt empowered.
      </Paragraph>

      <Bleed backgroundColor="#ebeff2">
        <Figure src={specImage} alt="Annotation interface specification" />
      </Bleed>
      {/* <figure>
        <img
          src="/assets/images/projects/annotation-manager-spec.png"
          alt="Annotation interface specification"
          class="img-responsive"
        />
        <figcaption></figcaption>
        <div class="backdrop" style="background: #EBEFF2"></div>
      </figure> */}

      <Paragraph>Here it is in action:</Paragraph>

      <Bleed>
        <Figure
          src={annotationsVideo}
          alt="Annotation interface"
          caption="The annotation interface supporting relations and overlaps while keeping the text unobstructed"
          withBrowserFrame
          isVideo
        />
      </Bleed>

      <Paragraph>
        It wasn’t all sunshine and rainbows. This project is the largest project
        I had ever undertaken; not in term of scope, but in the size of the team
        and its impact. I made two crucial mistakes which resulted in having to
        rebuild 50% of the product and a six-month delay! The mistakes were: not
        testing assumptions early enough, and lack of ownership.
      </Paragraph>

      <SectionHeading title="Testing assumptions early" />

      <Paragraph>
        In January 2019, six months after the start of the project, we finally
        received feedback from our first user. Laura, a nurse employed by Roam,
        used the tool for the first time on a new project. Her feedback was
        concerning.
      </Paragraph>

      <Paragraph>
        Looking back, I can't believe we waited six months to get feedback. The
        Annotation Manager isn’t the only product I’ve built. I’ve helped
        develop a dozen products over the years, from mobile games to complex
        enterprise applications. I studied Human-Centered Design, and I know
        that testing early and often is paramount. And somehow, we got carried
        away.
      </Paragraph>

      <Paragraph>
        That was a wake-up call. Why did I spend so much time building features
        when I should have done my designer's job? For the following weeks, I
        met with everyone who had used the tool. There were three main issues:
        <ul>
          <li>
            The tool was too slow: text searches would take close to a minute to
            resolve. We clearly underestimated the size of the datasets.
          </li>
          <li>
            It was not flexible for nurses who worked on a flexible schedule.
          </li>
          <li>
            The integrated platform approach made it very hard for Data
            Scientists to integrate the tool into their workflow.
          </li>
        </ul>
      </Paragraph>
      <Paragraph>
        Interestingly, users loved the new annotation interface I co-designed
        with them. It was miles ahead from{' '}
        <OutboundLink href="https://brat.nlplab.org/examples.html">
          the leading annotation tool
        </OutboundLink>
        .
      </Paragraph>
      <Paragraph>
        I went back to first principles. I realized that the current
        architecture was too limiting and a new mental model was needed. I
        created a series of interactive prototypes to test my assumptions. The
        prototypes went a long way in convincing end-users and leadership that
        there was <i>a better way</i>. Just a few weeks later, the team started
        working on a new version of the Annotation Manager. I had succeeded!
      </Paragraph>

      <SectionHeading title="Lack of ownership" />

      <Paragraph>
        The tool was developed by the infrastructure and application teams.
        Because we advertised the tool as "the Roam platform”, engineers
        believed we needed to invest resources in creating a strong data
        infrastructure. This two-team approach resulted in no-one owning for the
        direction of the project. Both teams optimized for different metrics,
        and communication issues crept up. For instance, the tool was slow
        because one team was optimizing for database writing speed instead of
        reading speed. And the teams were constantly blaming each other.
      </Paragraph>

      <Paragraph>
        I shared those concerns with leadership. They were taken seriously, but
        I encountered resistance to change. What I proposed &mdash; breaking up
        the teams &mdash; went contrary to the platform approach we had sold a
        few months ago.
      </Paragraph>

      <Paragraph>
        Unfortunately, this top-down approach didn’t work. I was disappointed,
        but I was decided to change things. The bottom-up approach ended up
        being a better solution. During the prototyping phase, I made sure to
        include the implementation teams. I showed them my process and the
        reasons behind my decisions. I also used the opportunity to ask for
        their input which proved to be beneficial. By the end of the process,
        everyone understood the benefits of breaking up the platform into
        smaller units.
      </Paragraph>

      <Paragraph>
        It was decided that from now on, the Annotation Manager's goal would
        only be to annotate text. Exploring data and training models would
        happen somewhere else. Once that was clear, it was easy to convince
        leadership to give full ownership to one of the teams. Today, teams are
        more independent than ever and morale is much higher. I believe this is
        the right approach to building successful platforms.
      </Paragraph>

      <Figure
        src={deckImage}
        alt="Annotation Manager V2 deck"
        caption="A slide of the deck I created to present the new Annotation Manager"
      />

      <SectionHeading title="A better way to build platforms" />

      <Paragraph>
        Platforms are sexy. I haven’t worked for a company that doesn't want to
        be a platform. But platforms can mean many things depending on whom you
        talk to. People often think of platforms as a silver bullet. It's easy
        to convince ourselves that it will eventually solve all our problems. It
        blinds us and carries us away from our iterative approach to
        problem-solving.
      </Paragraph>

      <Paragraph>
        I firmly believe that the best way to build platforms is to build a
        suite of independent and loosely connected products. The benefits are
        numerous:
        <ol>
          <li>
            Independent products can evolve at their own pace. It makes it
            easier to iterate and mistakes are cheaper.
          </li>
          <li>
            A single team can own an entire product. Everyone on the team is
            aligned toward a single goal.{' '}
            <OutboundLink href="https://en.wikipedia.org/wiki/Conway%27s_law">
              Conway's law
            </OutboundLink>{' '}
            states that the structure of a system is a reflection of the
            communication pattern of its individuals. Because communication
            within teams is stronger than in between teams, products will
            naturally be loosely coupled.
          </li>
          <li>
            It’s much easier to avoid scope creep because each product fulfills
            one single goal. Trying to add a new feature that isn’t aligned with
            any of the platform's existing products? Let’s create a new product
            and a new team!
          </li>
        </ol>
      </Paragraph>

      <Paragraph>
        Cathal Horan from Intercom uses the{' '}
        <OutboundLink href="https://www.intercom.com/blog/what-the-evolution-of-cities-can-teach-us-about-building-platforms/">
          metaphor of the city to describe platforms
        </OutboundLink>
        . He writes "Like any complex entity that changes over time, it is
        difficult to fully predict its outcome or plan its evolution." Building
        a monolithic platform from scratch is such a huge undertaking, chances
        are requirements will have changed before its completion.
      </Paragraph>

      <Figure
        src={platformImage}
        alt="Roam's platform"
        caption="The new Roam platform: a suite of independent tools"
      />

      <SectionHeading title="Promoting design thinking through example" />

      <Paragraph>
        At a small startup like Roam (around 50 employees), I had to wear many
        hats: from Frontend Engineer to Product Designer, and even Product
        Manager. I believe many of the mistakes I’ve talked about could have
        been avoided if I had worn my designer hat more often.
      </Paragraph>

      <Paragraph>
        It's not enough to be the only design voice at Roam. Even hiring more
        designers would not fix this issue completely. Creating a strong design
        culture is increasingly important. Recently, I’ve been empowering other
        people at Roam to have a product mindset. I've focused my efforts in
        arming people with design tools they can use to solve similar problems
        on their own. I found teaching by example to be a powerful tool. I’ve
        led multiple design sprints with cross-functional teams. My biggest
        surprise was seeing the emergence of design champions at Roam. As one of
        my teammates puts it: “Design was limited to the Annotation Manager, but
        Jordan brought it to the rest of Roam”.
      </Paragraph>
    </Article>
  );
}
