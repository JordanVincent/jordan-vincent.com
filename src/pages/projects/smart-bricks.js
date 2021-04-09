import React from 'react';

import {
  Figure,
  Distribute,
  Bleed,
  SectionHeading,
  Paragraph,
  Header,
  Footer,
} from 'components/projects/utils';

import bookletOpenImage from 'assets/projects/smart-bricks/smart-bricks-booklet-open.jpg';
import bookletImage from 'assets/projects/smart-bricks/smart-bricks-booklet.jpg';
import conceptImage from 'assets/projects/smart-bricks/smart-bricks-concept.jpg';
import houseImage from 'assets/projects/smart-bricks/smart-bricks-house.jpg';
import instructionsImage from 'assets/projects/smart-bricks/smart-bricks-instructions.jpg';
import packageImage from 'assets/projects/smart-bricks/smart-bricks-package.jpg';

import './styles.scss';

export default function SmartBricks() {
  return (
    <React.Fragment>
      <Header
        title="Smart Bricks"
        subtitle="LEGO sets for grown-ups"
        about="Smart Bricks is a web store for custom LEGO sets. Smart Bricks's first product is a beautiful 2,000 pieces set designed by a LEGO artist."
        role="I founded Smart Bricks. I didn't created the LEGO model by myself, but I created a 3D model, designed the booklets, packaged the sets, and developed the web store."
        backgroundColor="#F2F7FC"
      />
      <section className="project__container">
        <Paragraph>
          As a LEGO fan, I realized that there is actually a large LEGO adult
          community. They spend their time building LEGO models, writing blogs,
          and meeting up during large events all over the world. Some of them
          have a real talent in building with LEGO bricks. Their creations are
          admired by their fans. And that's how I created Smart Bricks!
        </Paragraph>

        <SectionHeading
          title="The Concept"
          subtitle="Connecting artists and fans"
        />

        <Paragraph>
          The original idea was to create an online store where artists could
          share and sell their creation to the community. Fans could buy sets
          and build replicas, like any official LEGO sets. In order to recruit
          artists, I didn't require any extra work from the creator. All they
          had to do is license their model, and I would replicate it, create
          building instruction, buy the necessary bricks, package everything,
          and sell the sets on my website!
        </Paragraph>

        <Figure src={conceptImage} alt="Smart Bricks' concept" />

        <SectionHeading
          title="The Magic House"
          subtitle="SmartBricks's First Product"
        />

        <Paragraph>
          I reached out to artists in order to license and sell their creations.
          I signed an agreement with the Spanish artist Ricardo Valero, widely
          known as Valgarise. His work is astonishing, look for yourself:
        </Paragraph>

        <Figure src={houseImage} alt="Smart Bricks' Magic House" />

        <Paragraph>
          We decided to start with one of its best creation: The Magic House.
          This model is a beautiful 2,000 pieces Victorian house, home of an
          intriguing magician. When peeking through the windows the visitor can
          see a strange magic shop filled with secrets.
        </Paragraph>
        <Paragraph>
          The rear side is open to unveil the apartments of a charming lady. The
          elegant furniture include a piano, a sofa, a bookshelf, and more.
        </Paragraph>
        <Paragraph>
          LEGO fans can now order the house on the website. The product is
          delivered with all the pieces, a booklet containing the building
          instructions, all in a nice package, like any official LEGO sets.
        </Paragraph>

        <SectionHeading
          title="Learnings"
          subtitle="How I ordered 20,000 LEGO bricks!"
        />

        <Paragraph>
          It was my first time completing such a large project, stretching from
          the initial idea, all the way to an actual product ready to be
          shipped! I created the 3D model using the 3D software Blender. After
          creating each individual LEGO brick, I built a digital model step by
          step to create the instruction.
        </Paragraph>

        <Bleed>
          <Figure
            src={instructionsImage}
            alt="Magic house building instructions"
          />
        </Bleed>

        <Paragraph>
          The resulting building instructions is a 44 pages booklet that is easy
          to follow. Then, I ordered all the LEGO parts needed to build the
          first 10 models. Meaning, I bought nearly 20,000 pieces! After I
          received all the pieces that I ordered around the world (some pieces
          where very hard to get), I packaged everything, setup the online
          store, and waited. And waited... The irony is that I never sold any
          set!
        </Paragraph>

        <Bleed>
          <Distribute>
            <Figure src={packageImage} alt="Magic house package" />
            <Figure src={bookletImage} alt="Magic house booklet" />
            <Figure src={bookletOpenImage} alt="Magic house booklet open" />
          </Distribute>
        </Bleed>

        <Paragraph>
          When I think back, it makes me laugh! If I had to start again, I would
          do everything differently. First, reaching out to potential customers
          to validate the idea and the market size; and second, use a lean
          approach to reduce risks by starting with a small product, as a proof
          of concept.
        </Paragraph>
      </section>
      <Footer />
    </React.Fragment>
  );
}
