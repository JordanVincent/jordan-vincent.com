import Ember from 'ember';
import projects from '../fixtures/projects';

export default Ember.Controller.extend({

  spotlightProjects: Ember.computed(function() {
    return [
      projects.findBy('slug', 'dino-fit'),
      projects.findBy('slug', 'smart-bricks')
    ];
  }).readOnly(),

  otherProjects: Ember.computed(function() {
    return [
      projects.findBy('slug', 'sixdoors'),
      projects.findBy('slug', 'veritabs'),
      projects.findBy('slug', 'city-domination')
    ];
  }).readOnly(),

  // TODO pull images from the Instagram API
  photos: [
    { src: '/assets/images/instagram/A.jpg', title: 'Dusy Basin' },
    { src: '/assets/images/instagram/B.jpg', title: 'Darwin Canyon' },
    { src: '/assets/images/instagram/C.jpg', title: 'Le Conte Canyon' },
    { src: '/assets/images/instagram/D.jpg', title: 'Lamarck Col' },
    { src: '/assets/images/instagram/E.jpg', title: 'Grand Canyon' },
    { src: '/assets/images/instagram/F.jpg', title: 'Sawtooth Pass' },
    { src: '/assets/images/instagram/G.jpg', title: 'Colchuck Peak' },
    { src: '/assets/images/instagram/H.jpg', title: 'Vesper Peak' }
  ]
});
