`import Ember from 'ember';`

ImageSlider = Ember.Component.extend
  classNames: ['image-slider', 'img-responsive']

  _initSVG: (->
    anchor = '#' + @get('elementId') + ' .inner'
    new juxtapose.JXSlider(anchor,
      [
        src: @get('firstImageSrc')
        label: 'First version'
      ,
        src: @get('secondImageSrc')
        label: 'Final version'
      ],
      {
        animate: true
        showLabels: true
        startingPosition: '50%'
        makeResponsive: true
      }
    )
  ).on('didInsertElement')

`export default ImageSlider;`