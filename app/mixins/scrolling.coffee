`import Ember from 'ember';`

ScrollingMixin = Ember.Mixin.create

  bindScrolling: ->

    onScroll = (e) =>
      Ember.run.debounce(@, @scrolled, 150)

    $(window).bind 'touchmove', onScroll
    $(window).bind 'scroll', onScroll

  unbindScrolling: ->
    $(window).unbind 'scroll'
    $(window).unbind 'touchmove'

`export default ScrollingMixin;`