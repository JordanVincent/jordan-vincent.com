import Ember from 'ember';

export default Ember.Mixin.create({
  headData: Ember.inject.service(),

  afterModel() {
    this._super(...arguments);
    this.set('headData.description', 'UX Designer and Software Engineer living in SF Bay Area.');
    this.set('headData.image', 'http://jordan-vincent.com/assets/images/meta-image.jpg');
  }
});
