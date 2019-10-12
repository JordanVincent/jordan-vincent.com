import Ember from 'ember';

export default Ember.Route.extend({
  headData: Ember.inject.service(),

  activate() {
    this.set('headData.description', 'What does the United States look like from major airports?');
    this.set('headData.image', 'http://jordan-vincent.com/assets/images/meta-image-us-flights.png');
    // Request desktop view on mobile
    this.set('headData.viewport', 'width=1000');
  },

  deactivate() {
    this.set('headData.viewport', null);
  },

  title() {
    return 'A flight against time | Jordan Vincent';
  }
});
