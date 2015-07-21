`import Ember from 'ember';`
`import ScrollingMixin from '../mixins/scrolling';`
`import ResizeMixin from '../mixins/resize';`
`import Snap from 'snap-svg';`
`import mina from 'mina';`

NavResponsive = Ember.Component.extend ScrollingMixin, ResizeMixin,
  classNames: ['nav-responsive']
  attributeBindings: ['style']

  height: ( -> 0
  ).property()

  style: (->
    show = @get('display') or $(window).width() <= 768
    top  = if show then 0 else (- @get('height'))
    "top: #{top}px;".htmlSafe()
  ).property('display', 'height').readOnly()

  _calculateHeight: (->
    height = @$().outerHeight()
    @set('height', height)
  ).on('didInsertElement')

  scrolled: ->
    @_resetDisplay()

  resized: ->
    @_resetDisplay()

  _resetDisplay: ->
    windowH = $(window).height()
    threshold = if windowH > 600 then 600 else windowH
    display = $(window).scrollTop() > threshold

    @set('display', display)


`export default NavResponsive;`