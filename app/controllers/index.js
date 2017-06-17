import Ember from 'ember';

export default Ember.Controller.extend({
  projects: [{
    name: 'DinoFit',
    date: '2015',
    position: 'Creator',
    description: "A fitness app that keeps users motivated while doing pushups. Uses gamification to make working out fun and empowering."
  },{
    name: 'SixDoors',
    date: '2013&ndash;14',
    position: 'Web Developer',
    description: "I stopped my studies at INSA of Lyon for one year to follow my dreams and work for a San Francisco's startup."
  },{
    name: 'Veritabs',
    date: '2013',
    position: 'Creator',
    description: "A Google Chrome plugin that helps you stay organized by displaying tabs horizontally."
  },{
    name: 'City Domination',
    date: '2011&ndash;12',
    position: 'Co-founder',
    description: "A mobile game that uses geolocation to conquer the real world. Downloaded over a million times!"
  },{
    name: 'Smart Bricks',
    date: '2011',
    position: 'Creator',
    description: "A web store for custom LEGO sets. I partnered with LEGO artists to distribute their creations."
  }]
});
