import React from 'react';
import { Link } from 'gatsby';
import { OutboundLink } from 'gatsby-plugin-google-gtag';

import anchorageChart from './charts/anchorage.js';
import atlantaChart from './charts/atlanta.js';
import chicagoChart from './charts/chicago.js';
import detroitChart from './charts/detroit.js';
import honoluluChart from './charts/honolulu.js';
import losAngelesChart from './charts/los-angeles.js';
import miamiChart from './charts/miami.js';
import newOrleansChart from './charts/new-orleans.js';
import newYorkChart from './charts/new-york.js';
import phoenixSummerChart from './charts/phoenix-summer.js';
import phoenixChart from './charts/phoenix.js';
import sanJuanChart from './charts/san-juan.js';
import seattleChart from './charts/seattle.js';

import anchorageMarkings from './markings/anchorage.svg';
import atlantaMarkings from './markings/atlanta.svg';
import chicagoMarkings from './markings/chicago.svg';
import detroitMarkings from './markings/detroit.svg';
import honoluluMarkings from './markings/honolulu.svg';
import losAngelesMarkings from './markings/los-angeles.svg';
import miamiMarkings from './markings/miami.svg';
import newOrleansMarkings from './markings/new-orleans.svg';
import newYorkMarkings from './markings/new-york.svg';
import phoenixSummerMarkings from './markings/phoenix-summer.svg';
import phoenixMarkings from './markings/phoenix.svg';
import sanJuanMarkings from './markings/san-juan.svg';
import seattleMarkings from './markings/seattle.svg';

import chicagoDetroitImage from './images/chicago-detroit.svg';
import newOrleansAtlantaImage from './images/new-orleans-atlanta.svg';
import phoenixSummerImage from './images/phoenix-summer.svg';
import phoenixImage from './images/phoenix.svg';

import './index.scss';

