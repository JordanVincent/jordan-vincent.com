import Ember from 'ember';
import projects from '../fixtures/projects';

export default Ember.Route.extend({
  titleToken(model) {
    return model.name;
  },

  serialize(model) {
    return { project_slug: model.slug };
  },

  // TODO not found
  model(params) {
    return projects.findBy('slug', params.project_slug);
  }
});
