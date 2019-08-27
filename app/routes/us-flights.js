import Ember from 'ember';

export default Ember.Route.extend({
  headData: Ember.inject.service(),

  // afterModel() {
  //   this.set('headData.description', 'Explore overnight stays at US National Parks and uncover surprising patterns.');
  //   this.set('headData.image', 'http://jordan-vincent.com/assets/images/meta-image-nps-nights.png');
  // },

  title() {
    return 'A flight against time | Jordan Vincent';
  }
});