export default function FlightAgainstTime() {
  return (
    <div className="FlightAgainstTime">
      <Link to="/" className="FlightAgainstTime__back-btn">
        Other Projects
      </Link>

      <section className="header">
        <h1 className="header-title">A flight against time</h1>
        <div className="header-subtitle">
          By <Link to="/">Jordan Vincent</Link>
          <span className="bullet"></span>September 2019
        </div>
      </section>

      <div className="text">
        <p>
          Flying is the most convenient way to travel long distances that would
          otherwise take hours and days. When flying, we don’t perceive
          distances nearly as much as time spent.
        </p>
        <p>
          While traveling, local arrival time is usually more important than
          time at home. Let's imagine we fly from Los Angeles to New York City.
          Our plane takes off at 4 pm PST and lands at midnight EST. Upon
          arrival, you usually go to bed, despite being 9 pm at home, in Los
          Angeles. It appears as if it took 8 hours. But in reality, you only
          spent 5 hours on the plane.
        </p>
        <p>
          On the flight back, however, it feels much faster. If you leave New
          York City at noon, you will arrive in Los Angeles at 3:30 pm PST. It
          appears like a 3h30min flight. It feels twice as fast to go west than
          it does to go east!
        </p>
        <p>
          Strange, right? What does the rest of the United States looks like
          from major airports? Let's have a look!
        </p>

        <h2 className="section-title">East vs West</h2>
        <p>
          The Atlantic and Pacific coasts are two of the most populated regions
          in the United States. There are hundreds of flights per day making the
          trip between the coasts.
        </p>
      </div>

      <div className="subsection-header">
        <h3 className="subsection-title">Los Angeles / New York</h3>
        <p className="subsection-text">
          The New York/Los Angeles route is one of the busiest in the country
          with more than 600 flights per week.
        </p>
      </div>

      <div className="text margin-bottom-large">
        <p>
          Here is what the United States look like from Los Angeles. Because it
          feels slower to go east, it looks stretched.
        </p>
      </div>

      <div className="centered-chart margin-bottom-large">
        <div dangerouslySetInnerHTML={{ __html: losAngelesChart }} />
        <div className="chart-markings">
          <img src={losAngelesMarkings} alt="" />
        </div>
      </div>

      <div className="text margin-bottom-large">
        <p>
          From New York City, however, the United States looks squished because
          it feels faster to go west.
        </p>
      </div>

      <div className="centered-chart">
        <div dangerouslySetInnerHTML={{ __html: newYorkChart }} />
        <div className="chart-markings">
          <img src={newYorkMarkings} alt="" />
        </div>
      </div>

      <div className="subsection-header">
        <h3 className="subsection-title">Seattle / Miami</h3>
        <p className="subsection-text">
          The Seattle/Miami route isn't as frequented - with a mere 40 flights
          per week.
        </p>
      </div>

      <div className="centered-chart margin-bottom-large">
        <div dangerouslySetInnerHTML={{ __html: seattleChart }} />
        <div className="chart-markings">
          <img src={seattleMarkings} alt="" />
        </div>
      </div>

      <div className="centered-chart">
        <div dangerouslySetInnerHTML={{ __html: miamiChart }} />
        <div className="chart-markings">
          <img src={miamiMarkings} alt="" />
        </div>
      </div>

      <div className="text">
        <h2 className="section-title">At the Edge of Time</h2>
        <p>
          Things get weird when flying across time zones. When flying west, it
          feels like time is slowing down. And when flying east, it feels like
          time is speeding up.
        </p>
        <p>
          At the edge between two time zones, it’s possible to arrive at your
          destination at an earlier local time than you took off. Let’s have a
          look at Chicago and Detroit.
        </p>
      </div>
      <div className="subsection-header">
        <h3 className="subsection-title">Chicago / Detroit</h3>
        <p className="subsection-text">
          Chicago is located in the Central time zone while Detroit is located
          in the Eastern time zone.
        </p>
      </div>
      <div className="text">
        <div className="image-container bottom-shadow">
          <img src={chicagoDetroitImage} alt="Chicago/Detroit area map" />
        </div>
        <p>
          The flight between the two cities takes 1h30min. But from Chicago, it
          appears like a 2h30min trip, and from Detroit, it appears like a 30min
          trip. A difference of 2 hours.
        </p>
      </div>

      <div className="chart-row">
        <div className="circular-chart">
          <div
            className="chart-inner"
            dangerouslySetInnerHTML={{ __html: chicagoChart }}
          ></div>
          <div className="chart-markings">
            <img src={chicagoMarkings} alt="" />
          </div>
        </div>
        <div className="circular-chart">
          <div
            className="chart-inner"
            dangerouslySetInnerHTML={{ __html: detroitChart }}
          ></div>
          <div className="chart-markings">
            <img src={detroitMarkings} alt="" />
          </div>
        </div>
      </div>

      <div className="text">
        <div className="subsection-header">
          <h3 className="subsection-title">New Orleans / Atlanta</h3>
          <p className="subsection-text">
            New Orleans is located in the Central time zone while Atlanta is
            located in the Eastern time zone.
          </p>
        </div>
      </div>

      <div className="text">
        <div className="image-container top-shadow">
          <img
            src={newOrleansAtlantaImage}
            alt="New Orleans/Atlanta area map"
          />
        </div>
        <p>
          As for Chicago/Detroit, the flight between the two cities takes
          1h30min. But from New Orleans, it appears like a 2h30min trip, and
          from Atlanta, it appears like a 30min trip. A difference of 2 hours.
        </p>
      </div>

      <div className="chart-row">
        <div className="circular-chart">
          <div
            className="chart-inner"
            dangerouslySetInnerHTML={{ __html: newOrleansChart }}
          ></div>
          <div className="chart-markings">
            <img src={newOrleansMarkings} alt="" />
          </div>
        </div>
        <div className="circular-chart">
          <div
            className="chart-inner"
            dangerouslySetInnerHTML={{ __html: atlantaChart }}
          ></div>
          <div className="chart-markings">
            <img src={atlantaMarkings} alt="" />
          </div>
        </div>
      </div>

      <div className="text margin-bottom-large">
        <h2 className="section-title">Going Against Time</h2>
        <p>
          Most states follow daylight saving time. But, there is no effect on
          relative flight time because local time changes at the same moment
          everywhere.
        </p>
        <p>
          There are a few exceptions. Places such as Arizona, Hawaii, American
          Samoa, Puerto Rico, and the Virgin Islands don’t observe daylight
          saving time. In summer, when daylight saving takes effect, the rest of
          the US looks different when flying from these states. Take Phoenix,
          Arizona.
        </p>
        <img
          className="margin-top-medium margin-bottom-medium"
          src={phoenixImage}
          alt="Phoenix time zone"
        />
        <p>
          Phoenix is located at the border between Mountain and Pacific times.
          Arizona stays in Mountain Standard Time (UTC-7) year-round, but all
          other states around it change time in summer.
        </p>
        <img
          className="margin-top-medium margin-bottom-medium"
          src={phoenixSummerImage}
          alt="Phoenix time zone"
        />
        <p>
          In summer, Denver and Salt Lake City, which used to be in Phoenix's
          time zone, are now 1 hour ahead. And Phoenix's time is now the same as
          other cities on the Pacific coast. So flying to California doesn't
          save time anymore, and flying to Colorado or Utah costs 1 more hour.
          As a result, in summer, all states that observe daylight saving time
          are 1 hour further away!
        </p>
      </div>

      <div className="chart-row">
        <div className="circular-chart">
          <div
            className="chart-inner"
            dangerouslySetInnerHTML={{ __html: phoenixChart }}
          ></div>
          <div className="chart-markings">
            <img src={phoenixMarkings} alt="" />
          </div>
        </div>
        <div className="circular-chart">
          <div
            className="chart-inner"
            dangerouslySetInnerHTML={{ __html: phoenixSummerChart }}
          ></div>
          <div className="chart-markings">
            <img src={phoenixSummerMarkings} alt="" />
          </div>
        </div>
      </div>

      <div className="text margin-bottom-large">
        <h2 className="section-title">At the Edge of the World</h2>
        <p>
          Some places in the US are so far away that they are inaccessible by
          direct flight from most US cities.
        </p>
      </div>

      <div className="subsection-header">
        <h3 className="subsection-title">San Juan</h3>
        <p className="subsection-text">
          From San Juan, Puerto Rico, you can only fly directly to the East
          Coast.
        </p>
      </div>
      <div className="floating-chart" style={{ height: 400 }}>
        <div className="floating-chart-inner" style={{ right: 90 }}>
          <div dangerouslySetInnerHTML={{ __html: sanJuanChart }} />
          <div className="chart-markings">
            <img src={sanJuanMarkings} alt="" />
          </div>
        </div>
      </div>

      <div className="subsection-header">
        <h3 className="subsection-title">Anchorage</h3>
        <p className="subsection-text">
          From Anchorage, Alaska, you can only fly directly to the West Coast.
        </p>
      </div>
      <div className="floating-chart" style={{ height: 600 }}>
        <div className="floating-chart-inner" style={{ left: 50 }}>
          <div dangerouslySetInnerHTML={{ __html: anchorageChart }} />
          <div className="chart-markings">
            <img src={anchorageMarkings} alt="" />
          </div>
        </div>
      </div>

      <div className="subsection-header">
        <h3 className="subsection-title">Honolulu</h3>
        <p className="subsection-text">
          Hawaii might be further away than Alaska, yet most US airports have
          regular flights to this paradise.
        </p>
      </div>
      <div className="floating-chart" style={{ height: 700 }}>
        <div className="floating-chart-inner" style={{ left: 100 }}>
          <div dangerouslySetInnerHTML={{ __html: honoluluChart }} />
          <div className="chart-markings">
            <img src={honoluluMarkings} alt="" />
          </div>
        </div>
      </div>

      <footer className="text footer">
        <p>
          This series of charts was created using flight data from the United
          States{' '}
          <OutboundLink
            href="https://www.transtats.bts.gov/Tables.asp?DB_ID=120&DB_Name=Airline%20On-Time%20Performance%20Data&DB_Short_Name=On-Time"
            target="_blank"
            rel="noreferrer"
          >
            Bureau of Transportation Statistics
          </OutboundLink>
          . All charts, except for Phoenix’s summer chart, use data from the
          January 14-20, 2019 period. Phoenix’s summer chart uses data from the
          April 15-21, 2019 period.
        </p>
        <p>
          Relative travel durations were computed by subtracting the local
          departure time from the local arrival time.
        </p>
        <p>
          The US boundaries were computed using the time it would take a plane
          to fly to that GPS coordinate if it flew at the same speed as planes
          landing at the closest airport.
        </p>
        <p>
          Thanks to Jennifer Hwang for providing invaluable feedback and
          support.
        </p>
      </footer>
    </div>
  );
}
