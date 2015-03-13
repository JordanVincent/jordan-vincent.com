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

      <div class="raw">
        <div class="col-xs-6"><img src="assets/images/projects/sixdoors-courier-list.png" alt="SixDoors Courier's app. List view."/></div>
        <div class="col-xs-6"><img src="assets/images/projects/sixdoors-courier-details.png" alt="SixDoors Courier's app. Product view."/></div>
      </div>
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
    relatedProjects: [1,3]
    summary: 'Mobile geolocated game I co-founded. 1000 players on the first month. Later acquired by Mob In Life.'
    description: """
      <p>City Domination is a mobile geolocated game. Use your smartphone to conquer the largest part of your city, the real city! The world is divided in zones which correspond to real buildings: your university, the city hall and even your house. But, it's impossible to win alone, that's why you must cooperate with your gang members. Social interactions are at the basis of the gameplay, you can play with your friends and neighbors. The game combines social connections in your local neighborhood using mobile phones.</p>

      <div class="raw">
        <div class="col-xs-6"><img src="assets/images/projects/citydomination-best.png" alt="CityDomination's poster"/></div>
        <div class="col-xs-6"><img src="assets/images/projects/citydomination-map.png" alt="CityDomination's map"/></div>
      </div>
      <div class="image-caption">CityDomination's Android app</div>

      <p>I was one of the four original founders. I participated in all the project phases, from the idea, to the launching. I was responsible for the gameplay, the graphics and all the front-end part, that is to say the website and the webapp. I used the Javascript framework Sencha Touch 2 to quickly build a maintainable iPhone webapp. Moreover, I helped to develop the server part which is based on the PHP framework Symfony 2. We used a REST architecture and developed our own API to communicate with our multiple apps: the website, the webapp, and the Android app.
      </p>

      <p>I left the project in December 2012 due to a lack of time and my studies at INSA of Lyon. CityDomination has been acquired by the gaming company Mob In Life and is now one of their most successful game.</p>
      """
  ,
    id: 3
    name: 'Direct Matin'
    rank: 'main'
    color: '#98041E'
    logo: 'direct-matin-logo.png'
    date: 'June to Aug. 2012 (3 months)'
    relatedProjects: [1,2]
    summary: 'Developped a web app for a national newspaper while interning at Kreactive. Seen in Paris\' subway and newspapers.'
    description: """
      <p>In summer the 2012, I interned for 3 months at Kreactive, a web and mobile agency in Lyon, France. I was in charge of the development of a mobile web app for the French newspaper Direct Matin.</p>

      <div class="raw">
        <div class="col-xs-6"><img src="assets/images/projects/direct-matin-home.png" alt="Direct Matin's homepage"/></div>
        <div class="col-xs-6"><img src="assets/images/projects/direct-matin-menu.png" alt="Direct Matin's menu"/></div>
      </div>
      <div class="image-caption">DirectMatin's Android app</div>

      <p>Kreactive wanted to use the new mobile Javascript framework Sencha Touch 2 which had never been used before. I was assisted by the project manager plus another web developer but I had a lot of freedom. The biggest challenge was to adapt the app to all kind platforms and devices, ranging from iPads, iPhones, Android tablets and phones! Finally after 3 months we submitted the app on the AppStore and Google Play.</p>

      <p>I really enjoyed working on an app which is now used by thousands of people every day. Visiting Paris, I was surprised to see in the subway ads promoting the app!</p>
      """
  ,
    id: 10
    name: 'StartupViz'
    rank: 'class'
    color: '#8459BD'
    logo: 'startupviz-logo.png'
    date: 'Sept. to Dec. 2014'
    relatedProjects: [11]
    summary: 'An interactive visualization of the US startup universe. Presented at the University of Washington\'s Startup Hall'
    description: """
      <p>An interactive visualization of US startup universe. Using the CrunchBase dataset, StartupViz allows you to make your own discoveries. You can explore everything from general trends in certain sectors or regions to funding round details for a particular startup.</p>

      <img src="assets/images/projects/startupviz-map.png" alt="StartupViz website"/>
      <div class="image-caption">StartupViz website</div>

      <p>The design was tested repeatedly through user testing sessions at the UW Busines School and Startup Hall. Feedbacks from users were very positive:</p>

      <q>Normally I have to google competitors or look through all individual entries in Crunchbase to find startups that are similar to ours. Once we even bought a report that contained similar information for around $4000. Seeing how much funding these companies got in their investment rounds can help us to ask for the right amount from our investors.  I would definitely use this tool and pay for it! Probably not $4000, but I would pay for it.</q>
      <p class="quote-author">&ndash; Greg Robinson, CEO at Wovnenergy</p>

      <p>The tool was designed by UW Human Centered Design and Engineering graduate students to provide a more user-friendly way to understand and analyze such a comprehensive dataset.</p>
    """
  ,
    id: 11
    name: 'Haiku Deck'
    rank: 'class'
    color: '#EEEEEE'
    logo: 'haiku-deck-logo.png'
    date: 'Jan. to Mar. 2015'
    relatedProjects: [10]
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
    description: """
      <p>Smart Bricks is a web store selling original LEGO sets. I realized that there is a large LEGO adult community. They spend their time building nice models, creating a myriad of blogs and organizing events all over the world. Some of them have a real talent in building with LEGO bricks and their creations are admired by their fans. And that's why I created Smart Bricks!</p>

      <img src="assets/images/projects/smart-bricks-concept.png" alt="The Smart Bricks' concept"/>
      <div class="image-caption">The Smart Bricks' concept</div>

      <p>I contacted artists in order to duplicate and sell their creations. I've an agreement with a Spanish artist. Now LEGO fans can now order a nice 2000 pieces LEGO house on my website. The product is delivered with all the pieces, and a booklet containing the building instructions in a nice cardboard, like official LEGO sets.</p>

      <div class="raw">
        <div class="col-xs-6"><img src="assets/images/projects/smart-bricks-house.jpg" alt="Smart Bricks' Magic House"/></div>
        <div class="col-xs-6"><img src="assets/images/projects/smart-bricks-product.jpg" alt="Model, box and instructions"/></div>
      </div>
      <div class="image-caption">Smart Bricks' Magic House. It comes with all pieces and instructions in a nice collector package.</div>

      <p>LEGO artists had nothing to do, I took care of everything: creating the building instructions in 3D, designing and printing the box and the booklet, buying the pieces, shipping the model... It was very complex and time consuming however I'm really proud because I carried on the project, from start to finish by mayself.</p>
    """
  ]

`export default Project;`