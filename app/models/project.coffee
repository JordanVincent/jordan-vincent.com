`import DS from "ember-data";`

Project = DS.Model.extend
  name: DS.attr()
  rank: DS.attr()
  color: DS.attr()
  logo: DS.attr()
  date: DS.attr()
  summary: DS.attr()

Project.reopenClass
  FIXTURES: [
    id: 1
    name: 'SixDoors'
    rank: 'main'
    color: '#CD4429'
    logo: 'sixdoors-logo.png'
    date: 'May 2013 to May 2014 (13 months)'
    summary: 'Joined the San Francisco\' startup SixDoors before launch as a web developper.'
  ,
    id: 2
    name: 'CityDomination'
    rank: 'main'
    color: '#4A5363'
    logo: 'city-domination-logo.png'
    date: 'Sept. 2011 to Dec. 2012 (16 months)'
    summary: 'Mobile geolocated game I co-founded. 1000 players on the first month. Later acquired by Mob In Life.'
  ,
    id: 3
    name: 'Direct Matin'
    rank: 'main'
    color: '#98041E'
    logo: 'direct-matin-logo.png'
    date: 'June to Aug. 2012 (3 months)'
    summary: 'Developped a web app for a national newspaper while interning at Kreactive. Seen in Paris\' subway and newspapers.'
  ,
    id: 10
    name: 'StartupViz'
    rank: 'class'
    color: '#8459BD'
    logo: 'startupviz-logo.png'
    date: 'Sept. to Dec. 2014'
    summary: 'An interactive visualization of the US startup universe. Presented at the University of Washington\'s Startup Hall'
  ,
    id: 11
    name: 'Haiku Deck'
    rank: 'class'
    color: '#EEEEEE'
    logo: 'haiku-deck-logo.png'
    date: 'Jan. to Mar. 2015'
    summary: 'User testing of the presentation tool Haiku Deck. Ran a study with 8 participants.'
  ,
    id: 21
    name: 'DinoFit'
    rank: 'side'
    color: '#215F41'
    logo: 'dinofit-logo.png'
    date: 'From June 2014'
    summary: 'A fitness Android app that keeps users engaged. Soon to be launched!'
  ,
    id: 22
    name: 'Labello'
    rank: 'side'
    color: '#ECF0F1'
    logo: 'labello-logo.png'
    date: 'Feb. 2015 (1 week)'
    summary: 'A web app for labelling and analysing documents. Developped in less than one week!'
  ,
    id: 23
    name: 'Veritabs'
    rank: 'side'
    color: '#222222'
    logo: 'veritabs-logo.png'
    date: 'From Feb. 2013 to now'
    summary: 'A Chrome extention that let you display the tabs vertically. Up to 30 000 users!'
  ,
    id: 24
    name: 'Smart Bricks'
    rank: 'side'
    color: '#E2E2E2'
    logo: 'smart-bricks-logo.png'
    date: 'Sept. 2011 to May 2012 (9 months)'
    summary: 'A web store selling original LEGO sets. Developped everything by myself from idea, to products ready to ship!'
  ]

`export default Project;`