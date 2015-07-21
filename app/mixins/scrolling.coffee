`import Ember from 'ember';`

ScrollingMixin = Ember.Mixin.create

  namespace: Ember.computed.reads('elementId')

  bindScrolling: ->
    namespace = @get('namespace')

    onScroll = (e) =>
      @scrolled(e)

    $(window).bind "touchmove.#{namespace}", onScroll
    $(window).bind "scroll.#{namespace}", onScroll

  unbindScrolling: ->
    namespace = @get('namespace')
    $(window).unbind "scroll.#{namespace}"
    $(window).unbind "touchmove.#{namespace}"

  scrolled: Ember.K

  _bindScrolling: (->
    @bindScrolling()
  ).on('didInsertElement')

  _unbindScrolling: (->
    @unbindScrolling()
  ).on('willRemoveElement')

`export default ScrollingMixin;`