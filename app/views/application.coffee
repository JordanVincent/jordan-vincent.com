`import Ember from 'ember';`

ApplicationView = Ember.View.extend

  # Init smooth scroll effect on scroll
  initSimplrSmoothScroll: ( ->
    platform = navigator.platform.toLowerCase()
    userAgent = navigator.userAgent.toLowerCase()

    # Only enable simplr-smoothscroll for webkit browsers on windows and linux
    if (platform.indexOf('win') == 0 || platform.indexOf('linux') == 0) && (userAgent.indexOf('webkit') != -1)
      $.srSmoothscroll(
        step: 100,
        speed: 100,
        ease: 'swing',
        target: $('body'),
        container: $(window)
      )
  ).on('didInsertElement')

`export default ApplicationView;`