`import Ember from 'ember';`

ResizeMixin = Ember.Mixin.create

  isMobile: false
  MAX_PHONE_WIDTH: 768

  namespace: Ember.computed.reads('elementId')

  bindResize: ->
    namespace = @get('namespace')

    onResize = (e) =>
      @resized(e)

    $(window).bind "resize.#{namespace}", onResize
    @_updateIsMobile()

  unbindResize: ->
    namespace = @get('namespace')
    $(window).unbind "resize.#{namespace}"

  resized: ->
    @toggleProperty('_resized')

  _bindResize: (->
    @bindResize()
  ).on('didInsertElement')

  _unbindResize: (->
    @unbindResize()
  ).on('willDestroyElement')

  _updateIsMobile: ->
    @set 'isMobile', $(window).width() < @MAX_PHONE_WIDTH

  updateIsMobile: ( ->
    @_updateIsMobile()
  ).observes('_resized')

`export default ResizeMixin;`