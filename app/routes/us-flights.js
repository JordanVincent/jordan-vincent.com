import Ember from 'ember';

export default Ember.Route.extend({
  headData: Ember.inject.service(),

  afterModel() {
    this.set('headData.description', 'What does the United States look like from major airports?');
    this.set('headData.image', 'http://jordan-vincent.com/assets/images/meta-image-us-flights.png');
  },

  title() {
    return 'A flight against time | Jordan Vincent';
  }
});
