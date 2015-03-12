`import DS from "ember-data";`

Project = DS.Model.extend
  relatedProjects: DS.hasMany('project', {async: true, inverse: 'isRelatedTo'})
  isRelatedTo: DS.hasMany('project', {async: true, inverse: 'relatedProjects'})

  name: DS.attr()
  rank: DS.attr()
  color: DS.attr()
  logo: DS.attr()
  date: DS.attr()
  summary: DS.attr()
  description: DS.attr()

Project.reopenClass
  FIXTURES: [
    id: 1
    name: 'SixDoors'
    rank: 'main'
    color: '#CD4429'
    logo: 'sixdoors-logo.png'
    date: 'May 2013 to May 2014 (13 months)'
    relatedProjects: [2,3]
    summary: 'Joined the San Francisco\' startup SixDoors before launch as a web developper.'
    description: """
      <p>I worked as a web developer intern at SixDoors for one year. I stopped my studies at INSA of Lyon one year to follow my dreams and work for a San Francisco\'s Startup! SixDoors is an iOS app which allows customers to shop from local stores and be delivered the same day. I was in charge of the development of the Sixdoors web apps:</p>

      <p><strong>SixDoors web store:</strong> built with EmberJS, it generated more than 50% of SixDoors sales.</p>

      <img src="assets/images/projects/sixdoors-webstore.png" alt="Sixdoors Web Store"/>
      <div class="image-caption">SixDoors Web Store's front page</div>

      <p><strong>Seller web app:</strong> a web app used by sellers to list products, manage their account, track and create orders. It was first developed with EmberJS and then I switched to AngularJS.</p>
      <p><strong>Courier web app:</strong> a mobile web app used by the SixDoors couriers to deliver the products as fast as possible. It ran on every recent device. It was first developed with Sencha Touch 2 and then EmberJS and Ratchet.</p>

      <img src="assets/images/projects/sixdoors-courier-list.png" alt="SixDoors Courier's app. List view."/>
      <img src="assets/images/projects/sixdoors-courier-details.png" alt="SixDoors Courier's app. Product view."/>
      <div class="image-caption">SixDoors Courier's app. List of deliveries and product details</div>

      <p><strong>SixDoors-Shopify connector:</strong> it integrated Shopify with SixDoors. It allowed stores to connect their Shopify account to SixDoors and automatically synchronize their inventory. Server side developed with Ruby on Rails and client with AngularJS.</p>

      <p>It was the first time I took part to this kind of project. Everything had to be developed from scratch and in a very short time. I had to learn two new Javascript frameworks: EmberJS and AngularJS, a new syntax: CoffeeScript, a new language: Rails and to deal with various APIs. It was very challenging!</p>
      """
  ,
    id: 2
    name: 'CityDomination'
    rank: 'main'
    color: '#4A5363'
    logo: 'city-domination-logo.png'
    date: 'Sept. 2011 to Dec. 2012 (16 months)'
    relatedProjects: []
    summary: 'Mobile geolocated game I co-founded. 1000 players on the first month. Later acquired by Mob In Life.'
  ,
    id: 3
    name: 'Direct Matin'
    rank: 'main'
    color: '#98041E'
    logo: 'direct-matin-logo.png'
    date: 'June to Aug. 2012 (3 months)'
    relatedProjects: []
    summary: 'Developped a web app for a national newspaper while interning at Kreactive. Seen in Paris\' subway and newspapers.'
  ,
    id: 10
    name: 'StartupViz'
    rank: 'class'
    color: '#8459BD'
    logo: 'startupviz-logo.png'
    date: 'Sept. to Dec. 2014'
    relatedProjects: []
    summary: 'An interactive visualization of the US startup universe. Presented at the University of Washington\'s Startup Hall'
  ,
    id: 11
    name: 'Haiku Deck'
    rank: 'class'
    color: '#EEEEEE'
    logo: 'haiku-deck-logo.png'
    date: 'Jan. to Mar. 2015'
    relatedProjects: []
    summary: 'User testing of the presentation tool Haiku Deck. Ran a study with 8 participants.'
  ,
    id: 21
    name: 'DinoFit'
    rank: 'side'
    color: '#215F41'
    logo: 'dinofit-logo.png'
    date: 'From June 2014'
    relatedProjects: []
    summary: 'A fitness Android app that keeps users engaged. Soon to be launched!'
  ,
    id: 22
    name: 'Labello'
    rank: 'side'
    color: '#ECF0F1'
    logo: 'labello-logo.png'
    date: 'Feb. 2015 (1 week)'
    relatedProjects: []
    summary: 'A web app for labelling and analysing documents. Developped in less than one week!'
  ,
    id: 23
    name: 'Veritabs'
    rank: 'side'
    color: '#222222'
    logo: 'veritabs-logo.png'
    date: 'From Feb. 2013 to now'
    relatedProjects: []
    summary: 'A Chrome extention that let you display the tabs vertically. Up to 30 000 users!'
  ,
    id: 24
    name: 'Smart Bricks'
    rank: 'side'
    color: '#E2E2E2'
    logo: 'smart-bricks-logo.png'
    date: 'Sept. 2011 to May 2012 (9 months)'
    relatedProjects: []
    summary: 'A web store selling original LEGO sets. Developped everything by myself from idea, to products ready to ship!'
  ]

`export default Project;`