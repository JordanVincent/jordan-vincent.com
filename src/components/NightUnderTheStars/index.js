import React from 'react';
import { Link } from 'gatsby';
import { OutboundLink } from 'gatsby-plugin-google-gtag';

import PageMetadata from 'components/PageMetadata';

import legend from './legend';
import parkGroups from './park-data';
import chartData from './chart-data';
import metaImage from './meta.png';

import './index.scss';

export default function NightUnderTheStars() {
  return (
    <div className="NightUnderTheStars">
      <PageMetadata
        title="A Night Under The Stars | Jordan Vincent"
        description="Explore overnight stays at US National Parks and uncover surprising patterns."
        image={{ src: metaImage, width: 480, height: 480 }}
      />
      <OutboundLink
        className="NightUnderTheStars__os-banner"
        href="https://outdoorstatus.com"
      >
        Tired of missing outdoor permit deadlines? Check out the Outdoor Status
        newsletter!
      </OutboundLink>

      <Link to="/" className="NightUnderTheStars__back-btn">
        Other Projects
      </Link>

      <section className="poster-header">
        <div className="poster-header-inner">
          <div className="poster-header-title">A night under the stars</div>
          <div className="poster-header-subtitle">
            A look at overnight stays at US National Parks
          </div>

          <div className="poster-header-columns">
            <p className="poster-header-lead">
              When should you pitch your tent? Or when is it better to opt for
              lodging? When should you visit to avoid the crowds? Let’s have a
              look!
            </p>

            <div className="poster-header-column-title">How to read</div>
            <p>
              We plotted the number of nights spent per month in each park. We
              separated four categories of accommodation:{' '}
              <span className="label-lodging">lodging</span>,{' '}
              <span className="label-rv">RV</span>,{' '}
              <span className="label-tent">tent</span>, and{' '}
              <span className="label-backcountry">backcountry</span>. Each
              accommodation type comes with their own characteristics which
              determine their popularity over time.
            </p>

            <div dangerouslySetInnerHTML={{ __html: legend }} />

            <p>
              A word of caution, parks don’t have the same infrastructure. Some
              parks, such as Denali National Park, don't have any lodging; and
              we know all too well that campsites are in limited supply in all
              National Parks.
            </p>
          </div>
        </div>
      </section>

      <section className="poster-body">
        {parkGroups.map((group) => (
          <div className="park-group" key={group.key}>
            <div className="park-group-header">
              <div className="park-group-title">
                {group.title}
                <span className="arrow"></span>
              </div>
              <div
                className="park-group-description"
                dangerouslySetInnerHTML={{ __html: group.description }}
              />
              <div className="park-group-legend">
                <div className="park-group-label-lodging">Lodging</div>
                <div className="park-group-label-rv">RV</div>
                <div className="park-group-label-tent">Tent</div>
                <div className="park-group-label-backcountry">Backcountry</div>
              </div>
            </div>
            <div className="park-group-body">
              {group.parks.map((park) => (
                <div
                  className="chart-wrapper"
                  key={park.id}
                  dangerouslySetInnerHTML={{ __html: chartData[park.id] }}
                />
              ))}
            </div>
          </div>
        ))}
      </section>

      <section className="poster-footer">
        <div className="poster-footer-inner">
          <p>
            Overnight stays data is made available to the public by the US
            National Park Service. Average monthly stays for the 2013–2018
            period was used.
          </p>
          <p>
            Parks with missing data were removed: American Samoa, Wrangell-St.
            Elias, Gateway Arch, Pinnacles, Carlsbad Caverns, Petrified Forest,
            and Congaree.
          </p>
          <p>
            Concession and park-owned camping were merged. Concession camping
            doesn't provide the breakdown by type (RV or tent) and I assumed
            that it followed the same proportion reported by the park. The
            proportion defaults to 50% when no reference data is present.
            Miscellaneous overnight counts were discarded for coastal parks
            (nights on boats). They were combined with tent camping for nights
            spent in group camps, and lodging for lodging-like accommodation
            (e.g. cabins).
          </p>
          <p>
            Climate data comes from the National Center for Environmental
            Information (NOAA). I used temperature normals for the 1981–2010
            period, from the nearest weather station for each national park.
          </p>
          <p className="align-right">
            <Link to="/">Jordan Vincent</Link>, August 2018
          </p>
        </div>
      </section>
    </div>
  );
}
