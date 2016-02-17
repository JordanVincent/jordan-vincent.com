`import Ember from "ember";`

ApplicationRoute = Ember.Route.extend
  title: (tokens) ->
    title = 'Jordan Vincent | '
    if !Ember.isEmpty(tokens) then title + tokens.join(' - ')
    else title + 'UX Designer, Software Engineer, Entrepreneur'

  model: (params) ->
    @store.findAll('project')

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

`export default ApplicationRoute`