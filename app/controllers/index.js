import Ember from 'ember';
import projects from '../fixtures/projects';

export default Ember.Controller.extend({
  projects: Ember.computed(function() {
    return [
      projects.findBy('slug', 'dino-fit'),
      projects.findBy('slug', 'sixdoors'),
      projects.findBy('slug', 'veritabs'),
      projects.findBy('slug', 'city-domination'),
      projects.findBy('slug', 'smart-bricks')
    ];
  }).readOnly(),

  // TODO pull images from the Instagram API
  photos: [
    { src: 'A.jpg', title: 'Dusy Basin' },
    { src: 'B.jpg', title: 'Darwin Canyon' },
    { src: 'C.jpg', title: 'Le Conte Canyon' },
    { src: 'D.jpg', title: 'Lamarck Col' },
    { src: 'E.jpg', title: 'Grand Canyon' },
    { src: 'F.jpg', title: 'Sawtooth Pass' },
    { src: 'G.jpg', title: 'Colchuck Peak' },
    { src: 'H.jpg', title: 'Vesper Peak' }
  ]
});
