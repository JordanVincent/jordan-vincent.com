import Ember from 'ember';

export default Ember.Component.extend({
  classNames: ['image-slider', 'img-responsive'],

  didInsertElement() {
    this._super(...arguments)

    const anchor = '#' + this.get('elementId') + ' .inner';

    const images = [{
      src: this.get('firstImageSrc'),
      label: 'First version'
    },{
      src: this.get('secondImageSrc'),
      label: 'Final version'
    }];

    new juxtapose.JXSlider(anchor, images, {
      animate: true,
      showLabels: true,
      startingPosition: '50%',
      makeResponsive: true
    });
  }
});
