import Ember from 'ember';
import { parks, parkGroups } from '../fixtures/us-parks';

export default Ember.Route.extend({
  headData: Ember.inject.service(),

  model() {
    const groups = [];

    for (let parkKey in parkGroups) {
      groups.push({
        title: parkGroups[parkKey].title,
        description: Ember.String.htmlSafe(parkGroups[parkKey].description),
        parks: parks.filter(p => p.group === parkKey).map(p => ({
          id: p.id,
          name: p.name,
          componentName: `nps-nights/charts/${p.id}`
        }))
      });
    }

    return groups;
  },

  afterModel() {
    this.set('headData.description', 'Explore overnight stays at US National Parks and uncover surprising patterns.');
    this.set('headData.image', 'http://jordan-vincent.com/assets/images/meta-image-nps-nights.png');
  },

  title() {
    return 'A Night Under The Stars | Jordan Vincent';
  }
});
