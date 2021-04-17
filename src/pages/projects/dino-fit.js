import React from 'react';

import {
  Figure,
  Bleed,
  SectionHeading,
  Heading,
  Paragraph,
  Article,
  Distribute,
} from 'components/projects/utils';

import dino1Image from 'assets/projects/dino-fit/dino-fit-dino1.jpg';
import dino2Image from 'assets/projects/dino-fit/dino-fit-dino2.jpg';
import dino3Image from 'assets/projects/dino-fit/dino-fit-dino3.jpg';
import itemsImage from 'assets/projects/dino-fit/dino-fit-items.png';
import onboardingImage from 'assets/projects/dino-fit/dino-fit-onboarding.gif';
import progressImage from 'assets/projects/dino-fit/dino-fit-progress.gif';
import volcanoImage from 'assets/projects/dino-fit/dino-fit-volcano.gif';

import './dino-fit.scss';

export default function DinoFit() {
  return (
    <Article
      title="DinoFit"
      subtitle="Exercise while playing"
      about="You have certainly tried in the past to work out every day. But staying motivated is challenging, it's much easier to sit on the couch playing on your phone. DinoFit takes a different approach, it's a game that requires you to do push-ups to win!"
      role="I created DinoFit from scratch from visual design to development."
    >
      <Bleed>
        <Figure src={itemsImage} alt="DinoFit Items" />
      </Bleed>

      <SectionHeading title="Core Concepts" />

      <Heading>Challenges &amp; Rewards</Heading>
      <Paragraph>
        Workouts have different level of difficulty. In the beginning it’s
        fairly simple, but it gets harder as time goes! On the flip side, the
        more difficult the workout, the more points users earn; which will help
        them attain the end goal quicker.
      </Paragraph>

      <Heading>A Tailored Experience</Heading>
      <Paragraph>
        Not everyone is the same, and DinoFit knows it. In the beginning, a
        short test evaluates the user’s shape to suggest adapted trainings.
        After each training, depending on the user feedback, the app generates
        harder or easier workouts!
      </Paragraph>

      <Heading>The End Goal</Heading>
      <Paragraph>
        There is nothing better to stay motivated than a clear goal. The app
        shows the user’s progress at any moment and how to attain the goal. The
        game includes three difficulty levels, from novices to experts.
      </Paragraph>

      <SectionHeading title="A delightful experience" />

      <div className="pages/projects/DinoFit__right-bleed">
        <div className="pages/projects/DinoFit__left-column">
          <Heading>Onboarding</Heading>
          <Paragraph>
            Studies have shown that most people downloading an app uninstall it
            in the next 10 seconds. Thus, engaging users starts from the moment
            they open it for the first time. The first impression is the most
            important.
          </Paragraph>
          <Paragraph>
            The onboarding flow in DinoFit, walks the user through the core
            concepts of the app.
          </Paragraph>
          <Paragraph>
            At the end of the introduction, the app prompts the user to test
            their level by performing a quick push-ups test. It gives the
            opportunity to the user to try the app right away! However, this
            last step is optional and can also be completed later.
          </Paragraph>

          <Heading>Storyline</Heading>
          <Paragraph>
            To keep the onboarding experience engaging, it is built around a
            strong storyline. A Dinosaur’s village is threatened by an erupting
            volcano. What can they do to save their village? That’s were the
            main character (the actual user) can avoid the cataclysm by pumping
            water (doing push-ups) regularly.
          </Paragraph>
        </div>
        <div className="pages/projects/DinoFit__right-column">
          <Figure src={onboardingImage} alt="DinoFit onboarding flow" />
        </div>
      </div>

      <div className="pages/projects/DinoFit__right-bleed">
        <div className="pages/projects/DinoFit__left-column">
          <Heading>Illustrations</Heading>
          <Paragraph>
            DinoFit was built from the ground up as a game. Working out is
            generally not a pleasant thing. On each screen, the app features
            illustrations and live effects to make the overall experience more
            delightful.
          </Paragraph>
          <Paragraph>
            In contrast to all other fitness apps, I used humor to create a
            light atmosphere. It took a lot of time creating illustrations and
            effects but I am very satisfied with the result.
          </Paragraph>

          <Heading>Live Animations</Heading>
          <Paragraph>
            The app features a few live animations. Like illustrations,
            animations are delightful experiences that make using the app
            enjoying.
          </Paragraph>
          <Paragraph>
            But the main reason for using animations is to{' '}
            <b>provide direct feedback on the users’ actions.</b> For instance,
            when doing push-ups, the water level indicates the current progress.
            During rest periods, the water lever gradually goes down, again
            showing progress.
          </Paragraph>
          <Paragraph>
            It is also a way to bring back gameplay concepts. While doing
            push-ups, the user metaphorically pumps water and then dumps it
            during rest periods!
          </Paragraph>
          <Paragraph>
            The other live animation is the fumes coming out of the volcano on
            the main screen. The fumes show how active the volcano is. If the
            user didn’t open the app in a while, there will be more fumes,
            indicating it is time to exercise before the volcano erupts!
            Conversely, the closer the user is from completing the goal, the
            less fumes there are.
          </Paragraph>
        </div>
        <div className="pages/projects/DinoFit__right-column">
          <Figure src={progressImage} alt="Progress animation" />
          <Figure src={volcanoImage} alt="Volcano animation" />
        </div>
      </div>

      <SectionHeading title="Development" />

      <Paragraph>
        I always wanted to create an Android app. I started thinking about the
        concept in June 2014. After sketching many gameplay ideas and
        interactions, I started developing a first version in about 3 months. I
        developed a Ruby on Rails server to store user’s information and
        generate new workouts every day. The app and the server would
        communicate through a REST API.
      </Paragraph>
      <Paragraph>
        It worked very well, but I also became very busy with school around that
        time while entering at the University of Washington.
      </Paragraph>

      <Distribute>
        <Figure src={dino1Image} alt="Dino sketch" />
        <Figure src={dino2Image} alt="Dino wireframe" />
        <Figure src={dino3Image} alt="Dino illustraction" />
      </Distribute>

      <Paragraph>
        Around April 2015, I started the project again but from scratch,
        learning from my first experience. I spent a month creating a high
        fidelity mockup of the app, and then another month developing the app. I
        ditched the server and managed to generate workouts on the phone
        directly. Because there is no need to wait for any server, it is more
        responsive than ever.
      </Paragraph>
      <Paragraph>
        The app is currently in closed beta. However, I have started many other
        projects and I didn’t have the time to release it yet, although it is
        ready to launch. So stay tuned!
      </Paragraph>
    </Article>
  );
}
