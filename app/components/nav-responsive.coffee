`import Ember from 'ember';`
`import ScrollingMixin from '../mixins/scrolling';`
`import ResizeMixin from '../mixins/resize';`
`import Snap from 'snap-svg';`
`import mina from 'mina';`

NavResponsive = Ember.Component.extend ScrollingMixin, ResizeMixin,
  classNames: ['nav-responsive']
  classNameBindings: ['open']
  attributeBindings: ['style']

  isMobile: false

  MAX_PHONE_WIDTH: 768

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

  _initDefaults: (->
    @_resetDisplay()
    @_updateIsMobile()
  ).on('didInsertElement')

  scrolled: ->
    @_resetDisplay()

  resized: ->
    @_resetDisplay()
    @_updateIsMobile()

  _resetDisplay: ->
    windowH = $(window).height()
    threshold = if windowH > 600 then 600 else windowH
    display = $(window).scrollTop() > threshold

    @set('display', display)

  _updateIsMobile: ->
    windowW = $(window).width()
    isMobile = windowW < this.MAX_PHONE_WIDTH

    @set('isMobile', isMobile)

  open: false,

  actions:
    toggle: ->
      @set('open', !@get('open'));



`export default NavResponsive;`