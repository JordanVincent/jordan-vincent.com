`import Ember from 'ember';`

ScrollingMixin = Ember.Mixin.create

  bindScrolling: (node) ->
    @set('node', node)

    onScroll = (e) =>
      Ember.run.debounce(@, @scrolled, 150)

    $(@get('node')).bind 'touchmove', onScroll
    $(@get('node')).bind 'scroll', onScroll

  unbindScrolling: ->
    $(@get('node')).unbind 'scroll'
    $(@get('node')).unbind 'touchmove'

`export default ScrollingMixin;`