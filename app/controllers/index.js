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
  }).readOnly()
});
