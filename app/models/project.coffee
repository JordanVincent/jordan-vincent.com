`import DS from "ember-data";`

Project = DS.Model.extend
  name: DS.attr()
  rank: DS.attr()
  color: DS.attr()
  logo: DS.attr()

Project.reopenClass
  FIXTURES: [
    { id: 1, name: 'SixDoors', rank: 'main', color: '#CD4429', logo: 'sixdoors-logo.png' }
    { id: 2, name: 'CityDomination' , rank: 'main', color: '#4A5363', logo: 'city-domination-logo.png' }
    { id: 3, name: 'Direct Matin' , rank: 'main', color: '#98041E', logo: 'direct-matin-logo.png' }

    { id: 10, name: 'StartupViz', rank: 'class', color: '#8459BD', logo: 'startupviz-logo.png' }
    { id: 11, name: 'Haiku Deck' , rank: 'class', color: '#EEE', logo: '' }

    { id: 21, name: 'DinoFit' , rank: 'side', color: '#215F41', logo: 'dinofit-logo.png' }
    { id: 22, name: 'Labello', rank: 'side', color: '#EEE', logo: '' }
    { id: 23, name: 'Veritabs' , rank: 'side', color: '#222222', logo: 'veritabs-logo.png' }
    { id: 24, name: 'SmartBricks' , rank: 'side', color: '#E2E2E2', logo: 'smart-bricks-logo.png' }
  ]

`export default Project;`