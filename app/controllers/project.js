import Ember from 'ember';
import chroma from 'chroma-js';

export default Ember.Controller.extend({

  coverColor: Ember.computed('model.coverColor', function() {
    return this.get('model.coverColor') || '#F2F7FC';
  }).readOnly(),

  isCoverDark: Ember.computed('coverColor', function() {
    return chroma(this.get('coverColor')).luminance() < 0.5;
  }).readOnly(),
});
