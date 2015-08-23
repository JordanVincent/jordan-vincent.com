`import Ember from 'ember';`

ResizeMixin = Ember.Mixin.create

  namespace: Ember.computed.reads('elementId')

  bindResize: ->
    namespace = @get('namespace')

    onResize = (e) =>
      @resized(e)

    $(window).bind "resize.#{namespace}", onResize

  unbindResize: ->
    namespace = @get('namespace')
    $(window).unbind "resize.#{namespace}"

  resized: Ember.K

  _bindResize: (->
    @bindResize()
  ).on('didInsertElement')

  _unbindResize: (->
    @unbindResize()
  ).on('willDestroyElement')

`export default ResizeMixin;`