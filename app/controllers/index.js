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
      projects.findBy('slug', 'bittitan-ux'),
      projects.findBy('slug', 'sixdoors'),
      projects.findBy('slug', 'veritabs'),
      projects.findBy('slug', 'city-domination')
    ];
  }).readOnly(),

  // TODO pull images from the Instagram API
  photos: [
    { src: '/assets/images/instagram/E.jpg', title: 'Mount Assiniboine' },
    { src: '/assets/images/instagram/F.jpg', title: 'Mount Lyell' },
    { src: '/assets/images/instagram/A.jpg', title: 'Lone Pine Peak' },
    { src: '/assets/images/instagram/B.jpg', title: 'Tennessee Valley Beach' },
    { src: '/assets/images/instagram/C.jpg', title: 'Death Valley' },
    { src: '/assets/images/instagram/D.jpg', title: 'Thousand Island Lake' },
    { src: '/assets/images/instagram/G.jpg', title: 'Colchuck Peak' },
    { src: '/assets/images/instagram/H.jpg', title: 'Vesper Peak' }
  ]
});
