import Ember from 'ember';
import { parks, parkGroups } from '../fixtures/us-parks';

export default Ember.Route.extend({
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

  titleToken() {
    return 'A Night Under The Stars';
  }
});
