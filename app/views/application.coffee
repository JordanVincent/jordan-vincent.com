`import Ember from 'ember';`

ApplicationView = Ember.View.extend

  # Init smooth scroll effect on scroll
  initSimplrSmoothScroll: ( ->
    $.srSmoothscroll({
      step: 100,
      speed: 100,
      ease: 'swing',
      target: $('body'),
      container: $(window)
      })
  ).on('didInsertElement')

`export default ApplicationView;`